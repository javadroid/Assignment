import { Schema, models, model } from "mongoose";

const questionSchema = new Schema(
    {
        question: String,
        country: String,
        isShown: Boolean,
        status: String,
    },
    {
      timestamps: true,
    }
  );
  
  export const QuestionModel =
    models.QuestionModel || model("QuestionModel", questionSchema);
  