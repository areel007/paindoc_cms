import { Router } from "express";
import {
  getGetTheCare,
  newGetTheCare,
  updateGetTheCare,
} from "../../controllers/home/get.the.care.mjs";

const router = Router();

router.route("/").post(newGetTheCare);
router.route("/:id").get(getGetTheCare).patch(updateGetTheCare);

export default router;
