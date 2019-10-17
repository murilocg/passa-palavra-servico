import { Request, Response } from "express";
import { quizModel } from "../models";

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
      const { title } = req.body;
      const quiz = await quizModel.getQuiz(title);

      if (!quiz) {
        res.status(404).send({ error: "Quiz not found" });
      }

      res.status(200).send(quiz);
    } catch (error) {
      res.status(500).send({ error });
    }
  };
}

export default new QuestionController();
