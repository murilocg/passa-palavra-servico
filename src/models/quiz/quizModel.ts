import Quiz from "./Quiz";
import db  from '../database';

class QuizModel {

    private QuizSchema:any;

    constructor(){
        this.QuizSchema = db.QuizSchema;
    }

    async createQuiz(quiz: Quiz): Promise<Quiz>{
        const result = await this.QuizSchema.create(quiz);
        return result.dataValues;
    }
    
}

export default new QuizModel();
