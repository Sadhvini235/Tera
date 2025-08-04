import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

export interface User {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const generateToken = (payload: User) => {
  const token = jwt.sign(payload, JWT_SECRET!, { expiresIn: "1h" });

  return token;
};

export default generateToken;
