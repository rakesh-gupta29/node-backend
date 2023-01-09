"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_1 = require("../controllers/web/home");
const login_1 = require("../controllers/web/login");
const signup_1 = require("../controllers/web/signup");
const router = (0, express_1.Router)();
router.get("/", home_1.default.indexView);
router.get("/about", home_1.default.aboutView);
router.get("/signup", signup_1.default.view);
router.post("/signup", signup_1.default.perform);
router.get("/login", login_1.default.view);
router.post("/login", login_1.default.perform);
exports.default = router;
//# sourceMappingURL=web.js.map