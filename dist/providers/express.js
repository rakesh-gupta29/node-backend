"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const middlewares_1 = require("../middlewares");
const routes_1 = require("./routes");
const locals_1 = require("./locals");
const logger_1 = require("../middlewares/logger");
const exceptionHandler_1 = require("../middlewares/exceptionHandler");
class Express {
    constructor() {
        this.express = express();
        this.mountEnvConfig();
        this.mountMiddlewares();
        this.mountRoutes();
    }
    mountEnvConfig() {
        this.express = locals_1.default.initConfig(this.express);
    }
    mountMiddlewares() {
        this.express = middlewares_1.default.mountAll(this.express);
    }
    mountRoutes() {
        this.express = routes_1.default.mountWebRoutes(this.express);
        this.express = routes_1.default.mountAPIRoutes(this.express);
    }
    createApp() {
        logger_1.default.info("Creating the App");
        const port = locals_1.default.loadConfig().port;
        this.express.use(exceptionHandler_1.default.clientErrorHandler);
        this.express.use(exceptionHandler_1.default.globalErrorHandler);
        this.express = exceptionHandler_1.default.routeNotFound(this.express);
        this.express
            .listen(port, () => {
            return console.log(`SERVER :: Running @ 'http://localhost:${port}'`);
        })
            .on("error", (_error) => {
            return console.log("Error: ", _error.message);
        });
    }
}
exports.default = new Express();
//# sourceMappingURL=express.js.map