"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../middlewares/logger");
const api_1 = require("../router/api");
const web_1 = require("../router/web");
const locals_1 = require("./locals");
class Routes {
    static mountWebRoutes(_app) {
        logger_1.default.info("Loading Web Routes");
        return _app.use("/", web_1.default);
    }
    static mountAPIRoutes(_app) {
        const apiRoutePrefix = locals_1.default.loadConfig().apiPrefix;
        logger_1.default.info("Loading API Routes for prefix /" + apiRoutePrefix);
        return _app.use(`/${apiRoutePrefix}`, api_1.default);
    }
}
exports.default = Routes;
//# sourceMappingURL=routes.js.map