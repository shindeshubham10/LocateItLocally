import React from 'react';

// Import card and realated 
import Card from "@material-ui/core/Card";
import { CardContent } from '@material-ui/core';
import { CardActions } from '@material-ui/core/CardActions';
import { CardMedia } from '@material-ui/core';

// Import Typography for Writing text
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core';



import Box from '@material-ui/core/Box';
import { getThemeProps } from '@material-ui/styles';



// card have three components 
// 1. Image
// 2. Category
// 3. Product Name
// 4. Price



const useStyles = makeStyles(
    {
        
        
        mainCard: {
            display:'flex-col',
            backgroundColor: '#FFFFFF',
            margin: 50,
            width: 230,
            height: 400,
            borderRadius: 10,
            borderColor: '#A1B3BA',
            borderWidth:0.5,
        
        },
        
        
        imageBox: {
            //marginTop: 300,
            //marginBottom: 10,
            //color: 'black',
            width: '100%',
            height: '60%',
            backgroundColor: '#8FD1D1',
            //borderTopLeftRadius: 50,
            borderRadius: 10,
            //alignItems: "center",
            //justify:"center",
            

        },
        productCategory: {
            marginTop:10,
            fontFamily:['Roboto','sans-serif'],
            fontSize: 20,
            fontWeight:'100',
        },

        productName: {
            fontFamily: ['Noto Sans','sans-serif'],
            fontSize: 20,
            fontWeight:'500',
        },

        productPrice: {
            marginTop:5,
            fontFamily: ['Montserrat','sans-serif'],
            fontSize: 30,
            fontWeight:'400',
        },
    }
);

const ProductCard = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.mainCard} sx={{ minWidth: 275 }} >
                <CardContent>
                 
                    {/** Product Image */}
                    <CardMedia
                        component="img"
                            //height="100%"
                        image= {props.img}
                        alt="Product Image"
                    />
                    

                    {/** Product category */}
                    <Typography variant="h6"  className={classes.productCategory} component="div">
                        Sound
                    </Typography>

                    
                    {/** Product Name */}
                    <Typography variant="h6"  className={classes.productName} component="div">
                    Epson Home Cinema 5040UB 7648732
                    </Typography>

                    
                    {/** Product Pricing */}
                    <Typography variant="h6"  className={classes.productPrice} component="div">
                        ₹719
                    </Typography>
                </CardContent>
                
            </Card>
   
        </div>
    );
}

export default ProductCard;



/**
 { fontWeight: '100' }, // Thin
{ fontWeight: '200' }, // Ultra Light
{ fontWeight: '300' }, // Light
{ fontWeight: '400' }, // Regular
{ fontWeight: '500' }, // Medium
{ fontWeight: '600' }, // Semibold
{ fontWeight: '700' }, // Bold
{ fontWeight: '800' }, // Heavy
{ fontWeight: '900' }, // Black
 */