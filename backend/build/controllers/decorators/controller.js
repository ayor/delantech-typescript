"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
const AppRouter_1 = require("../../AppRouter");
const Methods_1 = require("./Methods");
const router = AppRouter_1.AppRouter.initRouter();
const controller = () => {
    return (target) => {
        for (let propName of Object.getOwnPropertyNames(target.prototype)) {
            let path = Reflect.getMetadata(Methods_1.Methods.path, target.prototype, propName);
            let method = Reflect.getMetadata(Methods_1.Methods.method, target.prototype, propName);
            if (path) {
                router[method](path, target.prototype[propName]);
            }
        }
    };
};
exports.controller = controller;
