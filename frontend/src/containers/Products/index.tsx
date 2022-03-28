import React, { useCallback, useEffect, useState } from 'react';
import { PageTag } from '../../components/PageTag';
import { Colors } from '../../theme/colors'
import { Underline } from '../../components/Underline';
import { _axios } from '../../utils/axiosInstance'
import { Banner } from '../../components/Banner';
import { AxiosError, AxiosResponse } from 'axios';
import { Product } from '../../components/Product';

interface IProduct {
    id: string;
    images: string[];
    price: number;
    description: string;
    name: string;
    type: "lock" | "switch";
    youtubeUrl: string;
}
interface ProductSchema {
    lock: IProduct[];
    switches: IProduct[]
}

export const Products = (): JSX.Element => {

    const getProducts = useCallback(async () => {
        try {
            const { data } = await _axios.get('/products');
            // data.products.reduce((prev: ProductSchema, cur: ProductStructure) => {
            //     if (cur.type in prev) {
            //         prev[cur.type].push(cur);
            //     } else {
            //         prev[cur.type] = [cur];
            //     }
            //     return cur;
            // }, {});

            const locks: IProduct[] = data.products.filter((product: IProduct) => product.type === 'lock');
            const switches: IProduct[] = data.products.filter((product: IProduct) => product.type === 'switch')
            setProducts({
                lock: locks,
                switches
            });
        } catch (error) {
            console.log(error)
        }

    }, []);


    const [products, setProducts] = useState<ProductSchema>({ lock: [], switches: [] })

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <section className="container my-5">
            <PageTag tagName="our products" />
            <div >
                <div className="mt-3 text-center" >
                    <h3 className=""> Simple IOT devices to make your houses smarter </h3>
                    <Underline />
                </div>
                <Banner backgroundImage='url(/img/mortise2.jpeg)'
                    bkgColor={Colors.delanDarkGray} />
                <div className="row mt-2 justify-content-center">

                    {products.lock.map((product: IProduct) => (
                        <Product key={product.id} name={product.name} id={product.id}
                            images={product.images} price={product.price} />))}
                </div>

                <Banner hasHeader header="Iotty Smart Switches" subText="Voice activated light switch" backgroundImage='url(/img/E2.png)'
                    bkgColor={'#9A9EA0'} />
                <div className="row mt-2 justify-content-center">

                    {products.switches.map((product: IProduct) => (
                        <Product name={product.name} key={product.id} id={product.id}
                            images={product.images} price={product.price} />))}
                </div>

            </div>
        </section>
    )
}