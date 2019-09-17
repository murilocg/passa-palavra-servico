import Question from "./Question";
import DB  from '../database';
import Answer from "../answer/Answer";
import AnswerModel from "../answer/answerModel";
import Sequelize from 'sequelize';

const Op = Sequelize.Op;
class QuestionModel {

    private QuestionSchema: any;
    
    constructor(){
        this.QuestionSchema = DB.QuestionSchema;
    }

    async createQuestion(question:Question):Promise<Question>{
        const result = await this.QuestionSchema.create(question);
        return result.dataValues;
    }
    
    async getQuestion(quizId:number, letter: string, ids: Array<number>): Promise<Question>{
        return await this.QuestionSchema.findOne({ where: {
            quizId,
            letter, 
            id:  {[Op.notIn]: ids }}
        });
    }

    async answerQuestion(text:string, questionId: number): Promise<boolean>{
        const answer:Answer = await AnswerModel.findAnswer(questionId);
        if(!answer) throw new Error("Nenhum resposta foi encontrada para a quetão")
        return isEqual(answer.text, text)
    }

}

const isEqual = (text, source) => {
    const a:string = source.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    const b:string = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return a.toLowerCase() === b.toLowerCase()
}


export default new QuestionModel();