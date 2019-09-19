const QuestionSchema = (sequelize, DataTypes) => {
  const schema = sequelize.define('question', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: DataTypes.STRING,
    letter: DataTypes.STRING
  });
  return schema;
};

export default QuestionSchema;
