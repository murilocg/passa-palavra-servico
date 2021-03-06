import QuizModel from '../quiz/quizModel';
import QuestionModel from '../question/questionModel';
import AnswerModel from '../answer/answerModel';
import UserModel from '../user/UserModel';
const data = require('./data.json');

const populateDatabase = async () => {
  const keys = Object.keys(data);

  const user = await UserModel.createUser({
    email: 'admin@gmail.com.br',
    name: 'Admin',
    password: 'admin'
  });
  const promisesQuiz = keys.map(title => {
    return QuizModel.createQuiz({ title, userId: user.id });
  });

  const quizzes = await Promise.all(promisesQuiz);
  quizzes.forEach(quiz => {
    const questionsLetters = data[quiz.title];
    questionsLetters.forEach(async (questions, i) => {
      const letter = String.fromCharCode(i + 65);
      questions.forEach(async q => {
        const question = await QuestionModel.createQuestion({
          text: q.pergunta,
          quizId: quiz.id,
          letter
        });
        await AnswerModel.createAnswer({
          questionId: question.id,
          text: q.resposta
        });
      });
    });
  });
};

export default populateDatabase;
