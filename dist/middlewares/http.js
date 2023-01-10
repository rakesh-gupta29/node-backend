"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const session = require("express-session");
const logger_1 = require("./logger");
const locals_1 = require("../providers/locals");
class HTTP {
    static mount(_app) {
        logger_1.default.info("Mouting the HTTP middlewares");
        _app.use(express.json());
        // Disable the x-powered-by header in response: X-Powered-By is set by various servers to say what kind of server it is
        _app.disable("x-powered-by");
        const options = {
            resave: true,
            saveUninitialized: true,
            secret: locals_1.default.loadConfig().appSecret,
            cookie: {
                maxAge: 1209600000, // two weeks (in ms)
            },
        };
        _app.use(session(options));
        return _app;
    }
}
exports.default = HTTP;
//# sourceMappingURL=http.js.map