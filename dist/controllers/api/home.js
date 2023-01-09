"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Home {
    static index(req, res) {
        res.json({
            message: [
                {
                    title: "dummy title for blog card",
                    desc: "We’ll help you get started, customize your site, and add features with 1‑on‑1 QuickStart sessions, live chat, or email.",
                    target: "https://www.blacksof.com",
                },
                {
                    title: "dummy title for blog card",
                    desc: "We’ll help you get started, customize your site, and add features with 1‑on‑1 QuickStart sessions, live chat, or email.",
                    target: "https://www.blacksof.com",
                },
                {
                    title: "dummy title for blog card",
                    desc: "We’ll help you get started, customize your site, and add features with 1‑on‑1 QuickStart sessions, live chat, or email.",
                    target: "https://www.blacksof.com",
                },
            ],
        });
    }
    static caseStudy(req, res) {
        res.json({
            message: [
                {
                    title: "dummy title for case study",
                    desc: "We’ll help you get started, customize your site, and add features with 1‑on‑1 QuickStart sessions, live chat, or email.",
                    target: "https://www.blacksof.com",
                },
                {
                    title: "dummy title for case study",
                    desc: "We’ll help you get started, customize your site, and add features with 1‑on‑1 QuickStart sessions, live chat, or email.",
                    target: "https://www.blacksof.com",
                },
                {
                    title: "dummy title for case study",
                    desc: "We’ll help you get started, customize your site, and add features with 1‑on‑1 QuickStart sessions, live chat, or email.",
                    target: "https://www.blacksof.com",
                },
            ],
        });
    }
}
exports.default = Home;
//# sourceMappingURL=home.js.map