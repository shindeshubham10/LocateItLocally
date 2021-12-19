import React from 'react';
import { useState ,useEffect} from 'react';
import "./display_user_profile_style.css";
import {Grid,Box,Button,Typography, Paper,Tab,useMediaQuery,useTheme,makeStyles,Tabs} from '@material-ui/core';
import {LocationOn,ContactMail,Edit, Phone,EditOutlined,AddCircleOutline} from "@material-ui/icons"
import {FactCheckOutlined} from '@mui/icons-material';
import profileimg from "./User_Profile_Photo.png"

import { useSelector ,useDispatch} from 'react-redux';

import {Link} from "react-router-dom";

import All_wishlist_items from '../../../Wishlist/all_wishlist_items/all_wishlist_items';

import AddNewWishList from '../../../Wishlist/addNewWishlist';
import { getWishlist } from '../../../../redux/actions/wishlistActions';
import { getProductDetails } from '../../../../redux/actions/productActions';

import { IKImage,IKContext,IKUpload} from 'imagekitio-react';


// required parameter to fetch images
const urlEndpoint = 'https://ik.imagekit.io/ol5ujroevjc/';
const publicKey = 'public_uyc/OZswmVYeM7rvj19wIBHmFaM=';
const authenticationEndpoint = 'http://localhost:2000/imagekitAuth';




const useStyle = makeStyles(theme => (
    {
        mainBoxFor_Tabs_Divider: {
            marginTop: 100,
            display: 'flex',
            padding: 10,
           // backgroundColor: 'pink',
            width: '100%',
            height: '100%',
            
            
             [theme.breakpoints.down('sm')]: {
                 display:'Grid',
            },
            [theme.breakpoints.between('sm','md')]: {
                display:'Grid',
            },
        },
        tablabels: {
            fontFamily: ['Noto Sans', 'sans-serif'],
            fontSize: '1rem',
            fontWeight: '500',
            backgroundColor: 'red',
            borderRadius: 5,
            
           
        },
        
        testBox: {
            //display: 'flex',
            //backgroundColor: 'green',
            width: 160,
            height: '100%',
            borderRight: '0.1em solid #A1B3BA',
            //paddingTop:60,
            
            //only for testing
            //marginTop: 40,
            marginLeft:2 ,
            marginRight: 30,
            [theme.breakpoints.down('sm')]: {
               display:'Grid',
                marginLeft: 10,
                marginRight:10,
                height: 100,
                width: '100%',
                borderBottom: '0.1em solid #A1B3BA',
                borderRight: 'none',
                
            }
        },
        firstpanel: {
            width: '100%',
            height: '100%',
            backgroundColor:'red',
        },
        verticalDivider: {
            height: 400,
            marginLeft:200,
        },

        mainHeading: {
           // marginTop:80,
            //marginLeft: 10,
            marginBottom: 20,
            fontSize:'1.7rem',
            color: '#323232',
            fontFamily: ['Montserrat', 'sans-serif'],
            fontWeight:'bold',
            // '@media(minWidth:600px)': {
            //     fontSize:'1.5rem'
            // }
            [theme.breakpoints.down('sm')]: {
                fontSize:'1.6rem'
            }
        },
        username:
        {
            fontSize:'1.8rem',
            color: '#323232',
            fontFamily: ['Montserrat', 'sans-serif'],
            fontWeight:'bold',
        },
        userinfo:
        {
            fontSize:'1.0rem',
            color: '#323232',
            fontFamily: ['Montserrat', 'sans-serif'],
        },

        mainprofilediv:
        {
            marginTop:"150px",
            marginLeft: "30px",
            marginRight: "30px",
            [theme.breakpoints.down('sm')]: {
                marginLeft:"0",
                marginRight:"0"
            }
        },
        headingDescription: {
            fontFamily: ['Montserrat', 'sans-serif'],
            //fontSize: 20,
            color: '#323232',
            fontweight: 'light',
            fontSize: '1.0rem',
            
            [theme.breakpoints.down('sm')]: {
                fontSize:'0.9rem'
            }
        },
        horizontalDivider: {
            width: '100%',
            marginTop:20,
        },


        default_tabStyle:{
            // color: 'black',
            // fontSize:11,
            // backgroundColor: 'blue',



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
            backgroundColor: '#D0D7DA',
            borderRadius: 5,
           },
           imageUpload:{
               display:'flex',
           }
    
    }
));



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







