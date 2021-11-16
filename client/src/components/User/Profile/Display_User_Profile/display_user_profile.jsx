import React from 'react';
import "./display_user_profile_style.css";
import {Grid,Box,Button,Typography, Paper,Tab,useMediaQuery,useTheme,makeStyles,Tabs} from '@material-ui/core';
import {LocationOn,ContactMail,Edit, Phone,EditOutlined,AddCircleOutline} from "@material-ui/icons"
import {FactCheckOutlined} from '@mui/icons-material';
import profileimg from "./User_Profile_Photo.png"

import {Link} from "react-router-dom";

import All_wishlist_items from '../../../Wishlist/all_wishlist_items/all_wishlist_items';
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
    const classes = useStyle();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
  

    return(
        <div>

        <div className={classes.mainprofilediv}>
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
                <label>
                    <div >
                        <img className="photo_upload" src={profileimg}/>
                    </div>
                    
                    <input type="file" /> 
                </label>


            </Grid>
            </Grid>

            <Grid item lg={9} sm={9} xs={12} className="user_info" >
            <Grid container>
                <Grid item lg={12} sm={12} xs={12}>
                    <Typography className={classes.username}>Shubham Rajendra Shinde</Typography>
                    <br></br>
                    <br></br>
                </Grid>
                <Grid item lg={12} xs={12}>
                    <div style={{display:"flex"}}>
                        <ContactMail style={{marginRight:"20px"}}/>
                        <Typography className={classes.userinfo}>shindeshubham1100@gmail.com</Typography>
                    </div>
                </Grid>
                <Grid item lg={12} xs={12}>
                    <div style={{display:"flex"}}>
                        <Phone style={{marginRight:"20px"}}/>
                        <Typography className={classes.userinfo}>8329471122</Typography>
                    </div>
                </Grid>
                <Grid item lg={12} xs={12}>
                    <div style={{display:"flex"}}>
                        <LocationOn style={{marginRight:"20px"}}/>
                        <Typography className={classes.userinfo}>Pune 411048, India</Typography>
                    </div>
                </Grid>
            </Grid>
            </Grid>


            

        </Grid>
        </Paper>






        <Grid container>
        <Box className={classes.mainBoxFor_Tabs_Divider}>
            
            <Box className={classes.testBox}>
            
            <Grid container direction="row">
                <Grid item xs={8} sm={10} lg={12}>
                <div style={{display:"flex"}}>
                    <FactCheckOutlined fontSize="large"/>
                    <Typography className={classes.mainHeading} component="div">Wishlist</Typography>
                
                </div>
                </Grid>
                <Grid item lg={12} sm={2} xs={4}>
                <div>
                    <Button style={{marginLeft:"40px"}}><AddCircleOutline fontSize="large"/></Button>
                </div>
                </Grid>
            </Grid>
            <Tabs
                orientation={mobileScreen ? 'horizontal' : 'vertical'}
                variant='scrollable'
                value={value}
                onChange={handleChange}
            >

                <Tab label="Wishlist 1" className={ value===0 ? classes.active_tabStyle : classes.default_tabStyle  } />
                <Tab label="Wishlist 2"  className={ value===1 ? classes.active_tabStyle : classes.default_tabStyle  }/>
                <Tab label="Wishlist 3" className={ value===2 ? classes.active_tabStyle : classes.default_tabStyle  }/>

                
            </Tabs>
    
            </Box>
            {/* <Grid container spacing={2}> */}
            <TabPanel value={value} index={0}>
                <All_wishlist_items/>
                        
            </TabPanel>
            
            <TabPanel value={value} index={1}>
                       
            </TabPanel>
        {/* </Grid> */}
        </Box>
        
        

        </Grid>
        </div>
            
            

        </div>
    );
}

export default Display_user_profile;