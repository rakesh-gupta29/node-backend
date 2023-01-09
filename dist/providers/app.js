"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const express_1 = require("./express");
class App {
    loadDB() {
        database_1.default.init();
    }
    mountAndRunServer() {
        express_1.default.createApp();
    }
}
exports.default = new App();
//# sourceMappingURL=app.js.map