import { NextRequest, NextResponse } from "next/server";

import { connect } from "@/database/dbConfig";
import User from "@/models/userModel";

connect();

const POST = async (request: NextRequest) => {
	try {
		const reqBody = await request.json();
		const { username } = reqBody;

		if (!username) {
			return NextResponse.json(
				{ message: "Username not provided", available: false },
				{ status: 400 }
			);
		}

		const user = await User.findOne({ username });
		if (user) {
			return NextResponse.json(
				{ available: false, message: "Username not available" },
				{ status: 200 }
			);
		}

		return NextResponse.json(
			{ available: true, message: "Username available" },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
};

export { POST };
