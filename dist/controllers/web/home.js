"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Home {
    static indexView(req, res) {
        res.json({ message: "home  page" });
    }
    static aboutView(req, res) {
        res.render("screens/about");
    }
}
exports.default = Home;
//# sourceMappingURL=home.js.map