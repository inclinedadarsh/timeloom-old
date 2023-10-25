import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

// setting up the middlewares
app.use(cors());
app.use(morgan("dev"));
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.get("/echo", (req, res) => {
	res.send("Echo!!!");
});

export { app };
