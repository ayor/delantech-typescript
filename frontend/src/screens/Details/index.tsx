import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "../../components/Button";
import ReactCarousel from 'react-material-ui-carousel';
import { Product } from "../../components/Product";
import { IFeature, IFeatures, IProduct } from "../../interfaces";
import { _axios } from '../../utils/axiosInstance';
import { convert } from "../../utils/util";
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { isNullishCoalesce } from 'typescript';
import { motion, AnimatePresence } from 'framer-motion';
import { addToCart } from '../../store/features/cartSlice';

interface ImageProps {
    images: string[]
}

const ImageDetail = (props: ImageProps) => {
    return (
        <div className="row  mb-5" style={{ height: '500px' }}>
            <div
                className="col-12 col-md-4 m-1 "
                style={{
                    backgroundImage: `url(${props.images[3]})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'flex-end',
                }}
            >

            </div>
            <div className="col-12 m-1 col-md-7 ">
                <div
                    className="row justify-content-center mb-2"
                    style={{ height: '250px' }}
                >
                    <div
                        className="col-5 m-2 rounded "
                        style={{
                            backgroundImage: `url(${props.images[0]})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '100%',
                        }}
                    ></div>
                    <div
                        className="col-5 m-2 rounded "
                        style={{
                            backgroundImage: `url(${props.images[1]})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '100%',
                        }}
                    ></div>
                </div>
                <div
                    className="row justify-content-center"
                    style={{ height: '250px' }}
                >
                    <div
                        className="col-5 m-2 rounded "
                        style={{
                            backgroundImage: `url(${props.images[2]})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '100%',
                        }}
                    ></div>
                    <div
                        className="col-5 m-2 rounded "
                        style={{
                            backgroundImage: `url(${props.images[3]})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '100%',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}


export const Detail = () => {

    const { id } = useParams();

    const [product, setProduct] = useState<IProduct>();
    const [feature, setFeatures] = useState<IFeatures>();
    const [similarProducts, setSimilarProducts] = useState<IProduct[]>();

    const [isPhoneWidth, setPhoneWidth] = useState(false);
    const dipatch = useDispatch();

    const handleProductClick = (product: IProduct) => {
        dipatch(addToCart(product));
    }

    useEffect(() => {
        if (window.screen['width'] <= 565) {
            setPhoneWidth(true);
        }
    }, [setPhoneWidth]);

    const getProduct = useCallback(async () => {
        const { data } = await _axios.get(`/product/${id}`);

        const { features, similarProducts }:
            { features: IFeatures[], similarProducts: IProduct[] } = data.product;

        setFeatures(features[0]);
        setSimilarProducts(similarProducts);
        setProduct(data.product)
    }, [id])

    useEffect(() => {
        getProduct()
    }, [getProduct])


    let sliders = (
        <ReactCarousel swipe animation="slide" stopAutoPlayOnHover>
            {product?.images.map((image, ind) => (
                <div className="mb-5 rounded" key={ind} style={{ height: '500px' }}>
                    <div
                        className=""
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'flex-end',
                        }}
                    >

                    </div>
                </div>
            ))}
        </ReactCarousel>
    );

    if (!isPhoneWidth) {
        sliders = (
            <ImageDetail
                images={product?.images || []}
            />
        );
    }

    return product ? (
        <motion.div animate={{ opacity: [0, 1] }}>
            <div className="container ">
                <div className="row mt-5 p-3">
                    <div className="col-12 ">
                        <div className="text-center mt-4 mb-3">
                            {sliders}
                        </div>
                        <div className="row my-3">
                            <div className="col-12 col-md-4 ">
                                <div className="my-3">
                                    <h4 className="text-dark h4 text-center d-block my-2 ">
                                        {product?.name}
                                    </h4>
                                    <div className="details mb-3">
                                        <small className="text-secondary d-block">
                                            {product?.description}
                                        </small>
                                        <div className="pricing text-center mt-3">
                                            <small className=" my-2 text-muted"> Buy Now @</small>
                                            <small className=" my-2 text_delanBlue">
                                                {' '}
                                                {convert(product?.price || 0)}
                                            </small>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <Button
                                            title='Add To Cart'
                                            clickEvent={() => { }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 ">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="my-3">
                                            <h6>
                                                Ultimate security for greater peace of mind.
                        </h6>
                                            <div className="details mb-3 p-2">
                                                {feature?.features.map((feature, ind) => {
                                                    if (feature.type === 'security') {
                                                        return (
                                                            <div className="mb-2" key={ind}>
                                                                <small className="text-secondary">
                                                                    <i className={`fas fa-${feature.icon}`}> </i>{' '}
                                                                    {feature.title}
                                                                </small>
                                                                <small className="text-secondary">
                                                                    {feature.description}
                                                                </small>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="my-3">
                                            <h6 >
                                                Experience convenience the smart way.
                        </h6>
                                            <div className="details mb-3 p-2">
                                                {feature?.features.map((feature, ind) => {
                                                    if (feature.type === 'convenience') {
                                                        return (
                                                            <div className="mb-2" key={ind}>
                                                                <small className="text-secondary">
                                                                    <i className={`fas fa-${feature.icon}`}> </i>{' '}
                                                                    {feature.title}
                                                                </small>
                                                                <small className="text-secondary">
                                                                    {feature.description}
                                                                </small>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="similar_projects row justify-content-center">
                        <small className="text-dark text-center d-block mb-2 ">
                            Similar Products
              </small>
                        {similarProducts?.map((item) => (
                            <Product
                                key={item.id}
                                name={item.name}
                                id={item.id}
                                type={item.type}
                                handleButtonClickEvent={handleProductClick.bind(this, item)}
                                images={item.images}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </motion.div>
    ) : null;
}


