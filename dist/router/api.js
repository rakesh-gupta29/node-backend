"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    console.log(req.body);
    res.json({ message: " home for api  router" });
});
exports.default = router;
//# sourceMappingURL=api.js.map