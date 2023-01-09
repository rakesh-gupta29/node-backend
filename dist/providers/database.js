"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const logger_1 = require("../middlewares/logger");
const locals_1 = require("./locals");
class Database {
    static init() {
        logger_1.default.info("Establishing Database Connection.");
        const dsn = locals_1.default.loadConfig().mongooseUrl;
        mongoose.set("strictQuery", true); // deprecation warning
        mongoose.connect(dsn, {}, (error) => {
            // handle the error case
            if (error) {
                logger_1.default.info("Failed to connect to the Mongo server!!");
                console.log(error);
                throw error;
            }
            else {
                logger_1.default.info("connected to Mongo Database at: " + dsn);
            }
        });
    }
}
exports.default = Database;
//# sourceMappingURL=database.js.map