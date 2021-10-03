import {Box,makeStyles,Divider,Chip, Button} from '@material-ui/core';
import { useState } from 'react';
import DividerWithText from './DividerwithText';



const useStyles=makeStyles(theme=>(
    {
        root:{

           
        },
        boxWithHeadings: {
            marginTop: 30,
           //marginBottom:10, 
        }

    }
)
    
)

const Headings=(props)=>{

    
    const classes=useStyles()
    return(

    
           <Box className={classes.boxWithHeadings}>
               <DividerWithText className={classes.root} name={props.name}>
                
                </DividerWithText>
                

           </Box>
            
      
        
     
            
        

        

    );

}

export default Headings;