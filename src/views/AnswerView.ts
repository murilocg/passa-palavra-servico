import { Router } from "express";
import answerController from "../controllers/answerController";

const AnswerView = Router();

AnswerView.post("/:questionId", answerController.createAnswer);

export default AnswerView;
