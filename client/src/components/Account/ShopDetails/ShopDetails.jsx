import { Grid, makeStyles, Paper ,Box, useMediaQuery, useTheme,Typography,OutlinedInput,InputLabel,MenuItem,FormControl,Select,Chip,Divider} from '@material-ui/core'
import React from 'react'
import CoverImage from "./cover_image.jpg"
import ProfileImage from "./profile_image.png"
import ReactStars from "react-rating-stars-component";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShopProducts from './ShopProducts';
import Reviews from "./Reviews";
import { useParams } from 'react-router';
import { useEffect,useState } from 'react';
import { getBusiness } from '../../../redux/actions/businessActions';
import { getJobsofbusinessbyID } from '../../../redux/actions/jobActions';
import {getProductsofbusinessbyID} from '../../../redux/actions/productActions';
import { useDispatch } from 'react-redux';
import Map from './map.jsx';
import ShowAllJobs from './showAllJobs.jsx';
import ShowShopPhotos from './showPhotos';
import Description from './ShopDescription';

const names = [
    'JBL',
    'BOAT',
    'ScullCandy',
    'BOAT Wireless',
    'BOAT Airpods',
    'INTEX',
    'BOAT Wireless',
    'BOAT Wireless',
    'BOAT Wireless',
    'BOAT Wireless',
];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };


function TabPanel(props) {
    const { children ,value,index} = props;
    return (
        <div>
            {
                value === index && (
                    <h1>{children }</h1>
                )
           }
        </div>
    )
}

// const item={
//     "name":"Adidas",
//     "desc":"We are dedicated to sell best quality products at reasonable prices.",
//     "addr":"New York City,New York, United States.",
//     "details":"Joined Since 2018 | Total Products 9",
//     "rating" : 4,
// }

function getStyles(name, personName, theme) {

    

    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? 400
          : 500
    };
}

const useStyles= makeStyles(theme=>({
    paper:{
        margin:"200px 20px 20px 20px",
        padding:"15px",
    },
    main:{
        margin:"20px",
        width:"auto",
        [theme.breakpoints.down('sm')]:{

        },
    },
    img:{
    width:"100%",
    height:"300px",
    marginRight:"50px",
    [theme.breakpoints.down('sm')]:{
        height:"150px",
        
        
    },

    },
    profile:{
        width:"150px",
        height:"150px",
        marginTop:"10px",
        marginLeft:"50px",
        borderRadius:"50%",
        border:"1px solid black",
        [theme.breakpoints.down('sm')]:{
            width:"65px",
            height:"65px",
            marginLeft:"0px",
            marginRight:"0px",
        },
    },
    cover:{
        marginRight:"75px",
        marginLeft:"75px", 
        [theme.breakpoints.down('sm')]:{
            marginRight:"10px",
            marginLeft:"10px", 
        },
    },
    second:{
       marginRight:"50px",
       marginLeft:"50px", 
       display:"flex",
       [theme.breakpoints.down('sm')]:{
        marginRight:"10px",
        marginLeft:"10px",
       },
    },
    tp:{
        margin:"10px 0px 10px 0px",
        [theme.breakpoints.down('sm')]:{
            margin:"0px",
        }
    },
    list:{
        listStyle:"none",
    },
    text:{
        fontWeight:"900",
        flexGrow:"1",
        fontFamily:"Roboto,sans-serif",
        [theme.breakpoints.down('sm')]:{
            fontSize:"0.5rem",
            padding:"5px",
            
            
        }
    },
    mainBoxFor_Tabs_Divider: {
            marginLeft:"75px",
            marginRight:"75px",
             display:'Grid',
             [theme.breakpoints.down('sm')]:{
                marginLeft:"10px",
                marginRight:"10px",
             },
       
    },
    testBox: {
        
           display:'Grid',
            marginLeft: 10,
            marginRight:10,
            
            width: '100%',
            borderBottom: '0.1em solid #A1B3BA',
            borderRight: 'none',
            
        
    },
    default_tabStyle:{
        

        fontFamily: ['Noto Sans', 'sans-serif'],
        fontSize: '1rem',
        fontWeight: '500',
        backgroundColor: 'transparent',
        borderRadius: 5,
    },
    active_tabStyle:{
        fontFamily: ['Noto Sans', 'sans-serif'],
        fontSize: '1rem',
        fontWeight: '500',
        fontColor:'black',
        backgroundColor: '#ff6868',
        borderRadius: 5,
       },
       mainBoxForFiltersandProducts: {
        display: 'flex',
        flexDirection: 'row',
        //backgroundColor: 'pink',
        marginTop: 100,
        marginLeft:20,
        marginRight: 20,
        
    [theme.breakpoints.down('sm')]: {
      //display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      marginTop: 40,
      
    }
        
    },
    filterBox: {
        width: 350,
        height: '100%',
        //backgroundColor: 'red',
        marginTop: 50,
        marginLeft: 20,
        padding: 10,
        
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginLeft: 0,
      }
        
        
    },
    productContainer: {
        //backgroundColor: 'green',
        width: '100%',
        height: '100%',
        marginTop: 0,
        marginLeft: 30,
        marginRight: 20,
      paddingLeft: 20,
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        justifyContent: 'center',
        border: '1px solid #A1B3BA',
        borderRadius:8,
        }
  },
}))

