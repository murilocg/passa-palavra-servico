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

  getQuiz = async (title: string): Promise<Quiz> => {
    const result = await this.quizSchema.findOne({ where: { title: title } });

    if (result === null) {
      return undefined;
    }
    return result.dataValues;
  };

  getQuizById = async (id: number): Promise<Quiz> => {
    const result = await this.quizSchema.findOne({ where: { id } });
    return result.dataValues;
  };

  deleteQuiz = async (id: number): Promise<void> => {
    await this.quizSchema.destroy({
      where: { id },
      cascade: true
    });
  };

  findAll = async (filter: { userId?: number }): Promise<Array<Quiz>> => {
    const data = await this.quizSchema.findAll({ where: filter });
    const quizzes: Array<Quiz> = data.map(q => q.dataValues);
    return quizzes;
  };
}

export default new QuizModel();
