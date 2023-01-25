import { Router } from "express";
import HomeController from "../controllers/web/home";
import LoginController from "../controllers/web/auth/login";
import SignUpController from "../controllers/web/auth/signup";
import AuthController from "../controllers/web/auth/auth";
import * as passport from "passport";

const router: Router = Router();
router.get("/", HomeController.indexView);

router.get("/about", HomeController.aboutView);

router.get("/signup", SignUpController.view);
router.post("/signup", SignUpController.perform);

router.get("/login", LoginController.view);
router.post("/login", passport.authenticate("local"));

router.get("/", AuthController.view);
export default router;
