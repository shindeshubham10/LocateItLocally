
import {Grid,Box,makeStyles, Typography,Rating,List,Button, ListItemIcon,Divider, ListItemText, CardHeader,Card, CardContent, ListItem,useMediaQuery,useTheme} from '@material-ui/core'
import {FavoriteOutlined,LocationDisabled,Star,PermDeviceInformationOutlined,CallOutlined,GrFavorite} from '@material-ui/icons';
import ReactStars from "react-rating-stars-component";
import { ArrowRight } from '@material-ui/icons';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallIcon from '../product/icon-call.png';

 
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
            width:100,
           
        },

        firstbox:{
            backgroundColor:'purple',
            width:"100%",
            

        },

        second:{
            backgroundColor:'green',
            width:400,
            height:400,
            

        },
        secondbox:{
            width:"100%",
            height:"100%",
            
        },
        sellerInfoHeading: {
            marginLeft:5,
            fontweight: 500,
            fontSize: 15,
            fontFamily: ['Monteserrat', 'sans-serif'],
            color: '#A1B3BA'
        },
        sellerInfoDescription: {
            fontweight: 'light',
            fontSize: 14,
            fontFamily: ['Monteserrat', 'sans-serif']
        },

        productAllInformation:{
            backgroundColor:'pink',
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


const Product=()=>{
        
        const theme = useTheme();
        const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
        const features_=[
            "Connects directly to Bluetooth",
            "Battery Indicator light",
            "Selection:2600/2000/1600/1200/800",
            "Computers running Windows",

        ];



        const classes=useStyles();
        return(

            <Grid container className={classes.root}>
                <Grid item className={classes.forVerticalImageCarousal}>
                    <Box className={classes.firstbox}>
                        <img style={{width:"100%",height:"auto"}}src="https://cdn.shopify.com/s/files/1/0067/6429/8297/products/sound2_79x79.jpg?v=1569164954" alt=""/>
                    </Box>
                </Grid>
                <Grid item className={classes.second} >

                    <Box className={classes.secondbox} >
                        <img style={{width:"100%",height:"100%"}} src="https://cdn.shopify.com/s/files/1/0067/6429/8297/products/sound2_79x79.jpg?v=1569164954" alt=""/>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={4} className={classes.productAllInformation}>
                    <Typography style={{fontSize:25,fontFamily:['Roboto','sans-serif'],}}>
                        Audio Speakers
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
                                                <ListItemIcon>
                                                    <ArrowRight/>
                                                </ListItemIcon>
                                                <ListItemText style={{fontSize:15,fontWeight:400,fontFamily:['Roboto','sans-serif']}}>
                                                    {item}
                                                </ListItemText>
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
                            Seller Information
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