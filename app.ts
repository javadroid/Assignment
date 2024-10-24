import express, { Express, Request, Response } from "express";
import cron from "node-cron";
import mongoose from "mongoose";
import { QuestionModel } from "./question.model";

const app: Express = express();
const port = 3000;

type Question = {
  question: string;
  country: string;
  isShown: boolean;
  status: string;
};

let week = 1;

const supportedCountries = ["Singapore", "USA"];

const timezone = "Asia/Singapore";

const job = cron.schedule(
  "0 19 * * 1",
  () => {
    week += 1;
    getNextQuestions();
  },
  {
    scheduled: true,
    timezone: timezone,
  }
);

job.start();

app.get("/:country", async (req: Request, res: Response): Promise<any> => {
  const { country } = req.params;

  const question = await QuestionModel.findOne({
    country,
    status: "currently showing",
  });
  if (!question) {
    return res.status(404).json({ error: "No question available" });
  }
  res.send(question?.question);
});

app.post("/", async (req: Request, res: Response): Promise<any> => {
  const question = await QuestionModel.create({ ...req.body });
  res.send(question);
});

mongoose.connect(`mongodb://localhost:27017/question`).then(() => {
  app.listen(port, async () => {
    console.log(`Server is running on http://localhost:${port}`);
    getNextQuestions();
  });
});

function getNextQuestions(): void {
  supportedCountries.forEach(async (country) => {
    const questions = await QuestionModel.find();
    const question = questions.find((q) => q.country === country && !q.isShown);
    if (question) {
      question.isShown = true;
      question.status = "currently showing";
      await QuestionModel.updateMany(
        { status: "currently showing" },
        { $set: { status: "shown" } }
      );
      await QuestionModel.findByIdAndUpdate(question._id, { ...question });
    } else {
      const question = questions.find((q) => q.country === country);
      await QuestionModel.findByIdAndUpdate(question._id, { ...question });
      await QuestionModel.updateMany(
        { status: "shown" },
        { $set: { status: "not shown", isShown: false } }
      );
    }
  });
}
