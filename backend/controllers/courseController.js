import Course from "../models/Course.js";

export const addCourse = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name)
      return res.status(400).json({ message: "Course name required" });

    const course = await Course.create({
      name,
      user: req.user._id,
    });

    res.json(course);
  } catch (error) {
    console.error("Add Course Error:", error);
    res.status(500).json({ message: "Server error while adding course" });
  }
};

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({ user: req.user._id });
    res.json(courses);
  } catch (error) {
    console.error("Get Courses Error:", error);
    res.status(500).json({ message: "Server error while fetching courses" });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    await Course.findOneAndDelete({
      _id: id,
      user: req.user._id,
    });

    res.json({ message: "Course deleted" });
  } catch (error) {
    console.error("Delete Course Error:", error);
    res.status(500).json({ message: "Server error while deleting course" });
  }
};
