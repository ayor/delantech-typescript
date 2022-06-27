import React from 'react';
import { AboutUs } from '../../components/AboutUs';
import { Header } from '../../containers/Header'
import { Products } from '../../containers/Products';
import { Services } from '../../containers/Services';

export const Home = (): JSX.Element => {
   return (
      <>
         <Header />
         <AboutUs />
         <Services />
         <Products />
      </>
   )
}