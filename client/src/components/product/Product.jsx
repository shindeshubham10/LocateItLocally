
import {Grid,Box,makeStyles, Typography,Rating,List,Button,Divider,ListItem,useMediaQuery,useTheme } from '@material-ui/core'
import {FavoriteOutlined,LocationDisabled,Star,PermDeviceInformationOutlined,CallOutlined,GrFavorite} from '@material-ui/icons';
import ReactStars from "react-rating-stars-component";
import { ArrowRight } from '@material-ui/icons';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallIcon from '../product/icon-call.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { useState,useEffect } from 'react';
import {ArrowForward} from "@material-ui/icons"
import { Link } from 'react-router-dom';
import { display } from '@mui/system';
import { useSelector,useDispatch } from 'react-redux';
import { getBusiness } from '../../redux/actions/businessActions';
import ShopDetails from '../Account/ShopDetails/ShopDetails' 

// Temporary importing dialog box
import UserReview from '../reviews/UserReviews';

import AddProductToWishList from '../Wishlist/addProductToWishlist';


 
const useStyles=makeStyles(theme=>(


    {
        root:{
            marginTop:150,
            display:'flex',
            
            justifyContent:"center",
            gap:"25px",
            [theme.breakpoints.down('sm')]: {
              
            },
           


        },

        forVerticalImageCarousal: {
            //backgroundColor:'red',
            width: 100,
            height:300,
           
        },

        firstbox:{
            //backgroundColor:'purple',
            width:"100%",
            

        },

        gridForMainBigImage:{
           // backgroundColor:'green',
            width:400,
            height: 400,
            margin:10,
            

        },
        boxForMainImage:{
            width:"100%",
            height: "100%",
            padding:10,
            //backgroundColor:'green'

            
        },
        sellerInfoHeading: {
            marginLeft:5,
            fontweight: 500,
            fontSize: 15,
            fontFamily: ['Monteserrat', 'sans-serif'],
            color: '#A1B3BA',
            display:"flex",
            
        },
        sellerInfoDescription: {
            fontweight: 'light',
            fontSize: 14,
            fontFamily: ['Monteserrat', 'sans-serif']
        },

        productAllInformation:{
           // backgroundColor:'pink',
            [theme.breakpoints.down('sm')]: {
                  paddingLeft:10, 
            },
        },
        contacts:{

            borderStyle:'groove',
            borderRadius:10,
            marginTop:10,
        }




    }
)

)
const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];

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

