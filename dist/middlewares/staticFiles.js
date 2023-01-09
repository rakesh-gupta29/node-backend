"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
const logger_1 = require("./logger");
class StaticFiles {
    static mount(_app) {
        logger_1.default.info("Mounting The Static file middleware: serve static files");
        const options = { maxAge: 31557600000 };
        _app.use("/public", express.static(path.join(__dirname, "../../public"), options));
        _app.use("/vendor", express.static(path.join(__dirname, "../../node_modules"), options));
        return _app;
    }
}
exports.default = StaticFiles;
//# sourceMappingURL=staticFiles.js.map