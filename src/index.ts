import app from './app';
import { DB } from './models';
import populateDatabase from './models/database/createQuizScript';
const port = 3000;
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  DB.init();
  return console.log(`server is listening on ${port}`);
});
