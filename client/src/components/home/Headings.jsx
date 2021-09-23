import {Box,makeStyles,Divider,Chip} from '@material-ui/core';
import { useState } from 'react';
import DividerWithText from './DividerwithText';



const useStyles=makeStyles(
    {
       

    }
)

const Headings=(props)=>{

    
    const classes=useStyles()
    return(

    
           
            <DividerWithText className={classes.root} name={props.name}>
                
            </DividerWithText>
      
        
     
            
        

        

    );

}

export default Headings;