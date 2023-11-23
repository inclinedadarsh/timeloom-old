import { NextResponse, NextRequest } from "next/server";

import authData from "@/lib/authData";

const GET = async (request: NextRequest) => {
	try {
		const data = authData(request);
		let isLoggedIn = false;
		let username = "";
		if (data) {
			isLoggedIn = true;
			username = data.username;
		}

		return NextResponse.json(
			{
				isLoggedIn,
				username,
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
