import React, { useState } from "react";
import { ButtonGroup, Button, makeStyles,Box,Chip, Typography,Grid,Card} from "@material-ui/core";
import {ArrowDropUp,ArrowDropDown} from "@material-ui/icons";

const useStyle = makeStyles({
    component: {
        //marginTop: 30,
        //width:"100%",
        //height: "100%",
          width:100,
          height:50,  
        


    },

    second:{
        height:50,
        
    },

    button:{
        height:25,
        width:50,
        padding:0,
        border:'none',

    },
    
    main:{
        
        borderRadius:25,
        
        
    },
    
})

const GroupedButton = () => {
    const classes = useStyle();
    const [ counter, setCounter ] = useState(1);

    const handleIncrement = () => {
        setCounter(counter => counter + 1 );
    };

    const handleDecrement = () => {
        setCounter(counter => counter - 1 );
    };

    return (

        <Card className={classes.main} >
            <ButtonGroup className={classes.component} >
            
            <Button disabled><Typography style={{fontWeight:'bold'}} >{counter} </Typography></Button>
           <ButtonGroup orientation="vertical" className={classes.second} >
               <Button className={classes.button} onClick={() => handleIncrement()} >
                   <ArrowDropUp/>
               </Button>
               <Button className={classes.button} onClick={() => handleDecrement()} disabled={counter == 0}>
                   <ArrowDropDown/>
               </Button>
           </ButtonGroup> 
           
           
          </ButtonGroup>

        </Card>
        
    );
}

export default GroupedButton;