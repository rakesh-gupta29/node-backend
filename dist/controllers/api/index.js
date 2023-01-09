"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    console.log(req.body);
    res.json({ message: " this is home post route for api" });
});
exports.default = router;
//# sourceMappingURL=index.js.map