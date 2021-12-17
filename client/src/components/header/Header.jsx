
import React from 'react';
import { useState } from 'react';
import {AppBar,Toolbar,makeStyles,Box, Button, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Popover from '@mui/material/Popover';
import AccountMenu from '../home/PopOverModals/AccountMenu';
import GetDrawer from '../home/DrawerComponent/Drawer.component';
import logo from "../Logo/LocateItLocally Logo.png"
import {MapOutlined} from "@material-ui/icons"
//import gravatar from "gravatar";
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { UsersignOut } from '../../redux/actions/userauthActions';
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
      marginLeft: 300,
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

const RenderHeader = () => {

  const dispatch=useDispatch();
  const reduxState=useSelector((global) => global.user.user);

  const signOuthandler=()=>{

    dispatch(UsersignOut())
  }

  console.log({reduxState});

  
   

  const classes = useStyle();

  // UseState
  const [anchorEl, setAnchorEl] = useState(null);
  
  // usestate for oprn review dialog
  const [openReview,setopenReview] = useState(false);

  const openReviewDailog = () =>{
    setopenReview(true);
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
                
                <Link to="/"><img src={logo} alt="icon" className={classes.logoLg} /></Link>
                
                <Box className={classes.containerOptions}>

                    <Link to='/' className={classes.txt}>
                        Home
                    </Link>
                                        
                    <Link to='/contact' className={classes.txt}>
                        Contact
                    </Link>
                    <Link to='/about' className={classes.txt}>
                        About Us
                    </Link>
                   

                    
                </Box>

          <Box className={classes.endContainerIcons}>
            
                {/** Write extra properties for the icon - onClick(),onMouseOver() */}
                

                  {/** This is the PopOver Element which will be shown after hovering on button/icon */}

                  {
                    reduxState?.user?.firstName ?(

                      <Box style={{display:'flex',direction:'row'}}>
                          {/* <Box style={{display:'flex'}}> */}
                              <Typography  style={{color:'#3498db', fontFamily: ['Montserrat', 'sans-serif'],fontSize:'1rem',marginTop:6,marginRight:4}}>{reduxState.user.firstName}</Typography>
                              {/* {reduxState.user.firstName} */}
                              {/* <button onClick={signOuthandler}>Sign Out</button> */}
                              <Button 
                                  size="medium"  
                                  //className={classes.addProductButton} 
                                  style={{color:'#e74c3c', fontFamily: ['Montserrat', 'sans-serif'],fontSize: '1rem'}}
                                  onClick={()=>signOuthandler()}
                            >LogOut</Button>

                            <Link to='/user_profile'>
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

                 
                 {/* <Link to='/display_user_profile'><FavoriteBorderIcon className={classes.endicons} /></Link> */}

                 
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
                  

                   
                    {/* <Link to='/display_user_profile'><FavoriteBorderIcon className={classes.endicons} /></Link>

                    <Link to='/cart'><MapOutlined className={classes.endicons} /></Link>
                 
                  <ShoppingCartOutlinedIcon className={classes.endicons} onClick={()=>openReviewDailog()} />
                    */}
                    
                 


            </Box>
            
            {/** This is the Drawer Component  */}
                <GetDrawer />
  
            </Toolbar>
        </AppBar>
        

        </>
    );
};

const Header = (props) => {

  useEffect(()=>{
      <RenderHeader/>
  },[])
  return(
    <>
     <RenderHeader/>
    </>
  )

  // const dispatch=useDispatch();
  // const reduxState=useSelector((global) => global.user.user);

  // const signOuthandler=()=>{

  //   dispatch(UsersignOut())
  // }

  // console.log({reduxState});

  
   

  // const classes = useStyle();

  // // UseState
  // const [anchorEl, setAnchorEl] = useState(null);
  
  // // usestate for oprn review dialog
  // const [openReview,setopenReview] = useState(false);

  // const openReviewDailog = () =>{
  //   setopenReview(true);
  // }
 
  
  
  // // This are the functions for handling Hover Events
  // //For Open
  // const handlePopoverOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
    
  // };
  
  // // For Close
  // const handlePopoverClose = () => {
  //   setAnchorEl(null);
  // };



  

  
  // const open = Boolean(anchorEl);
  

  //   return (
  //       <>
  //       <AppBar className={classes.header}>
  //           <Toolbar >
                
  //               <Link to="/"><img src={logo} alt="icon" className={classes.logoLg} /></Link>
                
  //               <Box className={classes.containerOptions}>

  //                   <Link to='/' className={classes.txt}>
  //                       Home
  //                   </Link>
                                        
  //                   <Link to='/contact' className={classes.txt}>
  //                       Contact
  //                   </Link>
  //                   <Link to='/about' className={classes.txt}>
  //                       About Us
  //                   </Link>
                   

                    
  //               </Box>

  //         <Box className={classes.endContainerIcons}>
            
  //               {/** Write extra properties for the icon - onClick(),onMouseOver() */}
                

  //                 {/** This is the PopOver Element which will be shown after hovering on button/icon */}

  //                 {
  //                   reduxState?.user?.firstName ?(

  //                     <Box style={{display:'flex',direction:'row'}}>
  //                         {/* <Box style={{display:'flex'}}> */}
  //                             <Typography  style={{color:'#3498db', fontFamily: ['Montserrat', 'sans-serif'],fontSize:'1rem',marginTop:6,marginRight:4}}>{reduxState.user.firstName}</Typography>
  //                             {/* {reduxState.user.firstName} */}
  //                             {/* <button onClick={signOuthandler}>Sign Out</button> */}
  //                             <Button 
  //                                 size="medium"  
  //                                 //className={classes.addProductButton} 
  //                                 style={{color:'#e74c3c', fontFamily: ['Montserrat', 'sans-serif'],fontSize: '1rem'}}
  //                                 onClick={()=>signOuthandler()}
  //                           >LogOut</Button>

  //                           <Link to='/user_profile'>
  //                           	<AccountCircleIcon  sx={{color:'black',marginLeft:3}} fontSize='large'/>
  //                           </Link>  
                           
                           
  //                         {/* </Box> */}
  //                     </Box>




  //                   ):(

  //                     <>

  //                  <Link to='/login'>
  //                         <PersonOutlineIcon
  //                           aria-owns={open ? 'show-Account-menu' : undefined}
  //                           aria-haspopup="true"
  //                           className={classes.endicons}
  //                           onClick={handlePopoverOpen}
  //                           onMouseOver={handlePopoverOpen}
                          
  //                     />
  //                </Link>

                 
  //                {/* <Link to='/display_user_profile'><FavoriteBorderIcon className={classes.endicons} /></Link> */}

                 
  //                   </>

                      
  //                   )
  //                 }

  //                        <Popover
  //                             id="show-Account-menu"
                            
  //                             open={open}
  //                             anchorEl={anchorEl}
  //                             onClose={handlePopoverClose}
  //                             //onMouseOut={handlePopoverClose}
  //                             anchorOrigin={{
  //                               vertical: 'bottom',
  //                               horizontal: 'left',
  //                             }}
  //                             disableRestoreFocus
  //                           >
  //                             <AccountMenu  /> {/** This item will be displayed after hovering */}
  //                           </Popover>
                  

                   
  //                   {/* <Link to='/display_user_profile'><FavoriteBorderIcon className={classes.endicons} /></Link>

  //                   <Link to='/cart'><MapOutlined className={classes.endicons} /></Link>
                 
  //                 <ShoppingCartOutlinedIcon className={classes.endicons} onClick={()=>openReviewDailog()} />
  //                   */}
                    
                 


  //           </Box>
            
  //           {/** This is the Drawer Component  */}
  //               <GetDrawer />
  
  //           </Toolbar>
  //       </AppBar>
        

  //       </>
  //   );

};


export default Header;
