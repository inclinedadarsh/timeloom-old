import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.ts";

const usersController = async (req: Request, res: Response) => {
  try {
    const { username } = req.body;

    const token = req.cookies?.token;

    if (!username) {
      res.status(400).json({
        message: "No username revieved!",
      });
    }

    let isSelf = false;
    let doesExist = false;

    let data: any;

    if (token) {
      data = jwt.verify(token, process.env.TOKEN_SECRET!);
    }

    if (data?.username === username) {
      isSelf = true;
    }

    let user = await User.findOne({ username });
    if (user) {
      user = user.toObject();
      delete user.password;
      doesExist = true;
    }

    res.status(200).json({
      isSelf,
      doesExist,
      user,
      token,
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export default usersController;
