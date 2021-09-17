
import {AppBar,Toolbar,makeStyles,Typography,Box, Button} from '@material-ui/core'
import SearchBar from 'material-ui-search-bar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PageviewIcon from '@material-ui/icons/Pageview';


import React from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({

  main:{

    display: 'flex',
    marginTop: 150,
    justifyContent: 'center',
    gap : 50,
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems:'center',
    width:600,
   
    justifyContent: "center",
    borderColor:'#A1B3BA',
    
    borderTopLeftRadius:30,
    borderBottomLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    
    

  },
 
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    

  },
  iconButton: {
    padding: 10,
    
   
  },
  divider: {
    height: 28,
    margin: 4,
    marginLeft:150,
  },
  searchicon:{
      color:'black',
       
    },

   btn:{

    borderTopLeftRadius:30,
    borderBottomLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    width:180,
    

        
   }
}
));
const HomeSearchBar=()=>{

    
    const classes = useStyles();

  return (
    <Box className={classes.main}>
        <Button variant="outlined" style={{textTransform: 'none'}} className={classes.btn} startIcon={<ArrowDropDownIcon/>}>
            All Categories
        </Button>
    


      
        <Paper component="form" className={classes.root} elevation={3} variant="outlined">
        
        <InputBase
            className={classes.input}
            placeholder="i'm searching for"
            inputProps={{ 'aria-label': 'im searching for' }}
        
        />
        
        <Divider className={classes.divider} orientation="vertical" />

        <InputBase
        
            className={classes.input}
            placeholder="Location"
            inputProps={{ 'aria-label': 'Location' }}
            
        />
        <ArrowDropDownIcon/>
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <PageviewIcon className={classes.searchicon}/>
        </IconButton>
        
        </Paper>

    </Box>
    
    
  );
}
export default HomeSearchBar;