const AnswerSchema = (sequelize, DataTypes) => {
  const schema = sequelize.define('answer', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: DataTypes.STRING
  });
  return schema;
};

export default AnswerSchema;
