import { Request, Response } from "express";
import { answerModel } from "../models";

class AnswerController {
  createAnswer = async (req: Request, res: Response) => {
    try {
      const { questionId } = req.params;
      const { text } = req.body;

      const answer = { questionId, text };

      const result = await answerModel.createAnswer(answer);

      return res.status(200).send({ result });
    } catch (error) {
      res.status(500).send({ error });
    }
  };
}

export default new AnswerController();
