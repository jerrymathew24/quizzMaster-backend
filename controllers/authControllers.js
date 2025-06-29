import jwt from "jsonwebtoken";
import { v4 as uuid } from "uuid";
import { userData } from "../db/users.js";
import dotenv from "dotenv";
dotenv.config();

const signupHandler = (req, res) => {
  const { userName, password } = req.body;
  const isUserExist = userData.users.some((user) => user.userName === userName);
  if (isUserExist) {
    res.status(422).json({ message: "User already exists!" });
  } else {
    const id = uuid();
    const newUser = { id, userName, password };
    userData.users = [...userData.users, newUser];
    const token = jwt.sign({ id: userName }, process.env.SECRET_KEY);
    res
      .status(201)
      .json({ userName, token, message: "User created successfully!" });
  }
};



const loginHandler = (req, res) => {
  const { userName, password } = req.body;
  const isUserVerified = userData.users.some(
    (user) => user.userName === userName && user.password === password
  );
  if (isUserVerified) {
    const token = jwt.sign({ id: userName }, process.env.SECRET_KEY);
    res.json({ userName, token, message: " User Verified Successfully!" });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
};

export { signupHandler, loginHandler };
