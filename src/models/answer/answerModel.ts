import Answer from "./Answer";
import DB  from '../database';

class AnswerModel {

    private AnswerSchema:any;

    constructor(){
        this.AnswerSchema = DB.AnswerSchema;
    }

    async createAnswer(answer:Answer):Promise<Answer>{
        const result = await this.AnswerSchema.create(answer);
        return result.dataValues;
    }

    async findAnswer(questionId: number):Promise<Answer | undefined>{
        const data =  await this.AnswerSchema.findOne({ where: { questionId } });
        return data ? data.dataValues : undefined;
    }

}
export default new AnswerModel();