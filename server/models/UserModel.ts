import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, "Please provide an email!"],
		unique: true,
		lowercase: true,
	},
	username: {
		type: String,
		required: [true, "Please provide a username!"],
		unique: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: [true, "Please provide a password!"],
		minlength: 8,
	},
	isVerified: {
		type: Boolean,
		default: false,
	},
	name: {
		type: String,
		required: false,
	},
	bio: {
		type: String,
		required: false,
	},
	socials: {
		email: String,
		github: String,
		twitter: String,
		instagram: String,
		linkedin: String,
		web: String,
	},
	tags: ["Founder", "First 100", "Dev"],
	button: {
		text: String,
		link: String,
	},
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
