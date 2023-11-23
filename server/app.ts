import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

// Importing all the routes
import signupRoute from "./routes/signupRoute.ts";
import loginRoute from "./routes/loginRoute.ts";
import logoutRoute from "./routes/logoutRoute.ts";
import usersRoute from "./routes/usersRoute.ts";

const app = express();

// setting up the middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan("dev"));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/users/signup", signupRoute);
app.use("/api/v1/users/login", loginRoute);
app.use("/api/v1/users/logout", logoutRoute);
app.use("/api/v1/users", usersRoute);

export { app };
