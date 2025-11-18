import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const registerUser = async () => {
    try {
      await axios.post("/auth/register", data);
      alert("Registered successfully!");
      navigate("/");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="page-container">
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <button onClick={registerUser}>Register</button>
    </div>
  );
}

export default Register;
