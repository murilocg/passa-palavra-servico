import User from "./User";
import DB from "../database";

class UserModel {
  private userSchema: any;

  constructor() {
    this.userSchema = DB.UserSchema;
  }

  createUser = async (user: User): Promise<User> => {
    const result = await this.userSchema.create(user);
    return result.dataValues;
  };

  findUserByEmail = async (email: string): Promise<User | undefined> => {
    const result = await this.userSchema.findOne({ where: { email } });

    if (result === null) {
      return undefined;
    }

    return result.dataValues;
  };
}

export default new UserModel();
