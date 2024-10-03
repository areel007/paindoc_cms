import User from "../models/user.mjs";

export const getUsers = async (req, res) => {
  const users = await User.find();

  try {
    if (!users) {
      return res.status(404).json({ message: "No users found" });
    }

    const _users = users.map((user) => {
      return {
        id: user._id,
        email: user.email,
        role: user.role,
      };
    });
    res.status(200).json({
      message: "Users fetched successfully",
      users: _users,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      message: "User fetched successfully",
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
