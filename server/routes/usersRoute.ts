import express from "express";
import usersController from "../controllers/usersController.ts";

const router = express.Router();

router.post("/", usersController);

export default router;
