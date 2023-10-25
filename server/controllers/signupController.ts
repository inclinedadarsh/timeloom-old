import bcrypt from "bcrypt";
import User from "../models/UserModel.ts";
import { Request, Response } from "express";

const signupController = async (req: Request, res: Response) => {
	try {
		const { username, email, password } = req.body;

		if (!username || !email || !password) {
			return res
				.status(400)
				.json({ message: "Please fill out all fields" });
		}

		const checkEmail = await User.findOne({ email });
		if (checkEmail) {
			return res
				.status(400)
				.json({ message: "Email already exists in the database!" });
		}

		const checkUsername = await User.findOne({ username });
		if (checkUsername) {
			return res
				.status(400)
				.json({ message: "Username already exists!" });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			email,
			username,
			password: hashedPassword,
		});

		const savedUser = await newUser.save();

		return res.status(201).json({
			message: "User created successfully",
			success: true,
			savedUser,
		});
	} catch (error) {
		return res
			.status(500)
			.json({ error, message: "Error signing up user" });
	}
};

export default signupController;
