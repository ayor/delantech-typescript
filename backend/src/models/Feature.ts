import { db } from '../db';
import { IProduct } from "./Product";
import { FeatureType, ProductType } from "../Types";




interface IFeature {
    icon?: string;
    description?: string;
    title: string[];
    type: FeatureType
}

export interface IFeatures {
    id: string;
    features: IFeature[];
    type: ProductType;

}
export class Feature {
    static collection: string = "features"

    constructor(public data: IFeature) { }

    static get = async (type: ProductType): Promise<IFeatures[]> => {

        const features: IFeatures[] = []

        const _features = await db.collection('features').where("type", "==", type).get();

        _features.forEach(doc => {
            const data = { id: doc.id, ...doc.data() } as IFeatures
            features.push(data);
        })

        return features
    }

    // static getAll = async (): Promise<IProduct[]> => {
    //     const products: IProduct[] = []
    //     const res = await db.collection(Product.collection).get();
    //     res.forEach(doc => {
    //         const data = { id: doc.id, ...doc.data() } as IProduct
    //         products.push(data);
    //     });

    //     return products;
    // }

    // save = async () => {
    //     await db.collection(Product.collection).add(this.data)
    // }
}