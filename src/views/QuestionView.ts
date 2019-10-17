import { Router } from 'express';
import questionController from '../controllers/questionController';

const QuestionView = Router();

QuestionView.post('/:idQuestion/answer', questionController.answerQuestion);
QuestionView.get('/next', questionController.nextQuestion);
QuestionView.get('/', questionController.getQuestions);
QuestionView.post('/:quizId', questionController.createQuestion);
QuestionView.delete('/:questionId', questionController.deleteQuestion);

export default QuestionView;
