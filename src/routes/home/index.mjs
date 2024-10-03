import { Router } from "express";
import hero from "../home/hero.mjs";
import about from "../home/about.mjs";
import conditions from "../home/conditions.mjs";
import getTheCare from "../home/get.the.care.mjs";

const router = Router();

router.use("/hero", hero);
router.use("/about", about);
router.use("/conditions", conditions);
router.use("/get-the-care", getTheCare);

export default router;
