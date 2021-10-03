import React from 'react';

// Import card and realated 
import Card from "@material-ui/core/Card";
import { CardContent, Container } from '@material-ui/core';
import { CardActions } from '@material-ui/core/CardActions';
import { CardMedia } from '@material-ui/core';

// Import Typography for Writing text
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core';

//import Star library
import ReactStars from "react-rating-stars-component";



import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    
    
        
        
        mainCard: {
            display:'flex-col',
            //margin: 50,
            marginLeft:20,
            width: 532,
            height: 815,
            borderRadius: 10,
            borderColor: '#A1B3BA',
            borderWidth: 0.5,
            alignItems: 'center',
        [theme.breakpoints.between('sm', 'md')]: {
              
            marginLeft: 20,
            width: 300,
            height:500,
            }
           
        
        },

        contentCard: {
            display:'grid',
            justifyContent: 'center',
            alignItems:'center',
            
        },
        
        
        imageBox: {
            
            marginLeft:70,
            width: '70%',
            height: '100%',
            backgroundColor: '#8FD1D1',
            borderRadius: 10,

            [theme.breakpoints.between('sm', 'md')]: {
              
                marginLeft: 50,

                }
    
    },
    

        productViews: {
          
            display:'flex',
            width: '100%',
            height:88,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 0,
            marginBottom: 40,
            padding: 2,
            
            
            [theme.breakpoints.between('sm', 'md')]: {
              
                //marginLeft: 0,
                display:'none',

                }
            
        },
        differentViewImages: {
            height: '100%',
            width: '40%',
            borderRadius: 10,
            marginLeft: 2,
            marginRight: 2,
            border: '1px solid #F7D110',
            padding:0,
            
        },
       

        productName: {
            fontFamily: ['Noto Sans','sans-serif'],
            fontSize: 30,
            fontWeight: '400',
            alignItems: 'center',
            margin: 'auto',
            marginTop: 80,
            
        [theme.breakpoints.between('sm', 'md')]:{
            marginTop: 50,
            fontSize:20,
            fontWeight: '400',
            alignItems: 'center',
            margin: 'auto',

            }
            

           
        },

        starStyle: {
            margin: 'auto',
            marginTop: 0,
           
        },

    
        productPrice: {
            //marginTop:10,
            fontFamily: ['Montserrat','sans-serif'],
            fontSize: 30,
            fontWeight: '400',
            //color: '#F7D110',
            color:'#FF2929',
           
            margin: 'auto',
            [theme.breakpoints.between('sm', 'md')]: {
                fontSize: 25,
                color:'#FF2929',
            }
    },
    productCategory: {
        display: 'none',
        [theme.breakpoints.between('sm', 'md')]: {
            display:'flex',
            marginTop: 40,
            marginLeft:70,
            fontFamily:['Roboto','sans-serif'],
            fontSize: 20,
            fontWeight:'100',
        },
            
    },
        imagedeco: {
            height: '100%',
            width: '100%%',
            borderRadius: 10,
            borderColor:'red',
    },
    productPriceBox: {
        marginTop:60,
        display: 'flex',
        margin:'auto',
        width: '70%',
        height: '50%',
        justifyContents:'center',
        backgroundColor: '#F5F5F5',
        padding: 2,
        borderRadius:40, 
        [theme.breakpoints.between('sm', 'md')]: {
        
        width: '80%',
        height: '70%',
        backgroundColor: '#F5F5F5',
        padding: 2,
        borderRadius: 40,
        marginTop: 20,
        
        
        }
       
    }
    
})
    
);

const ratingChanged = (newRating) => {
    console.log(newRating);
  };


const Bigcard = () => {

    const classes = useStyles();
    return (
        
        <div>
            <Card className={classes.mainCard} sx={{ minWidth: 275 }}>
                <CardContent className={classes.contentCard}>
                 
                    {/** Product Image */}
                    <CardMedia className={classes.imageBox}
                        component="img"
                            //height="100%"
                        image="https://cdn.shopify.com/s/files/1/0067/6429/8297/products/headphone5.jpg?v=1527478918"
                        alt="Product Image"
                    />

                    
                    {/**  Different views of the Product */}
                    {/**Main Box */}
                    <Box className={classes.productViews}>

                        {/** Inside we have images of the product */}
                        {/** Image 1 */}
                         <Box className={classes.differentViewImages}>
                        <CardMedia className={classes.imagedeco}
                        component="img"
                            //height="100%"
                        image="https://cdn.shopify.com/s/files/1/0067/6429/8297/products/headphone5.jpg?v=1527478918"
                        alt="Product Image"
                        />
                        </Box>
                        
                        <Box className={classes.differentViewImages}>
                        <CardMedia className={classes.imagedeco}
                        component="img"
                            //height="100%"
                        image="https://cdn.shopify.com/s/files/1/0067/6429/8297/products/headphone5.jpg?v=1527478918"
                        alt="Product Image"
                        />
                        </Box>
                        <Box className={classes.differentViewImages}>
                        <CardMedia className={classes.imagedeco}
                        component="img"
                            //height="100%"
                        image="https://cdn.shopify.com/s/files/1/0067/6429/8297/products/headphone5.jpg?v=1527478918"
                        alt="Product Image"
                        />
                        </Box>
                        <Box className={classes.differentViewImages}>
                        <CardMedia className={classes.imagedeco}
                        component="img"
                            //height="100%"
                        image="https://cdn.shopify.com/s/files/1/0067/6429/8297/products/headphone5.jpg?v=1527478918"
                        alt="Product Image"
                        />
                        </Box> 
                    
                    </Box>

                    
                     {/** Product Category */}
                     <Typography variant="h6"  className={classes.productCategory} component="div">
                        HeadPhones
                    </Typography>


                    {/** Product Name */}
                    <Typography variant="h6"  className={classes.productName} component="div">
                    Apple Iphone Xs Max
                    </Typography>

                    
                    {/** Product Rating */}
                    {/** Add stars for rating */}
                     <ReactStars classNames={classes.starStyle}
                        count={5}
                        onChange={ratingChanged}
                        size={35}
                        activeColor="#F7D110"
                    /> 
                    
                    

                    <Box className={classes.productPriceBox}>
                    <Typography variant="h6"  className={classes.productPrice} component="div">
                        ₹719
                    </Typography>
                        </Box> 


                </CardContent>
                
            </Card>
        </div>
    )
}

export default Bigcard;


// image
// category
// price - design
// product name
// star rating