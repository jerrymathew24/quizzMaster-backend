import jwt from "jsonwebtoken";

const authVerify = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = { userId: decodedToken.id };
    return next();
  } catch (error) {
    console.error("Error in authVerify middleware:", error);
  }
};

export { authVerify };