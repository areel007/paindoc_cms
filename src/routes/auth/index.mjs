import { Router } from "express";
import {
  changePassword,
  loginUser,
  registerUser,
} from "../../controllers/auth.mjs";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.route("/change-password/:id").patch(changePassword);

export default router;
