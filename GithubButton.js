"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var fa_1 = require("react-icons/fa");
var GithubButton = function (_a) {
    var repoUrl = _a.repoUrl;
    return ((0, jsx_runtime_1.jsxs)("a", { href: repoUrl, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 px-4 py-2 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition", children: [(0, jsx_runtime_1.jsx)(fa_1.FaGithub, { className: "w-5 h-5" }), (0, jsx_runtime_1.jsx)("span", { children: "View on GitHub" })] }));
};
exports.default = GithubButton;
