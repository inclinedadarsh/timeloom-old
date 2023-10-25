import { NextRequest, NextResponse } from "next/server";

import { connect } from "@/database/dbConfig";
import User from "@/models/userModel";

import bcrypt from "bcrypt";

connect();

const POST = async (request: NextRequest) => {
	try {
		const reqBody = await request.json();
		const { username, email, password } = reqBody;

		if (!username || !email || !password) {
			return NextResponse.json(
				{ message: "Please fill out all fields" },
				{ status: 400 }
			);
		}

		const user = await User.findOne({ email });
		if (user) {
			return NextResponse.json(
				{ message: "User already exists!" },
				{ status: 400 }
			);
		}

		const checkUsername = await User.findOne({ username });
		if (checkUsername) {
			return NextResponse.json(
				{ message: "Username already exists!" },
				{ status: 400 }
			);
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			email,
			username,
			password: hashedPassword,
		});

		const savedUser = await newUser.save();

		return NextResponse.json(
			{
				message: "User created successfully",
				success: true,
				savedUser,
			},
			{
				status: 201,
			}
		);
	} catch (error) {
		return NextResponse.json(
			{ error, message: "Error signing up user" },
			{
				status: 500,
			}
		);
	}
};

export { POST };
