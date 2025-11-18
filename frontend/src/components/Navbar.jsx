import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "20px", color: "#fff" }}>
        Home
      </Link>

      {user ? (
        <>
          <Link to="/dashboard" style={{ marginRight: "20px", color: "#fff" }}>
            Dashboard
          </Link>

          <Link to="/add-course" style={{ marginRight: "20px", color: "#fff" }}>
            Add Course
          </Link>

          <Link to="/courses" style={{ marginRight: "20px", color: "#fff" }}>
            Courses
          </Link>

          <Link to="/profile" style={{ marginRight: "20px", color: "#fff" }}>
            Profile
          </Link>

          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/" style={{ marginRight: "20px", color: "#fff" }}>
            Login
          </Link>
          <Link to="/register" style={{ color: "#fff" }}>
            Register
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
