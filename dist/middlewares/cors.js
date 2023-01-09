"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const logger_1 = require("./logger");
class CORS {
    static mount(_app) {
        logger_1.default.info("Mounting the CORS middleware");
        _app.use(cors());
        return _app;
    }
}
exports.default = CORS;
//# sourceMappingURL=cors.js.map