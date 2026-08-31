import express from "express";
const router = express.Router();
import { register, login, otpVerify } from "../controllers/user.controller.js"


router.post("/register", register);
router.post("/login", login);
router.post("/verify-otp", otpVerify);


export default router;
