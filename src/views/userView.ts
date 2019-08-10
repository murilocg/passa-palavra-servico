import { Router } from "express";
import userController from "../controllers/userController";

const UserView = Router();

UserView.get('/:id', userController.getUser);

export default UserView;