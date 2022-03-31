import { ProductType, FeatureType } from "../Types";

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

export interface IState{
    items:ICart[];
    totalPrice:number
}
export interface ICountry {
    iso2:string;
    iso3:string;
    country:string;
    cities:string[]
}

export interface ICart{
        id:string;
        name:string; 
        price:number;
        images:string[]
        qty:number;
        deleteItem:React.MouseEventHandler;
        increment:React.MouseEventHandler;
        decrement:React.MouseEventHandler;
        handleChange:React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export interface IOrderResponse{
    message:string;
}