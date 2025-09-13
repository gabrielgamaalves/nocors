"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = random;
const USER_AGENTS = require("../../data/user-agents.json");
function random(length, timestamp = Date.now()) {
    const seed = timestamp * length;
    const hash = (num) => {
        num = ((num >> 16) ^ num) * 0x45d9f3b;
        num = ((num >> 16) ^ num) * 0x45d9f3b;
        num = (num >> 16) ^ num;
        return Math.abs(num);
    };
    return (hash(seed) % length);
}
function UserAgent(options) {
    var _a;
    const validDevices = ((_a = options === null || options === void 0 ? void 0 : options.device) === null || _a === void 0 ? void 0 : _a.filter((d) => d === "desktop" || d === "mobile")) || ["desktop"];
    const device = USER_AGENTS[validDevices[random(validDevices.length)]];
    const ua = device[random(device.length)];
    return ua;
}
exports.default = UserAgent;
