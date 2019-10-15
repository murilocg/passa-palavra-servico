import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import authConfig from "../authConfig";
import { userModel } from "../models";

class SessionController {
  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await userModel.findUserByEmail(email);

    if (!user) {
      res.status(401).send({ error: "User not found." });
    }

    if (!(await userModel.checkPassword(user, password))) {
      res.status(401).send({ error: "Informed password does not match." });
    }

    const { id, name } = user;

    return res.send({
      id,
      name,
      email,
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    });
  };
}

export default new SessionController();
