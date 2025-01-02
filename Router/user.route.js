import express from "express";
import { signUp, signIn } from "../Controller/user.controller.js";

const router = express.Router();
// http://localhost:3000/user/signup
router.post("/signUp", signUp); // Corrected typo from "singUp" to "signUp"
// Uncomment and implement signIn if needed
router.post("/signIn", signIn);

export default router;