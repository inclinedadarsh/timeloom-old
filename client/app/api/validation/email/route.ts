import { NextRequest, NextResponse } from "next/server";

import { connect } from "@/database/dbConfig";
import User from "@/models/userModel";

connect();

const POST = async (request: NextRequest) => {
	try {
		const reqBody = await request.json();
		const { email } = reqBody;

		if (!email) {
			return NextResponse.json(
				{ message: "Email not provided", available: false },
				{ status: 400 }
			);
		}

		const user = await User.findOne({ email });
		if (user) {
			return NextResponse.json(
				{ available: false, message: "Email not available" },
				{ status: 200 }
			);
		}

		return NextResponse.json(
			{ available: true, message: "Email available" },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
};

export { POST };
