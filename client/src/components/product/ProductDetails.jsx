import React, { useEffect } from 'react'
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Description from "../product/Description"
import FAQ from "../product/FAQ"
import Product from "../product/Product"
import { FiRotateCcw } from 'react-icons/fi'
import { FiberPinTwoTone } from '@material-ui/icons'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Divider from '@mui/material/Divider';
import Headings from '../home/Headings';
import Cards from "../home/Cards";
import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails, getProductByCategory } from '../../redux/actions/productActions'

import { getReviews } from '../../redux/actions/reviewActions'
import { Typography } from '@mui/material'


const ProductDetails = ({match}) => {
    const [alignment, setAlignment] = React.useState('A');

    const [loading, setloading] = React.useState(false);

    const [categoryWiseProduct,setcategoryWiseProduct] = React.useState([]);

    const [reviews,setreviews]=React.useState([]);
       

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const productDetails = useSelector(state=>state.getProductDetails);
    const dispatch = useDispatch();

    const dispatch1 = useDispatch();
   
   
    console.log("Product ID in details page");
    console.log(match.params.id);

    useEffect(()=>{

        dispatch(getProductDetails(match.params.id)).then((allProductDetails)=>{

            console.log("alaData...........",allProductDetails);
            const categoryOfProduct = allProductDetails.payload.product.category;

            dispatch1(getProductByCategory(categoryOfProduct)).then((categoryWiseProduct)=>{

                setcategoryWiseProduct(categoryWiseProduct.payload.productByCategory);
                 console.log("In category wise dispatch = ",categoryWiseProduct);
                 
             });
        });

        dispatch(getReviews(match.params.id)).then((data)=>console.log(data));
      
    },[dispatch,dispatch1])

    console.log("categoryWiseProduct ===" ,categoryWiseProduct);
    




    // this category data we have to use to fetch related products to that respective category.
    if( productDetails.Products){
        console.log("Category to fetch related products = ",productDetails.Products.product.category);
        
    }
  

   

    console.log("Product Data in Details Main page - ",productDetails); 

    return (
       
       <>
            
            <Product data={productDetails}/> 
            <Description data={productDetails} />
            <Headings name="Related Products" />
            <Cards data={categoryWiseProduct}/> 
             <FAQ /> 
             
             
            
            
        </>
    )
}

export default ProductDetails
