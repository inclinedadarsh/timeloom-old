import mongoose from "mongoose";

const connect = async () => {
	try {
		mongoose.connect(
			process.env.MONGODB_URI || "mongodb://localhost:27017/timeloom"
		);
		const connection = mongoose.connection;

		connection.once("connected", () => {
			console.log("MongoDB database connection established successfully");
		});

		connection.on("error", err => {
			console.log(
				"MongoDB connection error. Please make sure MongoDB is running. " +
					err
			);
			process.exit();
		});
	} catch (error) {
		console.log("Error connecting to database");
		console.log(error);
	}
};

export { connect };
