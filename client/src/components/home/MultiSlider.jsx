import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import {AppBar,Toolbar,makeStyles,Typography,Box, Button, FormHelperText,Grid} from '@material-ui/core'
import ProductCard from "./ProductCard";
import { useState } from "react";
import { productDetails } from "../../constants/data";
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
    // This is Carousal For Large Device
     LgCarousal: {
        marginLeft:10,
        [theme.breakpoints.between('sm', 'md')]: {
             display:'none',
         },
    },
     // This is carousal For Medium Device
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

const MultiSlider=({firstHalf,secondHalf})=>{

    const classes=useStyles();
   // data ? console.log(data.length/2) : console.log("'''''''''''''")
   firstHalf && secondHalf ? console.log(firstHalf,secondHalf) : console.log("first halfffffffffffff")
    const [data1,setdata] = useState([]);
    //const [firstHalf,setfirstHalf] = useState([]);
    //const [secondHalf,setsecondHalf] = useState([]);
    //data ? setfirstHalf(data.splice(0,Math.ceil(data.length/2))) : console.log("first halffffffff")
    //data ? setdata(data) : console.log("not settingggg");
    //if(data){
            // const half = Math.ceil(data1.length / 2);
            // setfirstHalf(data1.slice(0, half))   
            // setsecondHalf(data1.slice(-half)) 
    //}
    return(
        
        <>
        
        <Box className={classes.root}>
            {
                
                <Box className={classes.firstbox}>
              { 
              firstHalf && secondHalf ? 
              <>
              <Carousel responsive={responsive} infinite={true} className={classes.LgCarousal} >
                    {
                        firstHalf.map( details => (
                            
                        <Box className={classes.ForLGScren}>
                                
                               {/* {
                                   firstHalf.map(details=> ( */}
                                    <ProductCard
                                    image={details.image[0]}
                                    category={details.category}
                                    productname={details.name}
                                    productprice={details.price}
                                
                                />
                                ))
                                   
                               {/* } */}
                               {/* {
                                   secondHalf.map(details=>(
                                    <ProductCard
                                    image={details.image[0]}
                                    category={details.category}
                                    productname={details.name}
                                    productprice={details.price}
                                     
                                 />
                                   ))
                                   
                               }
                               */}

                        </Box> 
                        
                            
                         ))
                        
                    }
                </Carousel>

                <Carousel responsive={responsive} infinite={true} className={classes.LgCarousal} >
                    {
                        secondHalf.map( details => (
                            
                        <Box className={classes.ForLGScren}>
                                
                               {/* {
                                   firstHalf.map(details=> ( */}
                                    <ProductCard
                                    image={details.image[0]}
                                    category={details.category}
                                    productname={details.name}
                                    productprice={details.price}
                                
                                />
                                ))
                                   
                               {/* } */}
                               {/* {
                                   secondHalf.map(details=>(
                                    <ProductCard
                                    image={details.image[0]}
                                    category={details.category}
                                    productname={details.name}
                                    productprice={details.price}
                                     
                                 />
                                   ))
                                   
                               }
                               */}

                        </Box> 
                        
                            
                         ))
                        
                    }
                </Carousel>
                
              </> : <div>..............</div>
              
                }

               
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
                       productDetails.map( details => (
                            
                            <Box>
    
                               <ProductCard
                                  image={details.imageUrl}
                                  category={details.productCategory}
                                  productname={details.productName}
                                  productprice={details.productPrice}
                               />
                                   
                            </Box> 
                                
                        ) )
                    }
                </Carousel> 


            </Box> 
            
            }
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