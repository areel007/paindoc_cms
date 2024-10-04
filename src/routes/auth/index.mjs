import { Router } from "express";
import {
  changePassword,
  loginUser,
  registerUser,
  refreshToken,
} from "../../controllers/auth.mjs";

import {
  authenticateUser,
  authorizeRoles,
} from "../../middlewares/authenticate.user.mjs";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/refresh-token").post(refreshToken);

router
  .route("/change-password/:id")
  .patch(authenticateUser, authorizeRoles("super admin"), changePassword);

export default router;
