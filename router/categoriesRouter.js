import express from 'express';
import { quizzes } from "../db/quizzes.js"

const categoriesRouter = express.Router();

categoriesRouter.route("/")
.get((req, res) => {
res.json(quizzes)
})

export { categoriesRouter };