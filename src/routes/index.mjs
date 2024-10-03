import { Router } from "express";
import auth from "./auth/index.mjs";
import users from "./user.mjs";
import home from "./home/index.mjs";
import footer from "./footer.mjs";
import about from "./about.mjs";
import conditionsWeTreat from "./conditions.we.treat.mjs";
import treatmentModalities from "./treatment.modalities.mjs";
import practitioners from "./practitioners.mjs";

const router = Router();

router.use("/auth", auth);
router.use("/users", users);
router.use("/home", home);
router.use("/footer", footer);
router.use("/about", about);
router.use("/conditions-we-treat", conditionsWeTreat);
router.use("/treatment-modalities", treatmentModalities);
router.use("/practitioners", practitioners);

export default router;
