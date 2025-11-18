import { useState } from "react";
import axios from "axios";

function AddCourse() {
  const [name, setName] = useState("");

  const addCourse = async () => {
    try {
      await axios.post("/courses/add", { name });
      alert("Course added!");
    } catch {
      alert("Error adding course");
    }
  };

  return (
    <div className="page-container">
      <h2>Add Course</h2>

      <input
        placeholder="Course Name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addCourse}>Add Course</button>
    </div>
  );
}

export default AddCourse;
