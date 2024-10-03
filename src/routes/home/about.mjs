import { Router } from "express";
import {
  addNewHomeAbout,
  getHomeAbout,
  updateHomeAbout,
} from "../../controllers/home/about.mjs";

const router = Router();

router.route("/").post(addNewHomeAbout);
router.route("/:id").get(getHomeAbout).patch(updateHomeAbout);

export default router;
