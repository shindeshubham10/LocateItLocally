
import React from "react";

import { Dialog,DialogTitle,DialogContent, Typography, Grid,Box ,TextField,Button,useMediaQuery,useTheme} from "@material-ui/core";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState,useEffect } from "react";
import {useParams} from "react-router-dom"
import ReactStars from "react-rating-stars-component";

import {useDispatch} from "react-redux"

import { postReviews } from "../../redux/actions/reviewActions";


const UserReview = ({open,setopenReview}) => {


    const [reviewData, setReviewData] = useState({
       
        reviewText:"",
        isProductReview: true,
        isBusinessReview: false,
        rating: 0,
      });

    const { id } = useParams();
    const dispatch = useDispatch();
    const handlechange = (e) =>
        setReviewData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleRating = (rating) =>
        setReviewData((prev) => ({ ...prev, rating }));


    const handleOnClose = () => {
        setopenReview(false);
    };

    const submit = () => {
        dispatch(
          postReviews({
            ...reviewData,
            product: id,
          })
        ).then((data)=>console.log(data))
        setReviewData({
          
          reviewText: "",
          isProductReview: true,
          isBusinessReview: false,
          rating: 0,
        });
        handleOnClose();
    };
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const useStyle = makeStyles(theme=>(
       {
        mainDialog:{
                height:"50vh",
                width:'90vh',
                backgroundColor:'#F7F8F9',
               [theme.breakpoints.down('sm')]:{
                height:"70vh",
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
           forDescription:{
            //backgroundColor:'pink',
            width:500,
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

    const classes = useStyle();
return(

    
    <>
    
    <Dialog open={open} onClose={handleOnClose}  >
         
        <DialogContent className={classes.mainDialog} >
         {/** Main Container For all Content Start*/}
         <Grid container alignItems='center' direction='column' className={classes.maincontainer}>
         
         {/**Heading Here */}
         <Grid item xs={12} md={7} lg={6} className={classes.heading}> 
            <Typography style={{fontSize:30,fontFamily:['Monteserrat','sans-serif'],fontWeight:400,}}>Product Review</Typography> 
         </Grid>

        {/** TextField Box Start Here */}
         <Grid item lg={12} md={12} xs={12}> 
         <Box className={classes.forDescription}> 
        <TextField className={classes.realTextField}
            id="outlined-multiline-static"
            //label="Multiline"
            fullWidth
            multiline
            rows={8}
            defaultValue="Enter Review Here...."
            variant='outlined'
            name="reviewText"
            onChange={(e)=>handlechange(e)}
        />
         </Box>  
         </Grid>
          {/** TextField Box End Here */}

        <Grid item xs={12} md={7} lg={6}> 
            <Typography style={{fontSize:15,fontFamily:['Monteserrat','sans-serif'],fontWeight:400,marginTop:5}}>Rate Product</Typography> 
         </Grid>
          <ReactStars
            count={5}
            size={mobileScreen ? 30 : 40}
            activeColor="#ffd700"
            name="rating"
            defaultValue={reviewData.rating}
            onChange={(e)=>handleRating(e)}
        />


        {/** Item For Buttons Start here */}
        <Grid item lg={12} md={12} xs={12}>
        <Grid container direction='row' spacing={2} className={classes.containerForButtons} >
        <Grid item lg={6} md={12} xs={12}> 
         <Button
            variant="contained"
            className={classes.addProductButton}
            style={{color:'white', fontFamily: ['Montserrat', 'sans-serif'],fontSize: mobileScreen ? '0.7rem' : '1rem'}}
            onClick={submit}
        >Submit</Button>
         </Grid>
        
        <Grid item lg={6} md={12} xs={12}> 
        <Button
            variant="contained"
            className={classes.addProductButton}
            style={{color:'white', fontFamily: ['Montserrat', 'sans-serif'],fontSize: mobileScreen ? '0.7rem' : '1rem'}}
            onClick={()=>handleOnClose()}
        >Cancel</Button>
        </Grid>

        
        </Grid>

        </Grid> {/** Item For Buttons End here */}
       
        
     </Grid> {/** Main Container For all Content End*/}
         </DialogContent> 
          
            
 </Dialog>
   
    </>
)

};

export default UserReview;
