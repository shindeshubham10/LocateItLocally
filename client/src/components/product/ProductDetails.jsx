import React from 'react'
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
import Cart from "../home/Cards";
const ProductDetails = () => {
    const [alignment, setAlignment] = React.useState('A');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
       
       <>
            <Product />
            <Description />
            <Headings name="Related Products" />
            <Cart/>
            <FAQ />
            
            
        </>
    )
}

export default ProductDetails
