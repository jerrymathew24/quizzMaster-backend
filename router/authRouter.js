import express from "express";
import loginHandler from "../controllers/authcontrollers.js";


const loginRouter = express.Router();

loginRouter.route("/").post(loginHandler)

export default loginRouter