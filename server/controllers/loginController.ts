import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.ts";
import { Request, Response } from "express";

const loginController = async (req: Request, res: Response) => {
	try {
		const { username, password } = req.body;

		if (!username || !password) {
			return res
				.status(400)
				.json({ message: "Please fill out all fields" });
		}

		const user = await User.findOne({ username });
		if (!user) {
			return res.status(400).json({ message: "User does not exist!" });
		}

		const checkPassword = await bcrypt.compare(password, user.password);
		if (!checkPassword) {
			return res
				.status(403)
				.json({ message: "Incorrect Password!", success: false });
		}

		const tokenData = {
			id: user._id,
			username: user.username,
		};

		const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!);

		const response = res.status(200).json({
			message: "User logged in successfully",
			success: true,
		});

		response.cookie("token", token, {
			httpOnly: true,
		});

		return response;
	} catch (error) {
		return res
			.status(500)
			.json({ error, message: "Error logging in user" });
	}
};

export default loginController;
