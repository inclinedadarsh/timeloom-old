import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Please provide a title!"],
	},
	description: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	link: {
		text: String,
		url: String,
	},
	icon: {
		type: String,
		default: "Zap",
	},
	location: String,
	username: {
		type: String,
		required: [true, "Please provide a username!"],
	},
});

const Log = mongoose.models.Log || mongoose.model("Log", logSchema);
export default Log;
