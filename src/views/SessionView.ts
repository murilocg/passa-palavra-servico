import { Router } from "express";
import SessionController from "../controllers/sessionController";

const SessionView = Router();

SessionView.post("/", SessionController.login);

export default SessionView;
