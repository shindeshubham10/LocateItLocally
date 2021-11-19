
import {Grid,Box,makeStyles, Typography,Rating,List,Button,Divider,ListItem,useMediaQuery,useTheme } from '@material-ui/core'
import {FavoriteOutlined,LocationDisabled,Star,PermDeviceInformationOutlined,CallOutlined,GrFavorite} from '@material-ui/icons';
import ReactStars from "react-rating-stars-component";
import { ArrowRight } from '@material-ui/icons';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallIcon from '../product/icon-call.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { useState } from 'react';
import {ArrowForward} from "@material-ui/icons"
import { Link } from 'react-router-dom';
import { display } from '@mui/system';

 
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

const Product=(props)=>{
        
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
        return(
           
            <Grid container className={classes.root}>                    
                    <ImageList 
                        cols={ 1 }
                        rowHeight={200}
                    sx={{ width: mobileScreen ? '70%' : 200, height: 300 }}
                    
                    >
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                    loading="lazy"
                                    width={'100%'}
                                    height={'100%'}
                            />
                            </ImageListItem>
                    ))}
                    </ImageList>
                    
                <Grid item className={classes.gridForMainBigImage} >
                    <Box className={classes.boxForMainImage} >
                        <img style={{width:"100%",height:"100%"}} src="https://cdn.shopify.com/s/files/1/0067/6429/8297/products/sound2_79x79.jpg?v=1569164954" alt=""/>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={4} className={classes.productAllInformation}>
                    <Typography style={{fontSize:25,fontFamily:['Roboto','sans-serif'],}}>
                      Sound
                    </Typography>
                    <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                        />
                    <Typography style={{fontSize:25,fontFamily:['Monteserrat','sans-serif'],marginTop:10,fontWeight:400,}}>
                        Codeless Trackman Wheel 2
                    </Typography>
                    <Typography style={{fontWeight:500,fontSize:35,marginTop:10,fontFamily:['Monteserrat','sans-serif']}}>
                    ₹1,225
                    </Typography>
                    <Typography style={{marginTop:10,fontSize:20,fontWeight:400,fontFamily:['Open Sans','sans-serif']}}>
                    Uses a dictionary of over combined with a handful of model sentence structures, to generate lorem Ipsum which looks reasonable.My name is  anthony gp
                    </Typography>
                    
                    <Box>
                        <List>
                            {
                                 features_.map(
                                    item =>(
                                        <ListItem key={item}>
                                                {/* <ListItemIcon>
                                                    <ArrowRight/>
                                                </ListItemIcon>
                                                <ListItemText style={{fontSize:15,fontWeight:400,fontFamily:['Roboto','sans-serif']}}>
                                                    {item}
                                                </ListItemText> */}
                                                <ArrowRight/>
                                                {item}
                                        </ListItem>

    
                                    )
                                )

                            }
                           

                        </List>
                    </Box>

                    <Button style={{ backgroundColor: '#38495A', borderRadius: 50, }} variant="contained" endIcon={<FavoriteBorderOutlinedIcon style={ {color:'white'}}/>}>
                         <Typography style={{fontweight:'bold',fontSize:18,color:'white',fontFamily:['Monteserrat','sans-serif']}}> ADD TO FAVOURITES</Typography> 
                    </Button>


                </Grid>

                <Grid item xs={12} lg={2} style={{margin: mobileScreen ? 7 : 0}} >
                    <Box style={{borderStyle:'groove',borderRadius:10}}>
                    <Box >
                    <Box style={{display:'flex',marginTop:10}}>
                        <PermDeviceInformationOutlined style={{color:'#A1B3BA'}}/>
                        
                        
                        <Typography className={classes.sellerInfoHeading}>
                            Seller Information  <Link to="/shopdetails"> <ArrowForward style={{marginLeft:"30px"}}/> </Link>
                        </Typography>
                    </Box>
                    <Box style={{marginLeft:10,marginTop:10,}}>
                        <Typography className={classes.sellerInfoDescription} >
                            Ratnadeep Socielty Civil lines solapur 
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
                            Ratnadeep Socielty Civil lines solapur 
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
                                9309818227
                            </Typography>
                        </Box>

                    </Box>

                
                </Grid>
                
            </Grid>

        

        );




}

export default Product;