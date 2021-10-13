import React from "react";
import { makeStyles,Box, Typography ,Button} from "@material-ui/core";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(theme => ({
  container: {
    
    
    display:'flex',
    alignItems:'center',
    marginLeft: 300,
    marginRight: 250,
    [theme.breakpoints.down("sm")]: {

      marginLeft: 300,
      marginRight: 250,
      
      
    }
    
    
    
  },

  btn:{
    height: 50,
    borderRadius: 25,
    width: 250,
    backgroundColor:"#E5E5E5",
    fontFamily:'Montserrat',
    fontWeight:'bold',
    [theme.breakpoints.down("sm")]: {
      minWidth: 32,
      paddingLeft: 8,
      paddingRight: 8,
      height:25,
      "& .MuiButton-endIcon": {
        margin: 0
      }
    }
    

    
    
  },

  txt:{

    display:'none',
    [theme.breakpoints.down("sm")]: {
      display:"block",
      marginRight:150,
      fontWeight:'bold',
      fontSize:20,
    },
  },

  border: {
    borderBottom: "2px solid grey",
    width:"100%",
    backgroundColor:'black',
    [theme.breakpoints.down("sm")]: {
      

    },
    
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
      [theme.breakpoints.down("sm")]: {
        
        borderRadius:0,
        paddingLeft: 10,
        paddingRight: 35,
        marginLeft : 0,
        fontSize:10,
        fontWeight :'bold',
    },



  },

  buttonText: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
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

    
    <Button variant="contained" endIcon={<ArrowRightIcon />} className={classes.btn} >
        <span className={classes.buttonText}>Shop More</span>
     </Button>

  </div>
 );
};

export default DividerWithText;