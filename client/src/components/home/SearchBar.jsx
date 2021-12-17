
import React from 'react';
import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, Box,Button } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import * as opencage from 'opencage-api-client';



import Popover from '@mui/material/Popover';
import CategoryMenu from './PopOverModals/CategoryMenu';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { getProducts as ProductList } from '../../redux/actions/productActions';
import { getProductsByLocation } from '../../redux/actions/productActions';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

  main:{

    display: 'flex',
    marginTop: 150,
    justifyContent: 'center',
    gap : 50,
  },


  
  root: {
    // This is the main Root of both of the Search bars ( Product + Location )
    padding: '2px 4px',
    display: 'flex',
    alignItems:'center',
    width:600,
   
    justifyContent: "center",
    borderColor:'#A1B3BA',
    
    borderTopLeftRadius:30,
    borderBottomLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomRightRadius: 30,

    // For Mobile Screen
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(1.5),
      marginLeft:theme.spacing(1.5),
    },

    // For Medium Screen
    [theme.breakpoints.between('sm', 'md')]: {
      marginRight: theme.spacing(1),
      marginLeft:theme.spacing(1),
    },
 
  },


  // Input Location Search Bar
  inputLocation: {
    marginLeft:theme.spacing(1),
    display: 'flex',

    // For Mobile Screen - Disable
    [theme.breakpoints.down('sm')]: {
      display:'none',
      },
  
    // For medium Screen - Enable 
    [theme.breakpoints.between('sm','md') ]: {
        display: 'flex',
        marginLeft:theme.spacing(1),
    },
    
  },

  // Search Product - Search Bar
  inputProduct: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },

  iconButton: {
    padding: 10,
     
  },

  divider: {
    height: 28,
    margin: 4,
    marginLeft: 150,

    // For Mobile Screen - Disable
    [theme.breakpoints.down('sm')]: {
      display:'none',
      },
  
    // For medium Screen - Enable 
    [theme.breakpoints.between('sm', 'md')]: {
      display: 'block',
      height: 28,
      margin: 4,
      marginLeft:theme.spacing(1),
    },

  },


  searchicon:{
    color: 'black',
    
    // For Mobile Screen
    [theme.breakpoints.down('sm')]: {
      marginRight:theme.spacing(3),
    },

    // For Medium Screen
    [theme.breakpoints.between('sm', 'md')]: {
      marginRight:theme.spacing(1),
    },
  },


  arrowDropDown: {

    // For Mobile Screen - Disable
    [theme.breakpoints.down('sm')]: {
      display:'none',
    },
    // For medium Screen - Enable 
    [theme.breakpoints.between('sm', 'md')]: {
      display: 'block',
    },
  },


  // All categories Button CSS
    All_category_btn:{
  
    borderTopLeftRadius:30,
    borderBottomLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    width:180,
    backgroundColor:'white',
    
    // For Mobile Screen - Disable
    [theme.breakpoints.down('sm') ]: {
      display: 'none',
      },
    
    // For medium Screen - Enable 
    [theme.breakpoints.between('sm', 'md')]: {
      display: 'flex',
      marginLeft: theme.spacing(2),
    },
    

        
   },

  category_popOver: {
     borderRadius:15,
   }
}
));




