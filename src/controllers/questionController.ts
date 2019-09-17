import { Request, Response } from "express";
import questionModel from "../models/question/questionModel";

class QuestionController {

    answerQuestion = async (req: Request, res: Response) => {
        try{
            const { idQuestion } = req.params;
            console.log(req.body)
            const answer = req.body.answer
            console.log("deu ruim");
            const result = await questionModel.answerQuestion(answer, Number(idQuestion));
            res.status(200).send({ result });
        }catch(erro){
            res.status(500).send({erro})
        }
    }

    getQuestion = async (req: Request, res: Response) => {
        try{
            const {letter, passed, quizId } = req.query
            const ids = JSON.parse(passed)
            const question = await questionModel.getQuestion(Number(quizId), letter, ids)
            res.status(200).send({ question })
        }catch(e){
            res.status(500).send({ message: e.message })
        }
    }

}

export default new QuestionController();