const initialbusinessdata={

    firstName:"",
    lastName:"",
    contactNumber:"",
    name:"",
    address:"",
    website:"",
    description:"",
    
    twitter:"",
    facebook:"",
    instagram:"",
    rating:0,


};

const ShopDetails = () => {
    const {id}=useParams();

    const [sellerdata,setsellerdata]=useState(initialbusinessdata)
    const [JobsBYBusiness,setJobsBYBusiness] = useState({});
    const [productsByPerBusiness,setproductsByPerBusiness] = useState([]);
    const dispatch=useDispatch();
    const dispatch1 = useDispatch();
    const dispatch2=useDispatch();

    useEffect(()=>{
       dispatch(getBusiness(id)).then((item)=>console.log(setsellerdata(item.payload.business)));

       dispatch1(getJobsofbusinessbyID(id)).then((jobs)=>{
        console.log(jobs.payload);
        setJobsBYBusiness(jobs.payload);
       })
    //    console.log("I am her in useEffect of Product Detail");
    dispatch2(getProductsofbusinessbyID(id)).then((product)=>{
        console.log(product);
        setproductsByPerBusiness(product.payload.products);
    }) 
    //    data.Products?console.log(data.Products.product.seller):console.log("Not taking it");
    },[])

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const TabletScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const getLatLong = (mapAddress) => {
        return mapAddress?.split(",").map((item) => parseFloat(item));
      };
    

  const [personName, setPersonName] = React.useState([]);

  const handleChanges = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
    return (
        <Paper flexGrow={2} elevation={5} className={classes.paper}>
        <Grid container className={classes.main}>
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.cover}>
                <img src={CoverImage} alt="Cover Image" className={classes.img}></img>
            </Grid>
        </Grid>
            
                <Grid container className={classes.second} alignItems="center">
                    <Grid item xs={3}>
                        <img src={ProfileImage} alt="Profile Image" className={classes.profile}></img>
                    </Grid>
                    <Grid item xs  className={classes.tp}>
                    <ul className={classes.list}>
                        <li>

                            <Typography style={{color:' #34495e',fontFamily: ['Noto Sans', 'sans-serif'],fontSize:'2rem',}} gutterBottom component="div" className={classes.text} >
                                    {sellerdata.name}
                            </Typography>
                        </li>
                        <li>

                            <Typography style={{color:' #34495e',fontFamily: ['Noto Sans', 'sans-serif'],fontSize:'1rem',}} gutterBottom component="div" className={classes.text} >
                                  {sellerdata.description}
                            </Typography>
                        </li>
                        <li>
                            
                            <Typography variant="h8" gutterBottom component="div" className={classes.text} >
                             {/* {item.details} */}
                            </Typography>
                        </li>
                        <li>
                            
                            <Typography style={{color:' #34495e',fontFamily: ['Noto Sans', 'sans-serif'],fontSize:'1.2rem',}} gutterBottom component="div" className={classes.text}>
                            {sellerdata.address}
                            </Typography>
                        </li>
                        <li>
                            <ReactStars 
                                count={5}
                                value={sellerdata.rating}
                                size={mobileScreen?8:24}
                                
                                
                                
                            />
                        </li>
                    </ul>
                        
                    </Grid>
                </Grid>
             
            
            <Box className={classes.mainBoxFor_Tabs_Divider}>
            
            <Box className={classes.testBox}>
                <Tabs
                    orientation='horizontal'
                    variant='scrollable'
                    value={value}
                    onChange={handleChange}
            >

                    <Tab label="Seller Products" className={ value===0 ? classes.active_tabStyle : classes.default_tabStyle  } />
                    <Tab label="Reviews"  className={ value===1 ? classes.active_tabStyle : classes.default_tabStyle  }/>
                    <Tab label="Description" className={ value===2 ? classes.active_tabStyle : classes.default_tabStyle  }/>
                    <Tab label="Jobs" className={ value===3 ? classes.active_tabStyle : classes.default_tabStyle  }/>
                    <Tab label="Photos" className={ value===4 ? classes.active_tabStyle : classes.default_tabStyle  }/>
                    <Tab label="Map" className={ value===5 ? classes.active_tabStyle : classes.default_tabStyle  }/>
                    
                </Tabs>
    
            </Box>
            {/* <Grid container spacing={2}> 
            {/* <Grid container spacing={2}> */}
            {/* <TabPanel value={value} index={0}>
                    <Typography gutterBottom component="div"  style={{color:' #34495e',fontFamily: ['Noto Sans', 'sans-serif'],fontSize:'1.5rem',}}  >
                    Check Out Our Products
                    </Typography>     
            </TabPanel> */}
               
            
                
            {/*
            <TabPanel value={value} index={2}>
                    <Typography gutterBottom component="div" style={{fontFamily:"Montserrat,sans-serif",fontWeight:"700"}}  >
                    Description
                    </Typography>      
            </TabPanel>
            <TabPanel value={value} index={3}>
                    <Typography gutterBottom component="div" style={{fontFamily:"Montserrat,sans-serif",fontWeight:"700"}}  >
                    Policy 
                    </Typography>      
            </TabPanel>
            <TabPanel value={value} index={4}>
                    <Typography gutterBottom component="div" style={{fontFamily:"Montserrat,sans-serif",fontWeight:"700"}}  >
                    Photos 
                    </Typography>      
            </TabPanel>
            */} 
            {/* </Grid> */}
            </Box>
            <Box className={classes.mainBoxForFiltersandProducts}>
            
                <Grid container className={classes.productContainer}>
               
                <TabPanel value={value} index={0}> 
                
                    <ShopProducts productsData={productsByPerBusiness}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Reviews/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Description data={sellerdata}/>
                </TabPanel>

                <TabPanel value={value} index={3}>
                    <ShowAllJobs JobsBYBusiness={JobsBYBusiness}/>
                </TabPanel>
                <TabPanel value={value} index={4}>
                <Typography component="div"  style={{color:' #34495e',fontFamily: ['Noto Sans', 'sans-serif'],fontSize:'1.5rem',marginBottom:10}}  >
                    Check Out Some Photos of Shop
                </Typography> 
                    <ShowShopPhotos productsData={sellerdata.Shopimages}/>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    
                    <Map
                        
                        address={sellerdata?.address}
                    />
                </TabPanel>
                </Grid> 
                </Box>
        </Paper>
    )
}



export default ShopDetails
