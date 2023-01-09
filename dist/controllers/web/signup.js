"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SignUpController {
    static view(req, res) {
        return res.render("screens/signup", {
            title: "Signup Page",
        });
    }
    static perform(req, res) {
        res.json({ message: "will perform the signup operation" });
    }
}
exports.default = SignUpController;
//# sourceMappingURL=signup.js.map