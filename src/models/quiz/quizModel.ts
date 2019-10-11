import Quiz from './Quiz';
import DB from '../database';

class QuizModel {
  private quizSchema: any;

  constructor() {
    this.quizSchema = DB.QuizSchema;
  }

  createQuiz = async (quiz: Quiz): Promise<Quiz> => {
    const result = await this.quizSchema.create(quiz);
    return result.dataValues;
  };
}

export default new QuizModel();