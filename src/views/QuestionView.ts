import { Router } from "express";
import questionController from "../controllers/questionController";

const QuestionView = Router();

QuestionView.post("/:idQuestion/answer", questionController.answerQuestion);
QuestionView.get("/", questionController.getQuestion);
QuestionView.post("/:quizId", questionController.createQuestion);

export default QuestionView;
