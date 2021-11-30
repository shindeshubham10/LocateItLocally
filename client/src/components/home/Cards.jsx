import Carousel from "react-multi-carousel";
//import Carousel from 'react-material-ui-carousel';
import "react-multi-carousel/lib/styles.css";
import {AppBar,Toolbar,makeStyles,Typography,Box, Button} from '@material-ui/core'
import ProductCard from "./ProductCard";
import { FiChevronRight } from 'react-icons/fi';
//import { productDetails } from "../../constants/data";

import { useSelector } from 'react-redux';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
    items: 5,
  
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};


const useStyles = makeStyles((theme) => ({

  root: {
     marginTop:20,
     marginLeft: 60,
     marginRight: 60,
     paddingLeft: 10,
     paddingRight:10,
    justifyContent:'center',
    //backgroundColor: 'white',
    paddingTop: 10,
    borderRadius: 10,
    //backgroundColor:'green',
    
    // For Small Devices
    [theme.breakpoints.down('sm')]: {
      marginLeft: 5,
      marginRight: 5,
      alignItems: 'center',
      //padding: 0,
      paddingLeft: 70,
      //backgroundColor:'black',
      
    },

    // For Medium Devices
    [theme.breakpoints.between('sm','md')]: {
      marginLeft: 15,
      marginRight: 10,
      //backgroundColor:'red',
    },
    
    
    
    
  },
}
));
    
const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    //onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  
  // onMove means if dragging or swiping in progress.
  return <FiChevronRight
   
    onClick={() => onClick()} />; 
};
const Cards = ({data}) => {
  const classes = useStyles();
  const ProductData = data.Products;
  console.log(ProductData);
  console.log("inside Card")
    return(
        
        <Box className={classes.root} >
2        <Carousel 
          
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          customLeftArrow={<CustomLeftArrow
            
            currentSlide={2}
            deviceType={'mobile'}
          />} 
        >
          
          {
                  
                  ProductData.map( details => (
                        
               
                    <ProductCard
                      image={details.image}
                      category={details.category}
                      productname={details.name}
                      productprice={details.price}

                      
                    />
                    
                    
                  ) )
              } 
          
            
          
        </Carousel>
        </Box>
            


        
        
    );


}

export default Cards;