const HomeSearchBar=({setshowSearchedProduct})=>{
  const classes = useStyles();
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [pincode,setpincode]=useState("");

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      const id=navigator.geolocation.watchPosition((position) => {
        setStatus(null);
        console.log(position);
       const string=position.coords.latitude+","+position.coords.longitude;
         opencage
         .geocode({ key: '574f2e7a4cba478c9e03b38705c09f8c' , q:string })
         .then(response => {
           console.log(response);
           setpincode(response.results[0].components.postcode);
           
  
           navigator.geolocation.clearWatch(id);
         
         
          
          
         })
         .catch(err => {
           console.error(err);
          
         });
      }, () => {
        setStatus('Unable to retrieve your location');
      },
      { enableHighAccuracy: true, maximumAge: 2000, timeout: 5000 }
      );
    }

    //return pincode;
  }



  

  
 

  const [anchorEl, setAnchorEl] = useState();

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  
  const open = Boolean(anchorEl);

  const getProducts = useSelector(state => state.getProducts);
    console.log("Inside hone 2");
    console.log("data from database type :", typeof (getProducts));
    console.log(getProducts);
    console.log(getProducts.Products);


    const dispatch = useDispatch();
    const dispatch1 = useDispatch();

   

    const [showProducts,setshowProducts] = useState(false);
  //  const [showSearchedProduct,setshowSearchedProduct] = useState(false);
    const [Products,setProducts] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {

      getLocation();

      // dispatch(ProductList()).then((searchdata)=>{
      //     console.log(searchdata);
      //     setProducts(searchdata.payload);

     // });

      
     pincode ? dispatch1(getProductsByLocation(pincode)).then((productsByLocation)=>{
        console.log("In getProduct by location dispatch.....");
        console.log(productsByLocation.payload.products);
        setProducts(productsByLocation.payload.products);
      }) : console.log("Thamb re pincode sathi----")


      //setshowSearchedProduct(false);
      console.log("Inside dispatch");

  }, [])

    const filteredProducts = Products?.filter((product) => {
        if (
          product?.name.toLowerCase().includes(search) ||
         
          product?.category.toLowerCase().includes(search)
        ) {
          return product;
        }
      });


  const CategoryButton = styled(Button)(({ theme }) => ({
    borderTopLeftRadius:30,
    borderBottomLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    width:180,
    backgroundColor: 'white',
    border:'1px solid black',
    
  }));

  return (
    <>
    {/** Main Box Containing all Elements */}
      <Box className={classes.main}>
        
        {/** Button = All categories */}
         <Button
          aria-owns={open ? 'show-category-menu' : undefined}
          aria-haspopup="true"
          className={classes.All_category_btn}
          variant="outlined" 
          style={{ textTransform: 'none' }}
          startIcon={<ArrowDropDownIcon />}
          onClick={handlePopoverOpen}
          onMouseOver={handlePopoverOpen}
          //onMouseOut={handlePopoverClose}
        >
            All Categories
        </Button> 
       

        <Popover
          id="show-category-menu"
          //className={classes.category_popOver}
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          //onMouseOut={handlePopoverClose}
           anchorOrigin={{
             vertical: 'bottom',
             horizontal: 'left',
          }}
          //aria-hidden={'true'}
          //disableRestoreFocus
        >
           <CategoryMenu /> 
          {/* <Typography sx={{ p: 1 }}>I use Popover.</Typography> */}
        </Popover>
    


       {/** Input For Both Product Search and Location */}
        <Paper component="form" className={classes.root} elevation={3} variant="outlined">
        
        {/** Input For Product Search */}  
        <InputBase
            className={classes.inputProduct}
            placeholder="i'm searching for"
            inputProps={{ 'aria-label': 'im searching for' }}
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
              setshowSearchedProduct(false);
              if(e.target.value.length==0){
                setshowProducts(false);
                setshowSearchedProduct(true);
              }else{
                setshowProducts(true);
                
              }
              
            }}
        />
        
        <Divider className={classes.divider} orientation="vertical" />

        {/** Input For Location Search */}
        <InputBase
        
            className={classes.inputLocation}
            placeholder="Location"
            inputProps={{ 'aria-label': 'Location' }}
            value={pincode}
            
        />
          <ArrowDropDownIcon className={classes.arrowDropDown} />
          
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            {/** PageView Icon = Search Icon */}
            <SearchIcon className={classes.searchicon}/>
        </IconButton>
        
        </Paper>

    </Box> 
    <div className="display">
        { 
         showProducts ?
         filteredProducts.map((product) => (
          <Link to={`productsDetails/${product._id}`}>
          <ProductCard
          //image={product.imageUrl}
          category={product.category}
          productname={product.name}
          //productprice={productPrice}
                
          />
          </Link>   

        )) : <p>....</p>
      } 
    </div>
    


    </>
    
  );
}


export default HomeSearchBar;