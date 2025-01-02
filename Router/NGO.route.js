import express from "express";
import { RegisterNGO} from "../Controller/NGO.controller.js";

const router = express.Router();

router.post("/register", RegisterNGO);

export default router;