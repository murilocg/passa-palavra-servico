import { Request, Response } from "express";
import { quizModel } from "../models";

class QuestionController {
  createQuiz = async (req: Request, res: Response) => {
    try {
      const quiz = {
        title: req.body.title,
        user_id: req.body.userId
      };

      //Falta criar o quiz relacionado ao usuário

      res.status(200).send(quiz);
    } catch (erro) {
      res.status(500).send({ erro });
    }
  };
}

export default new QuestionController();
