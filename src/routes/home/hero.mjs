import { Router } from "express";
import { getHero, newHero, updateHero } from "../../controllers/home/hero.mjs";

const router = Router();

router.route("/").post(newHero);
router.route("/:id").get(getHero).patch(updateHero);

export default router;
