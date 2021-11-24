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

import { getProductDetails } from '../../redux/actions/productActions'
import { Typography } from '@mui/material'


const ProductDetails = ({match}) => {
    const [alignment, setAlignment] = React.useState('A');

    const [loading, setloading] = React.useState(false);

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const {productDetails} = useSelector(state=>state.getProductDetails);
    const dispatch = useDispatch();
    if(productDetails){
        setloading(false);
    }

    console.log("Product ID in details page");
    console.log(match.params.id);

    useEffect(()=>{
        dispatch(getProductDetails(match.params.id));
    },[dispatch])


    console.log("Product Data in Details Main page - ",productDetails); 

    return (
       
       <>
            { loading ? <Product data={productDetails}/> : <Typography>Loading......</Typography>}
            <Description />
             <Headings name="Related Products" />
             {/* <Cards/> */}
             <FAQ />    
            
            
        </>
    )
}

export default ProductDetails
