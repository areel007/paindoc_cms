import { Router } from "express";
import {
  newPractitionersHero,
  getPractitionersHero,
  updatePractitionersHero,
  newPractitionersContent,
  getPractitionersContent,
  updatePractitionersContent,
} from "../controllers/practitioners.mjs";

const router = Router();

router.route("/hero").post(newPractitionersHero);
router
  .route("/hero/:id")
  .get(getPractitionersHero)
  .patch(updatePractitionersHero);

router.route("/content").post(newPractitionersContent);
router
  .route("/content/:id")
  .get(getPractitionersContent)
  .patch(updatePractitionersContent);

export default router;
