import { Router } from "express";
import userController from "../controllers/userController";

const UserView = Router();

UserView.post("/", userController.create);

export default UserView;
