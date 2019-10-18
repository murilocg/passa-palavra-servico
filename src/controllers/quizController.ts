import { Request, Response } from 'express';
import { quizModel } from '../models';

class QuestionController {
  createQuiz = async (req: Request, res: Response) => {
    try {
      const quiz = await quizModel.createQuiz({ ...req.body });

      res.status(200).send(quiz);
    } catch (erro) {
      res.status(500).send({ erro });
    }
  };

  getQuiz = async (req: Request, res: Response) => {
    try {
      const { title } = req.query;
      const quiz = await quizModel.getQuiz(title);

      if (!quiz) {
        res.status(404).send({ error: 'Quiz not found' });
      }

      res.status(200).send(quiz);
    } catch (error) {
      res.status(500).send({ error });
    }
  };

  findAll = async (req: Request, res: Response) => {
    try {
      const { userId } = req.query;
      const filter = {};
      if (userId) filter['userId'] = Number(userId);
      const quizzes = await quizModel.findAll(filter);
      res.status(200).send({ quizzes });
    } catch (error) {
      res.status(500).send({ error });
    }
  };

  deleteQuiz = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await quizModel.deleteQuiz(Number(id));
      res.status(200).send();
    } catch (error) {
      res.status(500).send({ error });
    }
  };

  getQuizById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const quiz = await quizModel.getQuizById(Number(id));
      res.status(200).send(quiz);
    } catch (error) {
      res.status(500).send({ error });
    }
  };
}

export default new QuestionController();
