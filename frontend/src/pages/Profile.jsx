import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState({});

  const loadProfile = async () => {
    const res = await axios.get("/profile/me");
    setUser(res.data);
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <div className="page-container">
      <h2>Profile</h2>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default Profile;
