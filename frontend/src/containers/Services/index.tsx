import React from "react";
import { Text } from "../../components/Text";
import classNames from 'classnames';
import styles from './index.module.css';
import { Chip } from "../../components/Chip";

export const Services = () => {
    return (
        <>
            <section className="flex flex-col items-center my-5" id="services">
                <Text classname="mb-3" fontWeight={600} fontSize="2.5rem" title="What we do" />
                <div className="flex h-80 flex-row w-10/12">
                    <div className={`flex flex-col align-items-end rounded-l-lg w-4/12 ${classNames(styles.SmartHome)} ${classNames(styles.bg)}`}>
                        <div className=" align-self-end h-full  m-1">
                            <Chip title="Smart Homes" />
                        </div>
                    </div>
                    <div className="flex flex-col w-4/12">
                        <div className={`flex flex-col align-items-end mb-1 ml-1 mr-1 h-1/2  ${classNames(styles.AccessControl)} `}>
                            <div className="align-self-end  justify-self-end m-1">
                                <Chip title="Access Control" />
                            </div>
                        </div>
                        <div className={`flex flex-col align-items-end ml-1 mr-1 h-1/2  ${classNames(styles.Cinema)} `}>
                            <div className="align-self-end  justify-self-end m-1">
                                <Chip title="Home Cinemas" />
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-col align-items-end  rounded-r-lg w-4/12 ${classNames(styles.Offices)} ${classNames(styles.bg)}`}>
                        <div className="align-self-end  justify-self-end m-1">
                            <Chip title="Smart Offices" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};