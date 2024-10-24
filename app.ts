import express, { Express, Request, Response } from "express"; 
import cron from "node-cron"; 
import mongoose from "mongoose"; 
import { QuestionModel } from "./question.model"; 

const app: Express = express(); 
const port = 3000; 

type Question = {
  // Defining a TypeScript type for Question
  question: string;
  country: string;
  isShown: boolean;
  status: string;
};

let week = 1; // Initializing a week counter

const supportedCountries = ["Singapore", "USA"]; // List of supported countries

const timezone = "Asia/Singapore"; // Defining the timezone for scheduled jobs

// Scheduling a job to run every Monday at 7:00pm
const job = cron.schedule(
  "0 19 * * 1",
  () => {
    week += 1; // Increment the week counter
    getNextQuestions(); // Call the function to get next questions
  },
  {
    scheduled: true, 
    timezone: timezone, // Set the timezone for the job
  }
);

job.start(); // Start the scheduled job

// Endpoint to get the current question for a specific country
app.get("/:country", async (req: Request, res: Response): Promise<any> => {
  const { country } = req.params; 

  // Finding a question that is currently showing for the given country
  const question = await QuestionModel.findOne({
    country,
    status: "currently showing",
  });
  if (!question) {
    return res.status(404).json({ error: "No question available" }); // Return 404 if no question is found
  }
  res.send(question?.question); 
});

// Endpoint to create a new question
app.post("/", async (req: Request, res: Response): Promise<any> => {
  const question = await QuestionModel.create({ ...req.body }); 
  res.send(question); 
});

// Connecting to the MongoDB database and starting the server
mongoose.connect("mongodb://localhost:27017/question").then(() => {
  app.listen(port, async () => {
    console.log(`Server is running on http://localhost:${port}`); // 
    getNextQuestions(); // Fetch the next questions on startup
  });
});

// Function to get the next questions to show
function getNextQuestions(): void {
  supportedCountries.forEach(async (country) => {
    // Iterate over each supported country
    const question = await QuestionModel.findOne({country,isShown: false}); // Fetch all questions for the country that are not shown
   
    if (question) {
      question.isShown = true; // Mark the question as shown
      question.status = "currently showing"; // Update its status
      await QuestionModel.updateMany(
        // Update all currently showing questions to shown
        { status: "currently showing" },
        { $set: { status: "shown" } }
      );
      await QuestionModel.findByIdAndUpdate(question._id, { ...question }); // Update the found question
    } else {
      
     await QuestionModel.updateMany(
        // Update all shown questions to not shown
        { status: "shown" },
        { $set: { status: "not shown", isShown: false } }
      );
      const question = await QuestionModel.findOne({country,isShown: false});
      await QuestionModel.findByIdAndUpdate(question._id, { ...question }); // Update the found question
    }
  });
}
