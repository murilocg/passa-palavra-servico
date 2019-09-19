const QuizSchema = (sequelize, DataTypes) => {
  const schema = sequelize.define('quiz', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING
  });
  return schema;
};

export default QuizSchema;
