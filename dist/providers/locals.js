"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const path = require("path");
const logger_1 = require("../middlewares/logger");
// load and inject the config in the express app
class Locals {
    // injecting env values in app locals
    static initConfig(_application) {
        logger_1.default.info("Loading Local Config");
        _application.locals.app = this.loadConfig();
        return _application;
    }
    static loadConfig() {
        dotenv.config({ path: path.join(__dirname, "../../.env") }); //  direct to local env file
        const port = process.env.RUNTIME_PORT;
        const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`;
        const isCORSEnabled = process.env.CORS_ENABLED || true;
        const apiPrefix = process.env.API_ROUTES_PREFIX || "api";
        const maxUploadLimit = process.env.MAX_UPLOAD_LIMIT;
        const mongooseUrl = process.env.MONGOOSE_URL || "";
        const appSecret = process.env.APP_SECRET || "";
        return {
            port,
            url,
            isCORSEnabled,
            apiPrefix,
            maxUploadLimit,
            mongooseUrl,
            appSecret,
        };
    }
}
exports.default = Locals;
//# sourceMappingURL=locals.js.map