import Question from './Question';
import DB from '../database';
import Answer from '../answer/Answer';
import answerModel from '../answer/answerModel';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

class QuestionModel {
  private questionSchema: any;

  constructor() {
    this.questionSchema = DB.QuestionSchema;
  }

  createQuestion = async (question: Question): Promise<Question> => {
    const result = await this.questionSchema.create(question);
    return result.dataValues;
  };

  getQuestion = async (quizId: number, letter: string): Promise<Question> => {
    const data = await this.questionSchema.findAll({
      where: { quizId, letter }
    });
    const questions: Array<Question> = data.map(q => q.dataValues);
    const index = Math.floor(Math.random() * Math.floor(questions.length - 1));
    return questions[index];
  };

  answerQuestion = async (text: string, questionId: number): Promise<boolean> => {
    const answer: Answer = await answerModel.findAnswer(questionId);
    if (!answer) throw new Error('Nenhum resposta foi encontrada para a quetão');
    return isEqual(answer.text, text);
  };
}

const isEqual = (text, source) => {
  const a: string = source.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const b: string = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return a.toLowerCase() === b.toLowerCase();
};

export default new QuestionModel();
