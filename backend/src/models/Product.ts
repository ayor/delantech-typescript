import { db } from '../db';
import { ProductType } from '../Types';
import { Feature, IFeatures } from "./Feature";

export interface IProduct {
    id?: string;
    description?: string;
    images: string[];
    type: ProductType;
    youtubeUrl: string;
    feature?: IFeatures[];
    similarProducts?: IProduct[]
}

export class Product {
    static collection: string = "products"

    constructor(public data: IProduct) { }

    static getById = async (id: string) => {
        const res = await db.collection(Product.collection).doc(id).get();
        const data = { id: res.id, ...res.data() } as IProduct
        const features = await Feature.get(data.type);
        const productByType = await Product.getByType(data.type);
        return {
            ...data,
            features,
            similarProducts: productByType.filter(product => product.id !== id)
        };
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

    static getByType = async (type: string): Promise<IProduct[]> => {
        const products: IProduct[] = [];

        const productRef = await db.collection(Product.collection).where("type", "==", type).get();

        productRef.forEach((doc) => {
            const data = { id: doc.id, ...doc.data() } as IProduct;
            products.push(data);
        })

        return products;
    }

    save = async () => {
        await db.collection(Product.collection).add(this.data)
    }
}