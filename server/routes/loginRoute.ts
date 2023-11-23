import express from "express";
import loginController from "../controllers/loginController.ts";

const router = express.Router();

router.post("/", loginController);

export default router;
