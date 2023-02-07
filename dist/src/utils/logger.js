"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const dayjs_1 = __importDefault(require("dayjs"));
const config_1 = __importDefault(require("config"));
const level = config_1.default.get("logLevel");
const log = (0, pino_1.default)({
    transport: {
        target: "pino-pretty",
    },
    level,
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${(0, dayjs_1.default)().format()}"`,
});
exports.default = log;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUEwQjtBQUMxQixrREFBMEI7QUFDMUIsb0RBQTRCO0FBRTVCLE1BQU0sS0FBSyxHQUFHLGdCQUFNLENBQUMsR0FBRyxDQUFTLFVBQVUsQ0FBQyxDQUFDO0FBQzdDLE1BQU0sR0FBRyxHQUFHLElBQUEsY0FBTSxFQUFDO0lBQ2pCLFNBQVMsRUFBRTtRQUNULE1BQU0sRUFBRSxhQUFhO0tBQ3RCO0lBQ0QsS0FBSztJQUNMLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxLQUFLO0tBQ1g7SUFDRCxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsWUFBWSxJQUFBLGVBQUssR0FBRSxDQUFDLE1BQU0sRUFBRSxHQUFHO0NBQ2pELENBQUMsQ0FBQztBQUVILGtCQUFlLEdBQUcsQ0FBQSJ9