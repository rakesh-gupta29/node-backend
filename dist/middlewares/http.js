"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger_1 = require("./logger");
class HTTP {
    static mount(_app) {
        logger_1.default.info("Mouting the HTTP middlewares");
        _app.use(express.json());
        // Disable the x-powered-by header in response: X-Powered-By is set by various servers to say what kind of server it is
        _app.disable("x-powered-by");
        return _app;
    }
}
exports.default = HTTP;
//# sourceMappingURL=http.js.map