
import React from 'react';
import { Dialog,DialogTitle,DialogContent, Typography, Grid,Box ,TextField,Button,useMediaQuery,useTheme,Input} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Redirect } from "react-router";
import { Link } from 'react-router-dom';



 const LoginSuccessDialog = ({successDialog,setsuccessDialog}) => {
    
       //console.log("success state : ", stateText);
    
    const handleOnClose = () => {
        //<Link to= "/"/>
        setsuccessDialog(false);
    };
       
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const useStyle = makeStyles(theme=>(
       {
        mainDialog:{
                height:"20vh",
                width:'50vh',
                backgroundColor:'#F7F8F9',
               [theme.breakpoints.down('sm')]:{
                height:"40vh",
                width:'60vh',
               }
           },
           maincontainer:{
            backgroundColor:'#F7F8F9',
           },
           
           heading:{
            //backgroundColor:'purple',
            marginBottom:20,
            marginTop:10,
           },
           forWishlistname:{
            //backgroundColor:'pink',
            width:250,
            height:'100%',
            marginLeft:0,

            [theme.breakpoints.down('sm')]:{
                width:'100%',
            }
           },
           addProductButton: {
            width: '90%',
            height:'7vh',
            backgroundColor: '#38495A',
            
        },
        containerForButtons:{
            marginTop:5,
            //marginLeft:20,

        }
       }
    ));

    const styleinput = {
        color:'#e74c3c', 
        fontFamily: ['Montserrat', 'sans-serif'],
        fontWeight:'bold'
    }

    const classes = useStyle();

   

return(

    
    <>
   
    
    <Dialog open={successDialog}>
         
        <DialogContent className={classes.mainDialog} >
         {/** Main Container For all Content Start*/}
         <Grid container alignItems='center' direction='column' className={classes.maincontainer}>
         
         {/**Heading Here */}
         <Grid item xs={12} md={7} lg={6} className={classes.heading}> 
            <Typography style={{fontSize:15,fontFamily:['Monteserrat','sans-serif'],fontWeight:400,}}>Login Successful</Typography> 
         </Grid>

        {/** Item For Buttons Start here */}
        <Grid item lg={12} md={12} xs={12}>
        <Grid container direction='row' spacing={2} className={classes.containerForButtons} >
        <Grid item lg={6} md={12} xs={12}> 
        <Link to='/'>
        <Button 
         size="medium"  
         //className={classes.addProductButton} 
         style={{color:'#3498db', fontFamily: ['Montserrat', 'sans-serif'],fontSize: mobileScreen ? '0.7rem' : '1.2rem'}}
         onClick={()=>handleOnClose()}
         >OK</Button>
        </Link>
         
       
         </Grid>    
        </Grid>

        </Grid> {/** Item For Buttons End here */}   
     </Grid> {/** Main Container For all Content End*/}
         </DialogContent> 
                 
 </Dialog>
   
    
    </>
)

};

export default LoginSuccessDialog;