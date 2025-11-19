export const getProfile = async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    console.error("Profile Error:", error);
    res.status(500).json({ message: "Server error while fetching profile" });
  }
};
