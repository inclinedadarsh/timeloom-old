import dotenv from "dotenv";
import { app } from "./app.ts";

dotenv.config();

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("Server is running of Port: ", port);
});
