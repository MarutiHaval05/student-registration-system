import { useEffect, useState } from "react";
import axios from "axios";

function CourseReport() {
  const [courses, setCourses] = useState([]);

  const loadCourses = async () => {
    const res = await axios.get("/courses/all");
    setCourses(res.data);
  };

  const remove = async (id) => {
    await axios.delete(`/courses/delete/${id}`);
    loadCourses();
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <div className="page-container">
      <h2>Your Courses</h2>

      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            {course.name}
            <button onClick={() => remove(course._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseReport;
