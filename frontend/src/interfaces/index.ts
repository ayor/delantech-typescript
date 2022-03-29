import { ProductType, FeatureType } from "../Types copy";

export interface IProduct {
    id: string;
    images: string[];
    price: number;
    description: string;
    name: string;
    type: ProductType;
    youtubeUrl: string;
    features?: IFeatures[];
    similarProducts?: IProduct[]
}

export interface IFeature {
    icon?: string;
    description?: string;
    title: string[];
    type: FeatureType
}

export interface IFeatures {
    id: string;
    type: FeatureType,
    features: IFeature[]
}