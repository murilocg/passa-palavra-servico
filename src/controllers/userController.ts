import { Request, Response } from "express";
import { UserModel } from "../models/user/userModel";

class UserController {

    private userModel:UserModel;

    constructor(){
        this.userModel = new UserModel();
    }

    getUser = async (req: Request, res: Response) => {
        try{
            const {id} = req.params;
            const user = await this.userModel.getUser(Number(id));
            if(user)
                res.status(200).send({user});
            else res.status(404).send("Usuário não encontrado");
        }catch(erro){
            res.status(500).send({erro})
        }
    }

}

export default new UserController();