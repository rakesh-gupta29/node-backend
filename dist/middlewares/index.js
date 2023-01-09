"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = require("./cors");
const http_1 = require("./http");
const staticFiles_1 = require("./staticFiles");
const views_1 = require("./views");
class Middlewares {
    static mountAll(_app) {
        cors_1.default.mount(_app);
        http_1.default.mount(_app);
        staticFiles_1.default.mount(_app);
        views_1.default.mount(_app);
        return _app;
    }
}
exports.default = Middlewares;
//# sourceMappingURL=index.js.map