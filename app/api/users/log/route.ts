import { NextRequest, NextResponse } from "next/server";

import authData from "@/lib/authData";
import { connect } from "@/database/dbConfig";
import Log from "@/models/logModel";

connect();

const POST = async (request: NextRequest) => {
	try {
		const data = authData(request);
		if (!data) {
			return NextResponse.json(
				{ message: "Not authorized!" },
				{ status: 401 }
			);
		}

		const reqBody = await request.json();
		const { title, description, link, icon, location, date } = reqBody;

		if (!title) {
			return NextResponse.json(
				{ message: "No title recieved!" },
				{ status: 400 }
			);
		}

		const logObj = {
			title,
			date: date || Date.now(),
			...(description && { description }),
			...(link && { link }),
			...(icon && { icon }),
			...(location && { location }),
			username: data.username,
		};

		const newLog = await new Log(logObj);
		const savedLog = await newLog.save();

		return NextResponse.json(
			{
				message: "Log created successfully",
				success: true,
				savedLog,
			},
			{
				status: 201,
			}
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Something went wrong!", error },
			{ status: 500 }
		);
	}
};

const GET = async (request: NextRequest) => {
	try {
		const username = request.nextUrl.searchParams.get("username");

		if (!username) {
			return NextResponse.json(
				{ message: "No username recieved!" },
				{ status: 400 }
			);
		}

		const logs = await Log.find({ username }).sort({ date: -1 });

		return NextResponse.json(
			{
				message: "Logs fetched successfully",
				success: true,
				logs,
			},
			{
				status: 200,
			}
		);
	} catch (error) {
		return NextResponse.json(
			{ message: "Something went wrong!", error },
			{ status: 500 }
		);
	}
};

export { POST, GET };
