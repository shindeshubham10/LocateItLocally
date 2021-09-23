import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import {AppBar,Toolbar,makeStyles,Typography,Box, Button} from '@material-ui/core'
import ProductCard from "./ProductCard";

import { card } from "../../constants/data";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
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
            
            
            
        },
       

    }
)
const Cards=()=>{
    const classes = useStyles();
    return(
        
        <Box className={classes.root} >
            <Carousel responsive={responsive} infinite={true} >
                {
                    card.map( image => (
                        
                       
                           <ProductCard img={image}/>
                           

                            

                             
                        
                   ) )
                }
            </Carousel>

        </Box>
            


        
        
    );


}

export default Cards;