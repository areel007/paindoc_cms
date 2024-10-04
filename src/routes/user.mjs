import { Router } from "express";
import { deleteUser, getUser, getUsers } from "../controllers/user.mjs";
import {
  authenticateUser,
  authorizeRoles,
} from "../middlewares/authenticate.user.mjs";

const router = Router();

router
  .route("/")
  .get(authenticateUser, authorizeRoles("super admin"), getUsers);
router
  .route("/:id")
  .get(getUser)
  .delete(authenticateUser, authorizeRoles("super admin"), deleteUser);

export default router;
