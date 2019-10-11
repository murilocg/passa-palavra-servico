import { Request, Response } from "express";
import { userModel } from "../models";

class UserController {
  create = async (req: Request, res: Response) => {
    try {
      const { email } = req.body;

      const userExists = await userModel.findUserByEmail(email);

      if (userExists) {
        return res
          .status(400)
          .send({ error: "Já existe um usuário com este email." });
      }

      const { id, name } = await userModel.createUser({ ...req.body });

      return res.send({
        user: {
          id,
          name,
          email
        }
      });
    } catch (error) {
      res.status(500).send({ error });
    }
  };
}
export default new UserController();
