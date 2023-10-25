import { NextRequest, NextResponse } from "next/server";

import { connect } from "@/database/dbConfig";
import User from "@/models/userModel";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connect();

const POST = async (request: NextRequest) => {
	try {
		const reqBody = await request.json();
		const { username, password } = reqBody;

		if (!username || !password) {
			return NextResponse.json(
				{ message: "Please fill out all fields" },
				{ status: 400 }
			);
		}

		const user = await User.findOne({ username });
		if (!user) {
			return NextResponse.json(
				{ message: "User does not exist!" },
				{ status: 400 }
			);
		}

		const checkPassword = await bcrypt.compare(password, user.password);
		if (!checkPassword) {
			return NextResponse.json(
				{ message: "Incorrect Password!", success: false },
				{ status: 403 }
			);
		}

		const tokenData = {
			id: user._id,
			username: user.username,
		};

		const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!);

		const response = NextResponse.json(
			{
				message: "User logged in successfully",
				success: true,
			},
			{
				status: 200,
			}
		);

		response.cookies.set("token", token, {
			httpOnly: true,
		});

		return response;
	} catch (error) {
		return NextResponse.json(
			{
				error,
				message:
					"Error loggin in user. Please contact if the problem persists.",
			},
			{
				status: 500,
			}
		);
	}
};

export { POST };
