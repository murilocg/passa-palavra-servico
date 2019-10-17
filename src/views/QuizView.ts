import { Router } from "express";
import QuizController from "../controllers/quizController";

const QuizView = Router();

QuizView.post("/", QuizController.createQuiz);
QuizView.get("/", QuizController.getQuiz);

export default QuizView;
