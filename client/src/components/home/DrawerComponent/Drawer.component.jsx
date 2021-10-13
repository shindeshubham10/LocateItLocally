
/**
 * 
    Things Remaining in drawer
    1. Change Background Colour of drawer
    2. Add item Icons if needed
    3. Add links to all those list items

 */


import React from 'react';
import { useState } from 'react';
import { Divider, InputBase, Paper,IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { ListItemButton, ListItemText, List, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import { FiChevronRight } from 'react-icons/fi';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';


const useStyle = makeStyles(theme => (
    {
        drawerConfig: {
            marginLeft: 90,
            // Disable For Large and Medium Device
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
            
            
        },
         mainDrawer: {
                 width: 240,
                 flexShrink: 0
         },
         drawerPaper: {
             width: '90%',
             backgroundColor: 'blue' 
           },
            
       
        // BOx containing starting search box and cancel icon
        firstDrawerBox: {
            height: '20%',
            width: '100%',
            backgroundColor: 'transparent',
            marginBottom:30,
            
        },

        // Search Box
        searchRoot: {
            borderRadius: 5,
            height:43,
            marginTop: 40,
            marginLeft: 10,
            marginRight: 10,
            border:'solid 1px #C4C4C4'
        },
        inputProduct: {
            marginLeft: 10,
            marginTop:4,
        },
        iconButton: {
            marginLeft:50,
        },
    }
));

const GetDrawer = () => {
    const classes = useStyle();
    const [openDrawer, setopenDrawer] = useState (false);
    
    return (
        <div className={classes.drawerConfig}>
            <IconButton
                edge='end'
                onClick={() => setopenDrawer(!openDrawer)}
            >
            <MenuIcon/>
            </IconButton>
         
            {/** Drawer Code Starts */}
            <SwipeableDrawer
                className={classes.mainDrawer}
                classes={{paper: classes.drawerPaper}}
                anchor='right'
                open={openDrawer}
                onClose={() => setopenDrawer(false)}
                onOpen={() => { }} 
                elevation={3}
            >
                {/** Box Containing Search Box for location and other things */}
                <Box className={classes.firstDrawerBox}>

                {/** Cancel Icon */}
                <IconButton className={classes.cancelButton} aria-label="cancel" onClick={()=> setopenDrawer(false)}>
                        <CancelIcon className={classes.cancelicon}/>
                </IconButton>

                {/** Input For Product Search */}      
                <Paper component="form" className={classes.searchRoot} elevation={3} variant="outlined">
                     
                    <InputBase
                        className={classes.inputProduct}
                        placeholder="i'm searching for"
                        inputProps={{ 'aria-label': 'im searching for' }}
                    />
                    
                    {/** Search Icon */}
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon className={classes.searchicon}/>
                    </IconButton>
                        
                </Paper>
  
                </Box>
                <Divider />
                
                {/** Options List */}
                <List>

                {/*** First Element */} 
                <ListItem
                  secondaryAction={
                    <IconButton>
                      <FiChevronRight/>
                    </IconButton>
                  }
                  
                  disablePadding>
                  <ListItemButton>
                  <ListItemText
                    
                    primary='Home' 
                    primaryTypographyProps={
                      {
                        fontFamily :['Oswald', 'sans-serif'],
                        fontSize: 20,
                        fontWeight:500,
                      }
                     
                    }
                          />
                
                </ListItemButton>
               
                </ListItem>
                    
                    <Divider />
                    
                {/*** Second Element */}    
                <ListItem
                  secondaryAction={
                    <IconButton>
                      <FiChevronRight/>
                    </IconButton>
                  }
                  
                  disablePadding>
                  <ListItemButton>
                  <ListItemText
                    
                    primary='Blogs' 
                    primaryTypographyProps={
                      {
                        fontFamily :['Oswald', 'sans-serif'],
                        fontSize: 20,
                        fontWeight:500,
                      }
                     
                    }
                          />
                
                </ListItemButton>
               
                </ListItem>
                    
                    <Divider />

                {/*** Third Element */}     
                <ListItem
                  secondaryAction={
                    <IconButton>
                      <FiChevronRight/>
                    </IconButton>
                  }
                  
                  disablePadding>
                  <ListItemButton>
                  <ListItemText
                    
                    primary='Contact' 
                    primaryTypographyProps={
                      {
                        fontFamily :['Oswald', 'sans-serif'],
                        fontSize: 20,
                        fontWeight:500,
                      }
                     
                    }
                          />
                
                </ListItemButton>
               
                </ListItem>
                    
                    <Divider />
                    
                <ListItem
                  secondaryAction={
                    <IconButton>
                      <FiChevronRight/>
                    </IconButton>
                  }
                  
                  disablePadding>
                  <ListItemButton>
                  <ListItemText
                    
                    primary='About US' 
                    primaryTypographyProps={
                      {
                        fontFamily :['Oswald', 'sans-serif'],
                        fontSize: 20,
                        fontWeight:500,
                      }
                     
                    }
                    />
                
                </ListItemButton>
                </ListItem>

                    <Divider />
                
                {/*** Fourth Element */}
                <ListItem
                  secondaryAction={
                    <IconButton>
                      <FiChevronRight/>
                    </IconButton>
                  }
                  
                  disablePadding>
                  <ListItemButton>
                  <ListItemText
                    
                    primary='Account' 
                    primaryTypographyProps={
                      {
                        fontFamily :['Oswald', 'sans-serif'],
                        fontSize: 20,
                        fontWeight:500,
                      }
                     
                    }
                    />
                
                </ListItemButton>
                </ListItem>
                </List>
            </SwipeableDrawer>
            {/** Drawer Code Ends */}
    </div>
        
    )
}

export default GetDrawer;
