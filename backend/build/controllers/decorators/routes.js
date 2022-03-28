"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
require("reflect-metadata");
const Methods_1 = require("./Methods");
const routeBinder = (method) => {
    return (path) => {
        return (target, key, descriptor) => {
            Reflect.defineMetadata(Methods_1.Methods.path, path, target, key);
            Reflect.defineMetadata(Methods_1.Methods.method, method, target, key);
        };
    };
};
exports.get = routeBinder('get');
