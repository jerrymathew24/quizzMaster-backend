import express from "express";
import cors from "cors";
import quizRouter from "./router/quizRouter.js";
import authRouter from "./router/authRouter.js";

const app = express();
app.use(cors());
app.use(express.json());  
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello, Worldddxxyyx!");
});

app.use("/quiz", quizRouter);
app.use("/auth/login", authRouter);


app.listen(PORT, () => {
 console.log(`Server is spinning on http://localhost:${PORT}`);
});