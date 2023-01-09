"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const logger_1 = require("./logger");
class Views {
    static mount(_app) {
        logger_1.default.info("Mounting the Views Middleware");
        _app.locals.pretty = true;
        _app.set("view engine", "ejs");
        _app.set("views", path.join(__dirname, "../../views"));
        return _app;
    }
}
exports.default = Views;
//# sourceMappingURL=views.js.map