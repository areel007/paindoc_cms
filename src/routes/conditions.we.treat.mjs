import { Router } from "express";
import {
  getConditionsWeTreatContent,
  getConditionsWeTreatHero,
  newConditionsWeTreatContent,
  newConditionsWeTreatHero,
  updateConditionsWeTreatContent,
  updateConditionsWeTreatHero,
} from "../controllers/conditions.we.treat.mjs";

const router = Router();

router.route("/hero").post(newConditionsWeTreatHero);
router
  .route("/hero/:id")
  .get(getConditionsWeTreatHero)
  .patch(updateConditionsWeTreatHero);

router.route("/content").post(newConditionsWeTreatContent);
router
  .route("/content/:id")
  .get(getConditionsWeTreatContent)
  .patch(updateConditionsWeTreatContent);

export default router;
