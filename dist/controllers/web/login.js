"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginController {
    static view(req, res) {
        return res.render("screens/login", {
            title: "Login Page",
        });
    }
    static perform(req, res) {
        res.json({ message: "will perform the login operation" });
    }
}
exports.default = LoginController;
//# sourceMappingURL=login.js.map