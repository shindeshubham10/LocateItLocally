import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import {AppBar,Toolbar,makeStyles,Typography,Box, Button, FormHelperText} from '@material-ui/core'
import ProductCard from "./ProductCard";
import { useState } from "react";
import { card } from "../../constants/data";
import Bigcard from "./BigCard";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const useStyles=makeStyles(
    {
        root:{

            marginLeft: 200,
            marginRight: 200,
            marginTop : 20,
            display: 'flex',
            
            
            
            
        },
        firstbox:{

            width:"50%",
            height:"100%",
            

        },
        secondbox:{

            width:"50%",
            height:"100%",
        },

        
        bigcard:{
            height:"100%",
            
            
        }
       

    }
)

const MultiSlider=()=>{

    const classes=useStyles();

    return(

        <Box className={classes.root}>
            <Box className={classes.firstbox}>
                <Carousel responsive={responsive} infinite={true} >
                    {
                        card.map( image => (
                            
                        <Box>

                                <ProductCard img={image}/>
                                <ProductCard img={image}/>

                        </Box>
                            

                            

                                

                                
                            
                    ) )
                    }
                </Carousel>

            </Box>
            <Box className={classes.secondbox}>
                    <Bigcard className={classes.bigcard}/>
            </Box>
        </Box>

    )

}

export default MultiSlider;