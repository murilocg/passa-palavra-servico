import express from 'express';
import UserView from './views/userView';

const app = express();
const router = express.Router();

app.use((req, res, next) => { 
res.header('Access-Control-Allow-Origin', '*'); 
res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); 
res.header('Access-Control-Allow-Methods', '*'); 
next(); 
});


app.use('/users/', router, UserView);

export default app;