const Display_user_profile= () =>
{

    

    const [wishlist, setwishlist] = useState([]);
    const [ProfileImage,setProfileImage] = useState(false);
    const [ProfileImageUrl,setProfileImageUrl] = useState("");
   
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(getWishlist()).then((data) =>{
            console.log(data)
            setwishlist(data.payload.UserWishlist)
            console.log(wishlist);
        }   
        );
        
    }, []);


    const productDetails = useSelector(state=>state.getProductDetails);
   // const dispatch = useDispatch();
    
    console.log("Product ID in details page");
    //console.log(match.params.id);

    // useEffect(()=>{
    //     dispatch(getProductDetails(match.params.id));
    // },[dispatch])


    console.log("Product Data in display User page - ",productDetails); 



    const reduxState = useSelector((global)=>global.user.user);

    console.log({reduxState});

    //console.log("wishlist data name - ",{wishlistName});
    const classes = useStyle();
    //const [value, setValue] = React.useState(0);

    // usestate for open add new wishlist dialog
    const [openReview,setopenReview] = useState(false);

    const openReviewDailog = () =>{
        setopenReview(true);
    };


    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
    const [currentTab, setCurrentTab] = React.useState(0);

  const handleChangeTab = (event, newTab) => {
    setCurrentTab(newTab);
  };

    
  const onError = err => {
    console.log("Error", err);
  };
  
  const onSuccess = res => {
    console.log("Success", res);
    setProfileImage(true);
    setProfileImageUrl(res.filePath);

  };

    return(
        <div>

        <div className={classes.mainprofilediv}>
        {reduxState?.user?
        <Paper elevation={15}>
        <Grid container>
        <Grid item lg={12} xs={12}>
            <Grid container justifyContent="flex-end">
                <Link to="/user_profile" className="editicon"><EditOutlined/></Link>
            </Grid>
            </Grid>
        </Grid>

        <Grid container direction="row" className="profile_content">

            <Grid item lg={3} sm={3} xs={12} className="profile_picture">
            <Grid container justifyContent="center">
               
              
                            <IKContext
                            publicKey={publicKey} 
                            urlEndpoint={urlEndpoint} 
                            authenticationEndpoint={authenticationEndpoint} 
                            >
                            <IKImage  
                                src={`${reduxState.user.profilePicture}?tr=r-max,cm-extract`}
                               // src={ProfileImageUrl}
                                
                            /> 
                            </IKContext>
                
            </Grid>
            </Grid>

            <Grid item lg={9} sm={9} xs={12} className="user_info" >
            <Grid container>
                <Grid item lg={12} sm={12} xs={12}>
                    <Typography className={classes.username}>{reduxState.user.firstName}</Typography>
                    <br></br>
                    <br></br>
                </Grid>
                <Grid item lg={12} xs={12}>
                    <div style={{display:"flex"}}>
                        <ContactMail style={{marginRight:"20px"}}/>
                        <Typography className={classes.userinfo}>{reduxState.user.email}</Typography>
                    </div>
                </Grid>
                <Grid item lg={12} xs={12}>
                    <div style={{display:"flex"}}>
                        <Phone style={{marginRight:"20px"}}/>
                        <Typography className={classes.userinfo}>{reduxState.user.contactNumber}</Typography>
                    </div>
                </Grid>
                <Grid item lg={12} xs={12}>
                    <div style={{display:"flex"}}>
                        <LocationOn style={{marginRight:"20px"}}/>
                        <Typography className={classes.userinfo}>{reduxState.user.address}</Typography>
                    </div>
                </Grid>
            </Grid>
            </Grid>


        <AddNewWishList open={openReview} setopenReview={setopenReview} data={reduxState.user._id}/>  

        </Grid>
        </Paper>:<div>Waiting....</div>
    }






        <Grid container>
        <Box className={classes.mainBoxFor_Tabs_Divider}>
            
            <Box className={classes.testBox}>
            
            <Grid container direction="row">
                <Grid item xs={8} sm={10} lg={12}>
                <div style={{display:"flex"}}>
                    <Link to="/carts"><FactCheckOutlined fontSize="large"/></Link>
                    <Typography className={classes.mainHeading} component="div">Wishlist</Typography>
                
                </div>
                </Grid>
                <Grid item lg={12} sm={2} xs={4}>

                {/** Button to add new wishlist.. */}
                <div>
                    <Button style={{marginLeft:"40px"}} onClick={()=>openReviewDailog()}><AddCircleOutline fontSize="large"/></Button>
                </div>

                </Grid>
            </Grid>
            <Tabs
                orientation={mobileScreen ? 'horizontal' : 'vertical'}
                variant='scrollable'
                value={currentTab}
                onChange={handleChangeTab}
            >
                {/** take wishlist name from database */}
                  {
                      //console.log(wishlist)
                      wishlist.map((wname)=>(
                        <Tab key={wname.name} label={wname.name} />
                      ))
                  }  
               
                 {/* <Tab label={wishlist[0].name} /> */}
                {/* <Tab label="Wishlist 2"  className={ value===1 ? classes.active_tabStyle : classes.default_tabStyle  }/>
                <Tab label="Wishlist 3" className={ value===2 ? classes.active_tabStyle : classes.default_tabStyle  }/>  */}

                
            </Tabs>
    
            </Box>
            {/* <Grid container spacing={2}> */}
            {
                wishlist ? 
                wishlist.map((winame,index)=>(
                    console.log("In Tab Panel - ",winame.wishlistProducts),
                    <TabPanel key={winame.name} value={currentTab} index={index} >
                        <All_wishlist_items data={winame}/>                       
                    </TabPanel>
                )) : <div>wait....</div>
            }

            {/* <TabPanel value={value} index={0}>
                <All_wishlist_items />                       
            </TabPanel> */}
            
            {/* <TabPanel value={value} >
                       
            </TabPanel> */}
        {/* </Grid> */}
        </Box>
        
        

        </Grid>
        </div>
            
        {/* <AddNewWishList open={openReview} setopenReview={setopenReview} data={reduxState.user._id}/> */}

        </div>
    );
}

export default Display_user_profile;