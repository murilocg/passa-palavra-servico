import express from 'express';
import QuestionView from './views/QuestionView';
import bodyParser from 'body-parser';
import UserView from './views/UserView';
import SessionView from './views/SessionView';
import QuizView from './views/QuizView';
import AuthMiddleware from './middlewares/authMiddleware';
import AnswerView from './views/AnswerView';

const app = express();
const router = express.Router();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users/', router, UserView);
app.use('/session/', router, SessionView);
app.use('/quiz/', router, QuizView);
app.use('/questions/', router, QuestionView);
app.use('/answer/', router, AnswerView);
export default app;
