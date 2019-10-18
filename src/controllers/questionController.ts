import { Request, Response } from 'express';
import { questionModel } from '../models';

class QuestionController {
  createQuestion = async (req: Request, res: Response) => {
    try {
      const { text, letter } = req.body;
      const { quizId } = req.params;

      const question = {
        text,
        letter,
        quizId
      };

      const result = await questionModel.createQuestion(question);

      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ error });
    }
  };
  answerQuestion = async (req: Request, res: Response) => {
    try {
      const { idQuestion } = req.params;
      const answer = req.body.answer;
      const result = await questionModel.answerQuestion(answer, Number(idQuestion));
      res.status(200).send({ result });
    } catch (erro) {
      res.status(500).send({ erro });
    }
  };

  nextQuestion = async (req: Request, res: Response) => {
    try {
      const { letter, quizId } = req.query;
      const question = await questionModel.nextQuestion(Number(quizId), letter);
      res.status(200).send({ question });
    } catch (e) {
      res.status(500).send({ message: e.message });
    }
  };

  getQuestions = async (req: Request, res: Response) => {
    try {
      const { quizId } = req.query;
      const questions = await questionModel.getQuestions(Number(quizId));
      res.status(200).send(questions);
    } catch (e) {
      res.status(500).send({ message: e.message });
    }
  };

  deleteQuestion = async (req: Request, res: Response) => {
    try {
      const { questionId } = req.params;
      await questionModel.deleteQuestion(Number(questionId));
      res.status(200).send();
    } catch (e) {
      res.status(500).send({ message: e.message });
    }
  };
}

export default new QuestionController();
