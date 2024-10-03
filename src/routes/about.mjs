import { Router } from "express";
import {
  getAboutContent,
  getAboutHero,
  newAboutContent,
  newAboutHero,
  updateAboutContent,
  updateAboutHero,
} from "../controllers/about.mjs";

const router = Router();

router.route("/hero").post(newAboutHero);
router.route("/hero/:id").get(getAboutHero).patch(updateAboutHero);

router.route("/content").post(newAboutContent);
router.route("/content/:id").get(getAboutContent).patch(updateAboutContent);

export default router;
