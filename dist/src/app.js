"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const ConnectToDb_1 = __importDefault(require("./utils/ConnectToDb"));
const logger_1 = __importDefault(require("./utils/logger"));
const app = (0, express_1.default)();
const PORT = config_1.default.get("PORT");
app.listen(PORT, () => {
    logger_1.default.info(`App Running in http://localhost:${PORT}`);
    (0, ConnectToDb_1.default)();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUMxQixzREFBNkI7QUFDN0Isb0RBQTJCO0FBQzNCLHNFQUE2QztBQUM3Qyw0REFBZ0M7QUFFaEMsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUE7QUFFckIsTUFBTSxJQUFJLEdBQUcsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7QUFFL0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUMsR0FBRyxFQUFFO0lBQ25CLGdCQUFHLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQ25ELElBQUEscUJBQVcsR0FBRSxDQUFBO0FBQ2YsQ0FBQyxDQUFDLENBQUEifQ==