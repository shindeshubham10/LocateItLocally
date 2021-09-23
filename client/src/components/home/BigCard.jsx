import React from 'react';

// Import card and realated 
import Card from "@material-ui/core/Card";
import { CardContent } from '@material-ui/core';
import { CardActions } from '@material-ui/core/CardActions';
import { CardMedia } from '@material-ui/core';

// Import Typography for Writing text
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core';

//import Star library
import ReactStars from "react-rating-stars-component";



import Box from '@material-ui/core/Box';


const useStyles = makeStyles(
    {
        
        
        mainCard: {
            display:'flex-col',
            margin: 50,
            width: 532,
            height: 796,
            borderRadius: 10,
            borderColor: '#A1B3BA',
            borderWidth: 0.5,
            alignItems: 'center',
           
        
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
    
        },

        productViews: {
          
            display:'flex',
            width: '90%',
            height:88,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 20,
            marginBottom: 40,
            
        },
        differentViewImages: {
            height: '100%',
            width: '20%',
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
            borderColor:'black',
            padding:3,
            
        },
       

        productName: {
            fontFamily: ['Noto Sans','sans-serif'],
            fontSize: 30,
            fontWeight: '400',
            alignItems: 'center',
            margin:'auto',
           
        },

        starStyle: {
            margin: 'auto',
            marginTop: 40,
           
        },

        productPrice: {
            marginTop:25,
            fontFamily: ['Montserrat','sans-serif'],
            fontSize: 30,
            fontWeight: '400',
            color:'#F7D110',
            margin:'auto',
        },
    }
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
                        <CardMedia 
                        component="img"
                            //height="100%"
                        image="https://cdn.shopify.com/s/files/1/0067/6429/8297/products/headphone5.jpg?v=1527478918"
                        alt="Product Image"
                        />
                        </Box>

                        {/** Image 2 */}
                        <Box className={classes.differentViewImages}>
                        <CardMedia 
                        component="img"
                            //height="100%"
                        image="https://cdn.shopify.com/s/files/1/0067/6429/8297/products/headphone5.jpg?v=1527478918"
                        alt="Product Image"
                        />
                        </Box>

                        {/** Image 3 */}
                        <Box className={classes.differentViewImages}>
                        <CardMedia 
                        component="img"
                            //height="100%"
                        image="https://cdn.shopify.com/s/files/1/0067/6429/8297/products/headphone5.jpg?v=1527478918"
                        alt="Product Image"
                        />
                        </Box>

                        {/** Image 4 */}
                        <Box className={classes.differentViewImages}>
                        <CardMedia 
                        component="img"
                            //height="100%"
                        image="https://cdn.shopify.com/s/files/1/0067/6429/8297/products/headphone5.jpg?v=1527478918"
                        alt="Product Image"
                        />
                        </Box>
                       
                    
                    </Box>



                    
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

                    
                    {/** Product Pricing */}
                    <Typography variant="h6"  className={classes.productPrice} component="div">
                        ₹719
                    </Typography>

                </CardContent>
                
            </Card>
        </div>
    )
}

export default Bigcard;