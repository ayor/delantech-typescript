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

export const Products = () => {

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
            console.log(error);
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
        <section className="my-5">
            <div>


            </div>
        </section>
    )
}