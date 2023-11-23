import { Request, Response } from "express";

const logoutController = (req: Request, res: Response) => {
	try {
		res.cookie("token", "").status(200).json({
			message: "User logged out successfully",
			success: true,
		});
	} catch (error) {
		return res
			.status(500)
			.json({ error, message: "Error logging out user" });
	}
};

export default logoutController;
