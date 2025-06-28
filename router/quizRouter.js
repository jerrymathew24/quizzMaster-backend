import express from "express";
import cors from "cors";
import { quizzes } from "../db/quizzes.js";

const quizRouter = express.Router();
quizRouter.use(cors());

quizRouter.route("/")
  .get((req, res) => {
    console.log("Quiz data sent to client", quizzes.data);
    res.json(quizzes);
  });

export default quizRouter;