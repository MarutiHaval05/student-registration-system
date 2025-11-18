import Course from "../models/Course.js";

export const addCourse = async (req, res) => {
  const { name } = req.body;

  const course = await Course.create({
    name,
    user: req.user._id,
  });

  res.json(course);
};

export const getCourses = async (req, res) => {
  const courses = await Course.find({ user: req.user._id });
  res.json(courses);
};

export const deleteCourse = async (req, res) => {
  const { id } = req.params;

  const deleted = await Course.findOneAndDelete({
    _id: id,
    user: req.user._id,
  });

  res.json({ message: "Course deleted" });
};
