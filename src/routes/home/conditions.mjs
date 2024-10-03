import { Router } from "express";
import {
  getHomeConditions,
  newConditionsWeTreat,
  updateHomeConditions,
} from "../../controllers/home/conditions.mjs";

const router = Router();

router.route("/").post(newConditionsWeTreat);
router.route("/:id").get(getHomeConditions).patch(updateHomeConditions);

export default router;
