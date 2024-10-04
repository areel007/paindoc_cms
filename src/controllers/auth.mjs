import { body, validationResult } from "express-validator";
import mongoSanitize from "mongo-sanitize";
import dotenv from "dotenv";
import { comparePassword, hashPassword } from "../utils/bcrypt.mjs";
import User from "../models/user.mjs";
import jwt from "jsonwebtoken";

// .env variables
dotenv.config();

// salt from .env
const salt = Number(process.env.SALT) || 10;

export const registerUser = [
  // valideate user input
  body("username")
    .notEmpty()
    .withMessage("Username is required")
    .customSanitizer((value) => {
      return mongoSanitize(value);
    }),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .customSanitizer((value) => {
      return mongoSanitize(value);
    }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
      const userExist = await User.findOne({ username });
      if (userExist) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await hashPassword(password, salt);

      const newUser = new User({
        username,
        password: hashedPassword,
      });

      await newUser.save();

      res.status(201).json({
        message: "User created successfully",
        user: newUser,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },
];

export const loginUser = [
  body("username")
    .notEmpty()
    .withMessage("Username is required")
    .customSanitizer((value) => {
      return mongoSanitize(value);
    }),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .customSanitizer((value) => {
      return mongoSanitize(value);
    }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
      const userExist = await User.findOne({ username });
      if (!userExist) {
        return res.status(400).json({ message: "invalid credentials" });
      }

      const isMatch = await comparePassword(password, userExist.password);
      if (!isMatch) {
        return res.status(400).json({ message: "invalid credentials" });
      }

      const accessToken = jwt.sign(
        { id: userExist._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      const refreshToken = jwt.sign(
        { id: userExist._id },
        process.env.JWT_REFRESH_SECRET,
        {
          expiresIn: "1d",
        }
      );

      userExist.refreshToken = refreshToken;
      await userExist.save();

      const user = {
        _id: userExist._id,
        username: userExist.username,
        role: userExist.role,
        accessToken,
        refreshToken,
      };

      res.status(200).json({
        message: "Login successful",
        user,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },
];

// refresh token
export const refreshToken = () => [
  body("refreshToken").notEmpty().withMessage("refreshToken is required"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { refreshToken } = req.body;

    try {
      const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(401).json({ message: "invalid credentials" });
      }

      if (user.refreshToken !== refreshToken) {
        return res.status(401).json({ message: "invalid credentials" });
      }

      const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "15m",
      });

      res.status(200).json({
        message: "refresh token successful",
        user: {
          _id: user._id,
          username: user.username,
          role: user.role,
          accessToken,
        },
      });
    } catch (error) {
      res.status(500).json({ message: "failed to refresh token" });
    }
  },
];

export const changePassword = [
  body("oldPassword")
    .notEmpty()
    .withMessage("Old password is required")
    .customSanitizer((value) => {
      return mongoSanitize(value);
    }),

  body("newPassword")
    .isLength({ min: 6 })
    .withMessage("New password must be at least 6 characters long")
    .customSanitizer((value) => {
      return mongoSanitize(value);
    }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { oldPassword, newPassword } = req.body;
    const { id } = req.params;

    try {
      const userExist = await User.findById(id);
      if (!userExist) {
        return res.status(400).json({ message: "User does not exist" });
      }

      const isMatch = await comparePassword(oldPassword, userExist.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const hashedPassword = await hashPassword(newPassword, salt);
      await User.findByIdAndUpdate(
        id,
        { password: hashedPassword },
        { new: true }
      );

      res.status(200).json({
        message: "Password updated successfully",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },
];
