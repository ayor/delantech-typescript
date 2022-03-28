import React from 'react'; 
import {Header} from '../../containers/Header'
import { Products } from '../../containers/Products';

export const Home = (): JSX.Element=>{
 return( 
 <>  
    <Header/> 
    <Products />
 </>)
}