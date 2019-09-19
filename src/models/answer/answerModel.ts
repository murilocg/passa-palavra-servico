import Answer from './Answer';
import DB from '../database';

class AnswerModel {
  private answerSchema: any;

  constructor() {
    this.answerSchema = DB.AnswerSchema;
  }

  createAnswer = async (answer: Answer): Promise<Answer> => {
    const result = await this.answerSchema.create(answer);
    return result.dataValues;
  };

  findAnswer = async (questionId: number): Promise<Answer | undefined> => {
    const data = await this.answerSchema.findOne({ where: { questionId } });
    return data ? data.dataValues : undefined;
  };
}

export default new AnswerModel();
