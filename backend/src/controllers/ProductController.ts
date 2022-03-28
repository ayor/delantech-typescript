import { Request, Response, NextFunction } from "express";
import { Product } from '../models/Product';
import { get, controller } from './decorators';

@controller()
export class ProductController {
    @get('/products')
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const products = await Product.getAll();
            console.log(products)
            res.status(200).json({
                products
            })
        } catch (error) {
            next(error);
        }
    }
}