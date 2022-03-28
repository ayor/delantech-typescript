"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const AppRouter_1 = require("./AppRouter");
const cors_1 = __importDefault(require("cors"));
require("./controllers/ProductController");
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.use((0, cors_1.default)({
    credentials: true,
    origin: '*',
    allowedHeaders: '*'
}));
const router = AppRouter_1.AppRouter.initRouter();
app.use(router);
app.listen(5000, () => {
    console.log('listening on port 5000');
});
