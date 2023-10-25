import express from "express";
import cors from "cors";
import morgan from "morgan";

// Importing all the routes
import signupRoute from "./routes/signupRoute.ts";

const app = express();

// setting up the middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use("/api/v1/users/signup", signupRoute);

export { app };
