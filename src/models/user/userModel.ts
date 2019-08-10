import User from "./User";
import db  from '../database';

const UserSchema = db.User;

export class UserModel {

    async getUser(id: number): Promise<User>{
        return await UserSchema.findOne({where: {id}});
    }

}

