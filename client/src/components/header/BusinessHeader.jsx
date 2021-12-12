
import React from 'react';
import { useState } from 'react';
import {AppBar,Toolbar,makeStyles,Box, Button,Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Popover from '@mui/material/Popover';
import AccountMenu from '../home/PopOverModals/AccountMenu';
import GetDrawer from '../home/DrawerComponent/Drawer.component';
import logo from "../Logo/LocateItLocally Logo.png"

import { useSelector,useDispatch } from 'react-redux';

import { BusinesssignOut } from '../../redux/actions/businessauthActions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

 
const useStyle = makeStyles(theme => (

  {

    // This is the root NavBar For LG
    header: {
      background: '#F7F8F9',
      height: '90px',
            
            
            
    },
       
    // Css For Logo
    logoLg: {
      height: '150px',
      margin: 0,
           
    },

    // CSS For Options ( Home , About)
    containerOptions: {
            
      // For Large Screen
      display: 'flex',
      marginLeft: 350,
      justifyContent: 'space-between',
      gap: 20,
            
      // For Mobile Screen - Disable
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
             
      // For medium Screen - Enable 
      [theme.breakpoints.between('sm', 'md')]: {
        display: 'flex',
        marginLeft: 20,
      },
    },
       

    txt: {
      color: 'black',
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
      fontSize: '17px',
      textDecoration: 'none',


    },

      
    // Icons - Enable For large and Medium Screen
    endContainerIcons: {
      display: 'flex',
      marginLeft: 400,
      gap: 15,
            
      // Disable For Mobile Sceen
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
            
      // Enable For Medium Screen
      [theme.breakpoints.between('sm', 'md')]: {
        display: 'flex',
        marginLeft: 50,
      },
    },

        
  }

)
    
);



const BusinessHeader = (props) => {


  const reduxState=useSelector((global) => global.business.business);

  console.log({reduxState});

  
   

  const classes = useStyle();

  // UseState
  const [anchorEl, setAnchorEl] = useState(null);
  

const dispatch = useDispatch();

 // bsuiness signout
  const signOuthandler=()=>{

    dispatch(BusinesssignOut())
  }

  
  // This are the functions for handling Hover Events
  //For Open
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
    
  };
  
  // For Close
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };



  

  
  const open = Boolean(anchorEl);
  

    return (
        <>
        <AppBar className={classes.header}>
            <Toolbar >
                
                <img src={logo} alt="icon" className={classes.logoLg} />
                
                <Box className={classes.containerOptions}>

                    <Link to='/' className={classes.txt}>
                        Home
                    </Link>
                    
                    <Link to='/businessdashboard' className={classes.txt}>
                        DashBoard
                    </Link>

                    <Link to='/' className={classes.txt}>
                        Profile
                    </Link>
                    
                    <Link to='/contact' className={classes.txt}>
                        Jobs
                    </Link>

                    
                </Box>

          <Box className={classes.endContainerIcons}>
            
                {/** Write extra properties for the icon - onClick(),onMouseOver() */}
                

                  {/** This is the PopOver Element which will be shown after hovering on button/icon */}

                  {
                    reduxState?.business?.firstName ?(

                      // <>
                      //     <p>
                      //         {reduxState.business.firstName}
                      //         <button onClick={signOuthandler}>Sign Out</button>
                      //     </p>
                      // </>
                      <Box style={{display:'flex',direction:'row'}}>
                          {/* <Box style={{display:'flex'}}> */}
                              <Typography  style={{color:'#3498db', fontFamily: ['Montserrat', 'sans-serif'],fontSize:'1rem',marginTop:6,marginRight:4}}> {reduxState.business.firstName}</Typography>
                              {/* {reduxState.user.firstName} */}
                              {/* <button onClick={signOuthandler}>Sign Out</button> */}
                              <Button 
                                  size="medium"  
                                  //className={classes.addProductButton} 
                                  style={{color:'#e74c3c', fontFamily: ['Montserrat', 'sans-serif'],fontSize: '1rem'}}
                                  onClick={()=>signOuthandler()}
                            >LogOut</Button>

                            <Link to='/owner_profile'>
                              <AccountCircleIcon  sx={{color:'black',marginLeft:3}} fontSize='large'/>
                            </Link>
                             
                           
                          {/* </Box> */}
                      </Box>




                    ):(

                      <>

                   <Link to='/login'>
                          <PersonOutlineIcon
                            aria-owns={open ? 'show-Account-menu' : undefined}
                            aria-haspopup="true"
                            className={classes.endicons}
                            onClick={handlePopoverOpen}
                            onMouseOver={handlePopoverOpen}
                          
                      />
                 </Link>
                            
                      
                      </>

                      
                    )
                  }

                         <Popover
                              id="show-Account-menu"
                            
                              open={open}
                              anchorEl={anchorEl}
                              onClose={handlePopoverClose}
                              //onMouseOut={handlePopoverClose}
                              anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                              }}
                              disableRestoreFocus
                            >
                              <AccountMenu  /> {/** This item will be displayed after hovering */}
                            </Popover>
                  

                   
                   

                   
                   
                    
                 


            </Box>
            
            {/** This is the Drawer Component  */}
                <GetDrawer />
  
            </Toolbar>
        </AppBar>

        
        </>
    );

};


export default BusinessHeader;
