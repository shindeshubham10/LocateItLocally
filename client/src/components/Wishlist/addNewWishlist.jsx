

import React from "react";

import { Dialog,DialogTitle,DialogContent, Typography, Grid,Box ,TextField,Button,useMediaQuery,useTheme,Input} from "@material-ui/core";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ReactStars from "react-rating-stars-component";
import { addNewWishlist } from "../../redux/actions/wishlistActions";
import { useSelector, useDispatch } from 'react-redux';

const WishlistInitialValue = {
  
    
    name:"",
    createdBy:{},
   

}

const AddNewWishList = ({open,setopenReview,data}) => {

    console.log("User Id from display profile page",data);
    
    const handleOnClose = () => {
        setopenReview(false);
    };
    const dispatch=useDispatch()
    const [wishlistname, setwishlistname] = React.useState(WishlistInitialValue);
    const [error,seterror]=React.useState(false);
    
    const handleChange = (event) => {
        setwishlistname({ ...wishlistname, [event.target.name]: event.target.value });
        console.log(wishlistname);
      };

      wishlistname.createdBy=data;
      const addWishlist = async () => {
        console.log("enter into wishlist function");
        let response = dispatch(addNewWishlist(wishlistname))
        console.log(response);
        console.log("Below newwishlist dispatch");
        if (!response)
        {
          seterror(true);
         
          return;
        }
       return;
             
      
      };


    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const useStyle = makeStyles(theme=>(
       {
        mainDialog:{
                height:"30vh",
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
    
    <Dialog open={open} onClose={handleOnClose}  >
         
        <DialogContent className={classes.mainDialog} >
         {/** Main Container For all Content Start*/}
         <Grid container alignItems='center' direction='column' className={classes.maincontainer}>
         
         {/**Heading Here */}
         <Grid item xs={12} md={7} lg={6} className={classes.heading}> 
            <Typography style={{fontSize:20,fontFamily:['Monteserrat','sans-serif'],fontWeight:400,}}>Create New Wishlist</Typography> 
         </Grid>

        {/** TextField Box Start Here */}
         <Grid item lg={12} md={12} xs={12}> 
         <Box className={classes.forWishlistname}> 
         <TextField
             required
            fullWidth
             //type="st"
            placeholder="Wishlist Name"
            variant="outlined"
            //value={reduxState.user.twitter}
            onChange={handleChange}
            name="name"
            />
        
         </Box>  
         </Grid>
          {/** TextField Box End Here */}


        {/** Item For Buttons Start here */}
        <Grid item lg={12} md={12} xs={12}>
        <Grid container direction='row' spacing={2} className={classes.containerForButtons} >
        <Grid item lg={6} md={12} xs={12}> 
         <Button 
         size="medium"  
         //className={classes.addProductButton} 
         style={{color:'#3498db', fontFamily: ['Montserrat', 'sans-serif'],fontSize: mobileScreen ? '0.7rem' : '1.2rem'}}
         onClick={()=>addWishlist()}
         >OK</Button>
         </Grid>
        
        <Grid item lg={6} md={12} xs={12}> 
        <Button 
         size="medium"  
         //className={classes.addProductButton} 
         style={{color:'#e74c3c', fontFamily: ['Montserrat', 'sans-serif'],fontSize: mobileScreen ? '0.7rem' : '1.2rem'}}
         onClick={()=>handleOnClose()}
         >CANCEL</Button>

        </Grid>

        
        </Grid>

        </Grid> {/** Item For Buttons End here */}
       
        
     </Grid> {/** Main Container For all Content End*/}
         </DialogContent> 
          
            
 </Dialog>
   
    </>
)

};

export default AddNewWishList;
