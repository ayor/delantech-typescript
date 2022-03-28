"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const db_1 = require("../db");
class Product {
    constructor(data) {
        this.data = data;
        this.save = () => __awaiter(this, void 0, void 0, function* () {
            yield db_1.db.collection(Product.collection).add(this.data);
        });
    }
}
exports.Product = Product;
_a = Product;
Product.collection = "products";
Product.getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield db_1.db.collection(Product.collection).doc(id).get();
    return res;
});
Product.getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = [];
    const res = yield db_1.db.collection(Product.collection).get();
    res.forEach(doc => {
        const data = Object.assign({ id: doc.id }, doc.data());
        products.push(data);
    });
    return products;
});
