"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const locals_1 = require("../providers/locals");
const logger_1 = require("./logger");
class ExceptionHandler {
    static routeNotFound(_app) {
        _app.use("*", (req, res, next) => {
            const apiPrefix = locals_1.default.loadConfig().apiPrefix;
            logger_1.default.warn(`Following route was not found for path ${req.originalUrl}`);
            if (req.xhr || req.originalUrl.includes(`/${apiPrefix}/`)) {
                return res.json({
                    error: "Route Not Found. Please check the URL.",
                });
            }
            else {
                res.status(404);
                return res.render("screens/error404");
            }
        });
        return _app;
    }
    static clientErrorHandler(err, req, res, next) {
        logger_1.default.error(err.stack || "");
        if (req.xhr) {
            return res.status(500).send({ error: "Something went wrong!" });
        }
        else {
            return next(err);
        }
    }
    static globalErrorHandler(err, req, res, next) {
        logger_1.default.error(err.stack || "");
        res.status(500);
        const apiPrefix = locals_1.default.loadConfig().apiPrefix;
        if (req.originalUrl.includes(`/${apiPrefix}/`)) {
            // if (err.name && err.name === "UnauthorizedError") {
            //   const innerMessage =
            //     err.inner && err.inner.message ? err.inner.message : undefined;
            //   return res.json({
            //     error: ["Invalid Token!", innerMessage],
            //   });
            // }
            return res.json({
                error: err,
            });
        }
        return res.render("screens/error", {
            title: "Under Maintenance",
        });
    }
    /**
     * Register your error / exception monitoring
     * tools right here ie. before "next(err)"!
     */
    static logErrors(err, req, res, next) {
        logger_1.default.error(err.stack || "");
        return next(err); // call next funciton in the stack
    }
}
exports.default = ExceptionHandler;
//# sourceMappingURL=exceptionHandler.js.map