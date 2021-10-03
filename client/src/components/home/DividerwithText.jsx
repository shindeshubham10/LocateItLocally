import React from "react";
import { makeStyles,Box, Typography ,Button} from "@material-ui/core";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { FiChevronRight } from 'react-icons/fi';

const useStyles = makeStyles(theme => ({
  container: {
    
    
    display:'flex',
    alignItems:'center',
    marginLeft: 100,
    marginRight: 100,
    
    [theme.breakpoints.down('sm')]: {
      //display:'flex',
      marginLeft: 10,
      marginRight: 10,
      //backgroundColor: 'green',
      //backgroundColor:'black',
      
    },

    [theme.breakpoints.up('sm')]: {
    //   display:'flex',
    // //alignItems:'center',
     marginLeft: 20,
     marginRight: 20,
    //backgroundColor: 'red',
    }
    

    
    
    
  },

  btn:{
    height: 50,
    borderRadius: 25,
    width: 250,
    backgroundColor:"#E5E5E5",
    ///backgroundColor:'black',
    fontFamily:'Montserrat',
    fontWeight:'bold',
    [theme.breakpoints.down('sm')]: {
      //minWidth: 20,
      // display: 'flex',
      // justifyItems: 'flex-end',
      width:10,
      borderRadius: 50,
      marginLeft:100,
      paddingLeft: 8,
      paddingRight: 8,
      height: 25,
      backgroundColor:'#E5E5E5',
      // "& .MuiButton-endIcon": {
      //   margin: 0
      // }
     
    },

    [theme.breakpoints.between('sm','md')]: {
      minWidth: 32,
      width:180,
      borderRadius: 25,
      marginLeft:2,
      paddingLeft: 8,
      paddingRight: 8,
      height: 25,
      // "& .MuiButton-endIcon": {
      //   margin: 0
      // }
     
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
    width: "100%",
     [theme.breakpoints.down('sm')]: {
       //display: 'none',
       width: "0%",
     },
    // [theme.breakpoints.between('sm','md')]: {
    //      borderBottom: "2px solid black",
    //        width: "100%",
    // },
    
     [theme.breakpoints.between('sm','md')]: {
       borderBottom: "2px solid grey",
         width: "100%",
       },
    //  [theme.breakpoints.down('sm')]: {
    //    display: "none"
    //  },
      

    
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
    fontWeight: 'bold',
    fontFamily:'Montserrat',
      [theme.breakpoints.down('sm')]: {
        
        borderRadius:10,
        paddingLeft: 10,
        paddingRight: 35,
        marginLeft :0,
        fontSize:15,
        fontWeight: 'bold',
        fontFamily:'Montserrat',
    },



  },

  buttonText: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },

    [theme.breakpoints.between('sm','md')]: {
      display: 'flex',
      fontSize:10,
    },
    

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
  
        <div className={classes.border}/> 
 
     {/* <div className={classes.border} /> */}
     {/* <Button variant="contained" endIcon={<FiChevronRight  />} className={classes.btn} >
        <span className={classes.buttonText}>Shop More</span>
     </Button> */}

    
    <Button variant="contained" endIcon={<FiChevronRight  />} className={classes.btn} >
        <span className={classes.buttonText}>Shop More</span>
     </Button>

  </div>
 );
};

export default DividerWithText;