import {Box,makeStyles,Divider,Chip, Button} from '@material-ui/core';
import { useState } from 'react';
import DividerWithText from './DividerwithText';



const useStyles=makeStyles(theme=>(
    {
        root:{

            
        }

    }
)
    
)

const Headings=(props)=>{

    
    const classes=useStyles()
    return(

    
           <Box>
               <DividerWithText className={classes.root} name={props.name}>
                
                </DividerWithText>
                

           </Box>
            
      
        
     
            
        

        

    );

}

export default Headings;