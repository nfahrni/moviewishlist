"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const omdbApi_1 = __importDefault(require("./omdbApi"));
const app = express_1.default();
app.use(helmet_1.default());
app.use(cors_1.default());
const PORT = 31000;
app.use("/", omdbApi_1.default);
app.listen(PORT, () => console.log(`server started at ${PORT}`));
//# sourceMappingURL=server.js.map