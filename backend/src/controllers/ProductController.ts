import { Request, Response, NextFunction } from "express";
import { Product } from '../models/Product';
import { get, controller } from './decorators';

@controller()
export class ProductController {
    @get('/products')
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const products = await Product.getAll();
            res.status(200).json({
                products
            })
        } catch (error) {
            next(error);
        }
    }
    @get('/product/:id')
    async getProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const product = await Product.getById(id);
            res.status(200).json({
                product
            })
        } catch (error) {
            next(error);
        }
    }
}