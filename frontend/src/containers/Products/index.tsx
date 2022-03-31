import React, { useCallback, useEffect, useState } from 'react';
import { PageTag } from '../../components/PageTag';
import { Colors } from '../../theme/colors'
import { Underline } from '../../components/Underline';
import { _axios } from '../../utils/axiosInstance'
import { Banner } from '../../components/Banner';
import { Product } from '../../components/Product';
import { IProduct } from "../../interfaces";
import { addToCart } from "../../store/features/cartSlice";
import { useDispatch } from "react-redux";

interface ProductSchema {
    lock: IProduct[];
    switches: IProduct[]
}

export const Products = (): JSX.Element => {

    const dispatch = useDispatch();

    const getProducts = useCallback(async () => {
        try {
            const { data } = await _axios.get('/products');
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

    const handleProductClick = (product: IProduct): void => {
        dispatch(addToCart(product))
    }

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
                        <Product
                            key={product.id} name={product.name}
                            id={product.id} type={product.type}
                            images={product.images}
                            price={product.price}
                            handleButtonClickEvent={handleProductClick.bind(this, product)} />))}
                </div>

                <Banner hasHeader header="Iotty Smart Switches" subText="Voice activated light switch" backgroundImage='url(/img/E2.png)'
                    bkgColor={'#9A9EA0'} />
                <div className="row mt-2 justify-content-center">

                    {products.switches.map((product: IProduct) => (
                        <Product
                            name={product.name} key={product.id} type={product.type}
                            id={product.id} handleButtonClickEvent={handleProductClick.bind(this, product)}
                            images={product.images} price={product.price} />))}
                </div>

            </div>
        </section>
    )
}