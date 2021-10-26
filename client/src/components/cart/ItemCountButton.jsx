import React, { useState } from "react";
import { ButtonGroup, Button, makeStyles,Box,Chip, Typography,Grid,Card,IconButton,Paper} from "@material-ui/core";
import {ArrowDropUp,ArrowDropDown} from "@material-ui/icons";

const useStyle = makeStyles({
    component: {
        //marginTop: 30,
        //width:"100%",
        //height: "100%",
        //   width:100,
        //   height:50, 
        //   borderTopLeftRadius:25,
        // borderBottomLeftRadius:25, 

        
        alignItems:'center',
        flexDirection:'column',
        backgroundColor:'red',



    },

    second:{
        height:50,
        borderStyle:'groove',
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
        
        
        
        
    },

    button:{
        height:25,
        width:50,
        padding:0,
        border:'none',

    },
    
    main:{
        
        borderRadius:25,
        borderStyle:'groove',
        borderWeight:1,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
       
        height:50,
        width:100,
        
        
        
        
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

        <Box className={classes.main} >
            {/* <ButtonGroup className={classes.component} >
            
            <Button  ><Typography style={{fontWeight: 800 }} >{counter} </Typography></Button>
           <ButtonGroup orientation="vertical" className={classes.second} >
               <Button className={classes.button} onClick={() => handleIncrement()} >
                   <ArrowDropUp/>
               </Button>
               <Button className={classes.button} onClick={() => handleDecrement()} disabled={counter == 0}>
                   <ArrowDropDown/>
               </Button>

           </ButtonGroup>  */}
                        <Box>
                            <Typography style={{fontWeight: 800 }} >{counter} </Typography>
                        </Box>

                 
                  <Box style={{height:50}}>
                      <Box style={{height:25}}>
                        <IconButton style={{padding:0}} onClick={() => handleIncrement()}>
                            <ArrowDropUp/>
                        </IconButton>

                      </Box>
                    <Box style={{height:25}}>
                        <IconButton style={{padding:0,marginBottom:15}} onClick={() => handleDecrement()} >
                            <ArrowDropDown/>
                        </IconButton>

                    </Box>
                    


                  </Box>
                  
           
           
           
          {/* </ButtonGroup> */}

        </Box>
        
    );
}

export default GroupedButton;