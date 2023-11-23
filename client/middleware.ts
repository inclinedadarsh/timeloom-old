import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from "jose";

export const config = {
	matcher: ["/login", "/signup"],
};

export async function middleware(req: NextRequest) {
	const token = req.cookies.get("token")?.value || "";

	if (!token) {
		return NextResponse.next();
	}

	// const data: any = jwt.verify(token, process.env.TOKEN_SECRET!);
	const { payload } = await jwtVerify(
		token,
		new TextEncoder().encode(process.env.TOKEN_SECRET!)
	);

	return NextResponse.redirect(new URL(`/${payload.username}`, req.url));
}
