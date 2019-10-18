import { Router } from 'express';
import QuizController from '../controllers/quizController';

const QuizView = Router();

QuizView.post('/', QuizController.createQuiz);
QuizView.get('/', QuizController.findAll);
QuizView.delete('/:id', QuizController.deleteQuiz);
QuizView.get('/:id', QuizController.getQuizById);

export default QuizView;
