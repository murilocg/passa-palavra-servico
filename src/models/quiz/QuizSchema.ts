import { Model, BuildOptions } from "sequelize";

interface QuizSchemaInterface extends Model {
  readonly id: number;
  title: string;
}

type QuizSchemaStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): QuizSchemaInterface;
};
const QuizSchema = (sequelize, DataTypes) => {
  const schema = <QuizSchemaStatic>sequelize.define("quiz", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING
  });
  return schema;
};

export default QuizSchema;
