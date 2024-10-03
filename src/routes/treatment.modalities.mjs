import { Router } from "express";
import {
  getTreatmentModalitiesHero,
  newTreatmentModalitiesHero,
  updateTreatmentModalitiesHero,
  newTreatmentModalitiesContent,
  getTreatmentModalitiesContent,
  updateTreatmentModalitiesContent,
} from "../controllers/treatment.modalities.mjs";

const router = Router();

router.route("/hero").post(newTreatmentModalitiesHero);
router
  .route("/hero/:id")
  .get(getTreatmentModalitiesHero)
  .patch(updateTreatmentModalitiesHero);

router.route("/content").post(newTreatmentModalitiesContent);
router
  .route("/content/:id")
  .get(getTreatmentModalitiesContent)
  .patch(updateTreatmentModalitiesContent);

export default router;
