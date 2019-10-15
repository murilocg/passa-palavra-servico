import { Router } from "express";
import QuizController from "../controllers/quizController";

const QuizView = Router();

QuizView.post("/", QuizController.createQuiz);

export default QuizView;
