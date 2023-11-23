import dotenv from "dotenv";
import mongoose from "mongoose";
import { app } from "./app.ts";

dotenv.config();

mongoose.connect(process.env.MONGODB_URI!);
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Database"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("Server is running of Port: ", port);
});
