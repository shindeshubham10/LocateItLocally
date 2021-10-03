import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import {AppBar,Toolbar,makeStyles,Typography,Box, Button, FormHelperText,Grid} from '@material-ui/core'
import ProductCard from "./ProductCard";
import { useState } from "react";
import { card } from "../../constants/data";
import Bigcard from "./BigCard";

import { SliderImages } from "../../constants/data";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

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
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const useStyles = makeStyles((theme) => ({
  

    root: {

        marginLeft: 200,
        marginRight: 200,
        marginTop: 20,
        display: 'flex',
       // backgroundColor: 'black',
        [theme.breakpoints.between('sm','md')]: {
            
            marginLeft: 50,
            marginRight:50,
        }
        
           
            
            
            
            
    },
    firstbox: {

        width: "50%",
        height: "100%",
       // backgroundColor: 'red',
        [theme.breakpoints.between('sm','md')]: {
            
            marginTop:50,
        }
            
            

    },
     LgCarousal: {
        marginLeft:10,
        [theme.breakpoints.between('sm', 'md')]: {
             display:'none',
         },
     },
     MdCarousal: {
         marginLeft: 40,
         marginRight:40,
         [theme.breakpoints.up('md')]: {
             display:'none',
         }
        
     },

    secondbox: {
        margin: 0,
        padding: 0,
        width: "50%",
        height: "100%",
         [theme.breakpoints.between('xs','sm')]: {
             display:'none',
         },
         [theme.breakpoints.between('sm','md')]: {
             display:'flex',
         }
        //backgroundColor: 'green',
          
    },

        
    bigcard: {
        height: "100%",
        width: '100%',
        [theme.breakpoints.between('xs','sm')]: {
            display:'none',
        }
            
            
    },
    boxHavingMultisliderForSM: {
        position: 'relative',
        
        marginLeft: 10,
        marginRight: 10,
        marginTop:10,
        //backgroundColor: 'red',
        paddingTop: 10,
        paddingBottom:30,
        border: '1px solid #A1B3BA',
        borderRadius: 10,
        [theme.breakpoints.up('sm')]: {
            display:'none',
        }
    },
    multiSliderForMobileScreen: {
         paddingTop:8,
        [theme.breakpoints.up('sm')]: {
            display:'none',
        }
    },
    LoadMoreButton:{
  
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
        width:180,
        backgroundColor: 'white',
       
        position: 'absolute',
        [theme.breakpoints.up('sm')]: {
            display:'none',
        },
        
        marginLeft: 85,
        marginTop: 10,
        
        justify : "center"
        
    
            
       }
        

    


})
    
);
const Rightarrow = () => {
    return (
    <Button/>
)
};

const MultiSlider=()=>{

    const classes=useStyles();

    return(
        <>
        <Box className={classes.root}>
            <Box className={classes.firstbox}>
                <Carousel responsive={responsive} infinite={true} className={classes.LgCarousal} >
                    {
                        card.map( image => (
                            
                        <Box className={classes.ForLGScren}>

                                 <ProductCard img={image}/>
                                <ProductCard img={image} /> 
                              

                        </Box> 
                            
                        ))
                        
                    }
                </Carousel>

                <Carousel
                    responsive={responsive}
                    infinite={true}
                    className={classes.MdCarousal}
                    showDots={true}
                    swipeable={true}
                    draggable={true}
                    customLeftArrow={<Rightarrow/>}
                >
                    {
                        card.map( image => (
                            
                            <Box>
    
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
            
             <Box className={classes.boxHavingMultisliderForSM}>
             <Grid container justify = "center" className={classes.multiSliderForMobileScreen}>
            {
                    SliderImages.map( image => (
                     
                                <ProductCard img={image}/>
                         
                        ))
                }   
            </Grid>
            <Button variant="outlined" style={{textTransform: 'none'}} className={classes.LoadMoreButton} startIcon={<ArrowDropDownIcon/>}>
            Load More
            </Button>
            </Box> 
            </>

    )

}

export default MultiSlider;

/** 
 MultiSLider 
 1. Mobile view - Reamining (Yet to decide view for multislider )
 2. Tablet - Done (including Responsive)
 3. PC Screen - DOne 
 */