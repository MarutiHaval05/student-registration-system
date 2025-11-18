import express from "express";
import auth from "../middleware/authMiddleware.js";
import { getProfile } from "../controllers/profileController.js";

const router = express.Router();

router.get("/me", auth, getProfile);

export default router;
