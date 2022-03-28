import { db } from '../db';

interface IProduct {
    id?: string;
    description?: string;
    images: string[];
    type: "switch" | "lock";
    youtubeUrl: string;
}

export class Product {
    static collection: string = "products"

    constructor(public data: IProduct) { }

    static getById = async (id: string) => {
        const res = await db.collection(Product.collection).doc(id).get();
        return res;
    }

    static getAll = async (): Promise<IProduct[]> => {
        const products: IProduct[] = []
        const res = await db.collection(Product.collection).get();
        res.forEach(doc => {
            const data = { id: doc.id, ...doc.data() } as IProduct
            products.push(data);
        });

        return products;
    }

    save = async () => {
        await db.collection(Product.collection).add(this.data)
    }
}