import { Router } from "express";
import HomeController from "../controllers/web/home";
import LoginController from "../controllers/web/login";
import SignUpController from "../controllers/web/signup";

const router: Router = Router();
router.get("/", HomeController.indexView);

router.get("/about", HomeController.aboutView);

router.get("/signup", SignUpController.view);
router.post("/signup", SignUpController.perform);

router.get("/login", LoginController.view);
router.post("/login", LoginController.perform);

export default router;
