import React from "react";
import { Slider } from "../../components/Slider";
import { PageTag } from '../../components/PageTag'

export const Services = () => {
    return (
        <>
            <section className="container my-5 " id="services">
                <PageTag tagName="our services" />
                <Slider />
            </section>
        </>
    )
};