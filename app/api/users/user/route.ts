import { NextRequest, NextResponse } from "next/server";

import authData from "@/lib/authData";
import { connect } from "@/database/dbConfig";
import User from "@/models/userModel";
import Log from "@/models/logModel";

connect();

const GET = async (request: NextRequest) => {
	try {
		const username = request.nextUrl.searchParams.get("username");

		if (!username) {
			return NextResponse.json(
				{ message: "No username recieved!" },
				{ status: 400 }
			);
		}

		let isSelf = false;
		let doesExist = true;

		const data = authData(request);

		if (data?.username === username) {
			isSelf = true;
		}

		let user = await User.findOne({ username });
		if (!user) {
			doesExist = false;
		}

		// remove password field from user object before sending
		if (user) {
			user = user.toObject();
			delete user.password;
		}

		return NextResponse.json(
			{
				isSelf,
				user,
				doesExist,
			},
			{
				status: 200,
			}
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: error.message,
			},
			{
				status: 500,
			}
		);
	}
};

export { GET };
