import { bannerData } from "../../constants/data";
import Carousel from "react-material-ui-carousel";
import { mergeClasses } from "@material-ui/styles";
import { AppBar, Toolbar, makeStyles, Typography, Box, Button } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles=makeStyles(theme=>(


    {
         AllContentWithBanner: {
           
            position: 'relative',
            border: '1px solid #A1B3BA',
            marginLeft: 30,
            marginRight: 30,
            marginTop: 30,
            borderRadius: 10,
            
            [theme.breakpoints.down('sm')]: {
                marginLeft: 10,
            marginRight: 10,
            marginTop: 20,
            borderRadius: 10,
            }
             
          
         },
        ban:
        {
            marginTop:20,
            marginLeft:100,
            marginRight:100,
            [theme.breakpoints.down('sm')]: {
                marginLeft:0,
                marginRight:0,
            },
            //position:'absolute',

            

        },
       
        image:{
           width:"100%",
           height:"100%",
           [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            
        }
        },
        // ShopMoreButton: {
        //     marginTop:0,
        // borderTopLeftRadius:30,
        // borderBottomLeftRadius:30,
        // borderTopRightRadius:30,
        // borderBottomRightRadius:30,
        // width:180,
        //     backgroundColor: 'white',
        //     [theme.breakpoints.down('sm')]: {
        //         width: 120,
        //         height:20,
        //         top: 200,
        //         left: 25,
               
        //     },
        //     top: 700,
        //     left:250,
        //     position: 'absolute',
        
        // },
    }
)
    
);


const Banner=()=>{

    const classes = useStyles();
    return (
            <>
            <Box className={classes.AllContentWithBanner}>
            <Carousel className={classes.ban}>
                {
                    bannerData.map( image => (
                        
                             <img src={image} className={classes.image} alt="bannerImages"/>
                        
                   ) )
                }
                </Carousel>
                {/* <Button variant="outlined" style={{textTransform: 'capitalize'}} className={classes.ShopMoreButton} startIcon={<ArrowDropDownIcon/>}>
            Shop Now
            </Button> */}
            </Box> 
             
            </>

       
    )
    

}
export default Banner;

/**
 Now changes to be made in banner are 
 1. we have to add text and button (Shop Now) on these images
 2. Display dynamic text for each image 
 */