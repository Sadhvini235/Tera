import User from "../models/auth.model";

import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import generateToken from "../lib/generateToken";

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const userWithoutPassword = {
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    const token = generateToken(userWithoutPassword);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax", // or 'strict' or 'none' (with secure)
      maxAge: 3600000, // 1 hour
    });

    res.status(200).json({ message: "Sign in successful" });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(409).json({ message: "User already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email: email,
      password: hashedPassword,
    });

    const userWithoutPassword = {
      id: newUser.id,
      email: newUser.email,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    };

    const token = generateToken(userWithoutPassword);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax", // or 'strict' or 'none' (with secure)
      maxAge: 3600000, // 1 hour
    });

    res.status(201).json({ message: "User created successfully" });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
