
import React from 'react';
import {makeStyles, Box, Button } from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PageviewIcon from '@material-ui/icons/Pageview';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';


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
    

        
   }
}
));


const HomeSearchBar=()=>{

    
  const classes = useStyles();

  return (
    <>
    {/** Main Box Containing all Elements */}
      <Box className={classes.main}>
        
        {/** Button = All categories */}
        <Button variant="outlined" style={{textTransform: 'none'}} className={classes.All_category_btn} startIcon={<ArrowDropDownIcon/>}>
            All Categories
        </Button>
    


       {/** Input For Both Product Search and Location */}
        <Paper component="form" className={classes.root} elevation={3} variant="outlined">
        
        {/** Input For Product Search */}  
        <InputBase
            className={classes.inputProduct}
            placeholder="i'm searching for"
            inputProps={{ 'aria-label': 'im searching for' }}
        
        />
        
        <Divider className={classes.divider} orientation="vertical" />

        {/** Input For Location Search */}
        <InputBase
        
            className={classes.inputLocation}
            placeholder="Location"
            inputProps={{ 'aria-label': 'Location' }}
            
        />
          <ArrowDropDownIcon className={classes.arrowDropDown} />
          
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            {/** PageView Icon = Search Icon */}
            <PageviewIcon className={classes.searchicon}/>
        </IconButton>
        
        </Paper>

    </Box>
    </>
    
  );
}
export default HomeSearchBar;