import HomeSearchBar  from './SearchBar';
import React,{useState} from 'react';
import { useEffect } from 'react';
import Banner from './Banner';
import Headings from './Headings'
//import { productDetails } from "../../constants/data";
import Cards from './Cards';
import Footer from '../footer/footer';


import MultiSlider from './MultiSlider';
import { useSelector, useDispatch } from 'react-redux';

import { getProducts as ProductList } from '../../redux/actions/productActions';


const Home = () => {

    console.log("Inside home 1");

    // Getting the data from Store (Redux)
    const getProducts = useSelector(state => state.getProducts);
    console.log("Inside hone 2");
    console.log("data from database type :", typeof (getProducts));
    console.log(getProducts);
   
    
    console.log("Inside hone 3");
  
    console.log("Inside hone 4");
    
    console.log("Inside hone 5");
   

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ProductList());
        console.log("Inside dispatch");
    }, [dispatch])

    return (
      <div >
             <HomeSearchBar />
             <Banner />
             <Headings name="NEW ARRIVALS"/> 
             <Cards data={getProducts}/> 
     
              <Headings name="TOP PRODUCTS"/> 
              <MultiSlider/> 
             <Headings name="TOP SELLERS"/> 
             <Cards data={getProducts}/> 
                   

        </div>
          
        
        

    );

}
export default Home;