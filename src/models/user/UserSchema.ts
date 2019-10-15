import { Model, BuildOptions } from "sequelize";
import bcrypt from "bcryptjs";
import User from "./User";
import UserModel from "./UserModel";

interface UserSchemaInterface extends Model {
  readonly id: number;
  name: string;
  email: string;
  password: string;
}

type UserSchemaStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserSchemaInterface;
};

const UserSchema = (sequelize, DataTypes) => {
  const schema = <UserSchemaStatic>sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  schema.beforeSave(async user => {
    if (user.password) {
      user.password = await bcrypt.hash(user.password, 8);
    }
  });

  return schema;
};

export default UserSchema;
