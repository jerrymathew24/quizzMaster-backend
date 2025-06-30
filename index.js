import express from "express";
import cors from "cors";
import quizRouter from "./router/quizRouter.js";
import { loginRouter, signupRouter } from "./router/authRouter.js";
import { routeNotFound } from "./middleware/routeNotFound.js";
import { quizzes } from "./db/quizzes.js";
import { categoriesRouter } from "./router/categoriesRouter.js"

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json(quizzes)
});

app.use("/categories", categoriesRouter);
app.use("/quiz", quizRouter);
app.use("/auth/login", loginRouter);
app.use("/auth/signup", signupRouter);
app.use(routeNotFound);

app.listen(PORT, () => {
  console.log(`Server is spinning on http://localhost:${PORT}`);
});
