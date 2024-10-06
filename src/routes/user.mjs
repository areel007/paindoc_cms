import { Router } from "express";
import { deleteUser, getUser, getUsers } from "../controllers/user.mjs";
import {
  authenticateUser,
  authorizeRoles,
} from "../middlewares/authenticate.user.mjs";

const router = Router();

router.route("/").get(getUsers);
router.route("/:id").get(getUser).delete(deleteUser);

export default router;
