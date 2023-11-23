import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const authData = (req: NextRequest) => {
	try {
		const token = req.cookies.get("token")?.value || "";

		if (!token) {
			return null;
		}

		const data: any = jwt.verify(token, process.env.TOKEN_SECRET!);

		return data;
	} catch (error) {
		throw new Error("Invalid Token: " + error);
	}
};

export default authData;
