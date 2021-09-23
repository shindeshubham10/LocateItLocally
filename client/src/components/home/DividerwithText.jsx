import React from "react";
import { makeStyles,Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    
    
    display:'flex',
    alignItems:'center',
    marginLeft: 300,
    marginRight: 300,
  },
  border: {
    borderBottom: "2px solid grey",
    width: "100%"
  },

  chip : {
      display :'flex',
      gap:5,
      backgroundColor : "#8FD1D1",
      borderRadius:25,
      paddingLeft: 10,
      paddingRight: 35,
      marginLeft : 19,
      fontSize:20,
      fontWeight :'bold',


  },
 
}));

const DividerWithText = (props) => {
 const classes = useStyles();
 return (
  <div className={classes.container}>
    
    <Box className={classes.chip}>
        <Box>
           {props.name.split(" ")[0]}
        </Box>
        
        <Box>
          {props.name.split(" ")[1]}
        </Box>
    </Box>
    <div className={classes.border} />
  </div>
 );
};

export default DividerWithText;