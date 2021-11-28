
import React from "react";

import { Dialog,DialogTitle,DialogContent, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const UserReview = ({open,setopenReview}) => {

    const handleOnClose = () => {
        setopenReview(false);
    };


    const useStyle = makeStyles(theme=>(
       {
        mainDialog:{
                height:"100%",
                width:'100%',
           },
       }
    ));

    const classes = useStyle();
return(

    
    <>
    
    <Dialog open={open} onClose={handleOnClose}  >
         <Grid container justifyContent="center">
            <Grid item lg={12} md={12} xs={12}> 
            <DialogContent className={classes.mainDialog}>
                <Typography>Product Review</Typography>
            </DialogContent>    
             </Grid>
        </Grid> 
        
    </Dialog>
    </>
)

};

export default UserReview;
