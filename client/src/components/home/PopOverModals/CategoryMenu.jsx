
/**

  Things Remaining in this popover element
    1. This popover is only visible in LG screen not in medium screen (so we have to fix that)
    2. Add dividers between all list items
    3. add links to all those list items

    Same for Account Options Pop-over

 */




import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles,Grid} from '@material-ui/core';
import { ListItemButton,ListItemText,List,ListItem} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { FiChevronRight } from 'react-icons/fi';

// Import card and realated 
import Card from "@material-ui/core/Card";

//import { CategoryOptions ,AccountOptions} from '../../constants/data';
import { CategoryOptions } from '../../../constants/data';




import Box from '@material-ui/core/Box';
import { fontFamily, fontSize } from '@mui/system';
 
 
// const theme = createMuiTheme();
  const useStyles = makeStyles((theme) => ({

    mainCard: {
      display: 'block',
      
         height: 475,
          width: 286,
          borderRadius: 15,

          //  [theme.breakpoints.down('md')]: {
          //      height: 400,
          //      width:250,
          //  },

          // we have to remove this margin (only for testing purpose)
          //marginTop: 200,
          //marginLeft:50,
        
    
    },
    
      divider: {
          width:'100%',
      }

  }));

 
const CategoryMenu = () => {
    const classes =  useStyles();
    return (
       
        <>
            <Card className={classes.mainCard}>
                
          <List>
            
            {
              
              CategoryOptions.map(option => (
                   
                <Link to='/allproducts'>
                
                <ListItem
                  
                  secondaryAction={
                    <IconButton>
                      <FiChevronRight/>
                    </IconButton>
                  }
                  
                  disablePadding>
                  <ListItemButton>
                  <ListItemText
                    
                    primary={option} 
                    primaryTypographyProps={
                      {
                        fontFamily :['Oswald', 'sans-serif'],
                        fontSize:20,
                      }
                     
                    }
                  />
                </ListItemButton>
                </ListItem>
                </Link>
               
              
                  ))
                 
                }
                </List>
            </Card> 




        </>
    )
}

export default CategoryMenu;
