"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRoute_1 = __importDefault(require("./userRoute"));
const initRoute = (app) => {
    app.use('api/v1/user', userRoute_1.default);
};
exports.default = initRoute;
//# sourceMappingURL=index.js.map