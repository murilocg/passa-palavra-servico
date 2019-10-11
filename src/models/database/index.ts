const Sequelize = require("sequelize");
const config = require("./sequelizeconfig.json");

class DB {
  private sequelize;
  public QuizSchema: any;
  public QuestionSchema: any;
  public AnswerSchema: any;
  public UserSchema: any;

  constructor() {
    this.sequelize = new Sequelize(
      config.database,
      config.user,
      config.password,
      config
    );
    this.UserSchema = this.sequelize.import("../user/UserSchema");
    this.QuizSchema = this.sequelize.import("../quiz/QuizSchema");
    this.QuestionSchema = this.sequelize.import("../question/QuestionSchema");
    this.AnswerSchema = this.sequelize.import("../answer/AnswerSchema");
    this.QuizSchema.hasMany(this.QuestionSchema);
    this.QuestionSchema.hasMany(this.AnswerSchema);
  }

  async init(populate?: Function) {
    await this.sequelize.sync();
    if (populate) {
      this.truncateDB();
      populate();
    }
  }

  truncateDB() {
    this.QuizSchema.destroy({
      truncate: true,
      cascade: true,
      restartIdentity: true
    });
    this.QuestionSchema.destroy({
      truncate: true,
      cascade: true,
      restartIdentity: true
    });
    this.AnswerSchema.destroy({
      truncate: true,
      cascade: true,
      restartIdentity: true
    });
  }
}

export default new DB();
