import HomeSearchBar  from './SearchBar';
import React from 'react';
import { useEffect } from 'react';
import Banner from './Banner';
import Headings from './Headings'
import { productDetails } from "../../constants/data";
import Cards from './Cards';
import Footer from '../footer/footer';


import MultiSlider from './MultiSlider';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as ProductList } from '../../redux/actions/productActions';

const Home = () => {

    console.log("Inside hone 1");
    const getProducts = useSelector(state => state.getProducts);
    console.log("Inside hone 2");
    console.log("data from database type :", typeof (getProducts));
    console.log(getProducts);
    //const {productInfo1} = 
    console.log("data from file type :" , typeof(productDetails));
    console.log(productDetails);
    console.log("Inside hone 3");
   // const { productInfo } = getProducts.Products;
    console.log("Inside hone 4");
    //console.log("data type of productInfo :",typeof (productInfo));
    //console.log(productInfo);
    console.log("Inside hone 5");
    //const {productInfo} = getProducts;

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