import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  addCourse,
  getCourses,
  deleteCourse,
} from "../controllers/courseController.js";

const router = express.Router();

router.post("/add", auth, addCourse);
router.get("/all", auth, getCourses);
router.delete("/delete/:id", auth, deleteCourse);

export default router;