const Product=({data})=>{
        
    //const {productData} = data;
        const [sellerdata,setsellerdata]=useState(initialbusinessdata)
        const dispatch=useDispatch();

        useEffect(()=>{
           data.Products && dispatch(getBusiness(data.Products.product.seller)).then((item)=>console.log(setsellerdata(item.payload.business)));
        //    console.log("I am her in useEffect of Product Detail");
           
        //    data.Products?console.log(data.Products.product.seller):console.log("Not taking it");
        },[data.Products])


    // const [Data,setaData] = useState(false);

    //const check = false;

      
        const reduxState = useSelector((global)=>global.user.user);

        console.log("In the Product seaction");
        console.log("data in the Product Section - ",data);

        
        // if(data){
        //     const AllProductDetails = data.Products.product; 
        // }
        // else{

        // }

        // console.log("Individual fields - ",AllProductDetails.category);
        const theme = useTheme();
        const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
        const features_=[
            "Connects directly to Bluetooth",
            "Battery Indicator light",
            "Selection:2600/2000/1600/1200/800",
            "Computers running Windows",

        ];
        const flexContainer = {
            display: 'flex',
            flexDirection: mobileScreen ? 'row' : 'column',
            padding: 0,

            
          };

    //const { cardData } = this.props.location;
    // const { cardData1 } = this.props.location;
    // const [cardData, setcardData] = useState(cardData1);

    
        const classes=useStyles();



            // usestate for oprn review dialog
            const [openReview,setopenReview] = useState(false);

            const openReviewDailog = () =>{

                if (!localStorage.LocateItLocallyUser) {
                    return alert("Please sign in to post a review");
                }
                setopenReview(true);
            };


            // usestate for open add to wishlist dialog
            const [openWishlistDialog,setopenWishlistDialog] = useState(false);

            const openAddToWishlistDailog = () =>{
                setopenWishlistDialog(true);
            };

            
 
        return(
            <>
            {

            
         data.Products && sellerdata?
           
            <Grid container className={classes.root}>                    
                    <ImageList 
                        cols={ 1 }
                        rowHeight={200}
                    sx={{ width: mobileScreen ? '70%' : 200, height: 300 }}
                    
                    >
                        {data.Products.product.image.map((item) => (
                            <ImageListItem key={item}>
                            <img
                                src={item}
                                //srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt='Product Images'
                                    loading="lazy"
                                    width={'100%'}
                                    height={'100%'}
                            />
                            </ImageListItem>
                    ))}
                    </ImageList>
                    
                <Grid item className={classes.gridForMainBigImage} >
                    <Box className={classes.boxForMainImage} >
                        <img style={{width:"100%",height:"100%",borderRadius:5}} src={data.Products.product.image[1]} alt=""/>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={4} className={classes.productAllInformation}>
                    <Typography style={{fontSize:25,fontFamily:['Roboto','sans-serif'],}}>
                      { data.Products.product.category}
                  
                    </Typography>
                    <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            value={data.Products.product.rating}
                        />
                    <Typography style={{fontSize:25,fontFamily:['Monteserrat','sans-serif'],marginTop:10,fontWeight:400,}}>
                    { data.Products.product.name}
                  
                    </Typography>
                    <Typography style={{fontWeight:500,fontSize:35,marginTop:10,fontFamily:['Monteserrat','sans-serif']}}>
                    ₹{ data.Products.product.price}
                   
                    </Typography>
                    <Typography style={{marginTop:10,marginBottom:20,fontSize:20,fontWeight:400,fontFamily:['Open Sans','sans-serif']}}>
                   {data.Products.product.description}
                    </Typography>
                    
                    <Box>
                        {/* <List>
                            {
                                 features_.map(
                                    item =>(
                                        <ListItem key={item}>
                                                <ArrowRight/>
                                                {item}
                                        </ListItem>

    
                                    )
                                )

                            }
                           

                        </List> */}
                    </Box>
                    
                   
                    <Button style={{ backgroundColor: '#38495A', borderRadius: 50,marginRight:10 ,marginBottom: mobileScreen ? 10 : 0}} variant="contained" onClick={()=>openAddToWishlistDailog()} endIcon={<FavoriteBorderOutlinedIcon style={ {color:'white'}}/>}>
                         <Typography style={{fontweight:'300',fontSize:18,color:'white',fontFamily:['Monteserrat','sans-serif']}}>Add to Wishlist</Typography> 
                    </Button>

                    <Button style={{ backgroundColor: '#38495A', borderRadius: 50, }} variant="contained"  onClick={()=>openReviewDailog()} endIcon={<ReviewsIcon style={ {color:'white'}}/>}>
                         <Typography style={{fontweight:'bold',fontSize:18,color:'white',fontFamily:['Monteserrat','sans-serif']}}>ADD REVIEW</Typography> 
                    </Button>
                   
                    


                </Grid>

                <Grid item xs={12} lg={2} style={{margin: mobileScreen ? 7 : 0}} >
                    <Box style={{borderStyle:'groove',borderRadius:10}}>
                    <Box >
                    <Box style={{display:'flex',marginTop:10}}>
                        <PermDeviceInformationOutlined style={{color:'#A1B3BA'}}/>
                        
                        
                        <Typography className={classes.sellerInfoHeading}>
                                Seller Information <Link to={`/shopdetails/${sellerdata._id}`}><ArrowForward style={{marginLeft:"30px"}}/></Link> 
                        </Typography>
                    </Box>
                    <Box style={{marginLeft:10,marginTop:10,}}>
                        <Typography className={classes.sellerInfoDescription} >
                        {sellerdata.name}
                        </Typography>
                    </Box>
                    </Box>
                    <Divider/>
                    <Box >
                        <Box style={{display:'flex',marginTop:10}}>
                            <LocationOnOutlinedIcon style={{color:'#A1B3BA'}}/>
                            <Typography className={classes.sellerInfoHeading}>
                                Seller Address
                            </Typography>
                        </Box>
                        <Box style={{marginLeft:10,marginTop:10,}}>
                        <Typography className={classes.sellerInfoDescription}>
                            {sellerdata.address}
                        </Typography>
                        </Box>
                        

                    </Box>
                    <Divider/>
                    <Box >
                    <Box style={{display:'flex',marginTop:10}}>
                            <Star style={{color:'#A1B3BA'}}/>
                            <Typography className={classes.sellerInfoHeading}>
                                Seller Rating
                            </Typography>
                        </Box>
                        <Box  style={{marginLeft:10,marginTop:10,}}>
                            <ReactStars
                                count={5}
                                value={sellerdata.rating}
                                size={24}
                                activeColor="#ffd700"
                            />
                        </Box>
                        
                        


                    </Box>
                    </Box>

                
                
                    <Box className={classes.contacts}>
                        <Box style={{display:'flex',marginTop:10,}}>
                            <CallOutlined style={{color:'#A1B3BA'}}/>
                            <Typography className={classes.sellerInfoHeading}>
                                Contact Details
                            </Typography>
                        </Box>

                        <Box style={{ marginTop: 10, marginLeft: 10 }}>
                            {/* <Grid container style={{height:'20px',width:'20px'}}><img src={CallIcon} alt='call-icon' /></Grid> */}
                            
                            <Typography  className={classes.sellerInfoDescription}>
                                {sellerdata.contactNumber}
                            </Typography>
                        </Box>

                    </Box>
                    

                
                </Grid>
                <UserReview open={openReview} setopenReview={setopenReview}/>
                <AddProductToWishList openWishlistDialog={openWishlistDialog} setopenWishlistDialog={setopenWishlistDialog} productData={data.Products.product._id}/>
                
                
            </Grid>

             :

            <Grid container justifyContent="center">
                <Grid item lg={12}>
                    <Typography>Fetching The Data........</Typography>
                </Grid>
            </Grid>
            }
        </>

        );




}

export default Product;