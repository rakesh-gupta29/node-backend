"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Home {
    static indexView(req, res) {
        res.render("screens/index");
    }
    static aboutView(req, res) {
        res.render("screens/about");
    }
}
exports.default = Home;
//# sourceMappingURL=home.js.map