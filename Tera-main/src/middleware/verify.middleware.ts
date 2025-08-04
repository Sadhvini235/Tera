import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { User } from "../lib/generateToken";

const middleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(403).json({ message: "Invalid request" });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET!) as User;
    // @ts-ignore
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

export default middleware;
