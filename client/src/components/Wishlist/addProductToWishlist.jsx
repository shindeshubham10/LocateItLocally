



import React ,{useState,useEffect}from "react";

import { Dialog,DialogTitle,DialogContent, Typography, Grid,Box ,TextField,Button,useMediaQuery,useTheme,Input,Divider} from "@material-ui/core";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ReactStars from "react-rating-stars-component";
import { addNewWishlist } from "../../redux/actions/wishlistActions";
import { useSelector, useDispatch } from 'react-redux';
import { ListItemButton,ListItemText,List,ListItem} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { getWishlist,addProductInWishlist } from '../../redux/actions/wishlistActions';
import { useParams } from "react-router";
import SuccessDialog from "../alertDialogs/SuccessDialog";
import {FactCheckOutlined} from '@mui/icons-material';


const WishlistInitialValue = {
  
    
    name:"",
    createdBy:{},
   

}




















const AddProductToWishList = ({openWishlistDialog,setopenWishlistDialog,data}) => {

    //console.log("User Id from display profile page",data);
    const [openwishlistSuccess,setopenwishlistSuccess] = useState(false);


    const handleOnClose = () => {
        setopenWishlistDialog(false);
        setopenwishlistSuccess(true);
    };
    // const dispatch=useDispatch()
    // const [wishlistname, setwishlistname] = React.useState(WishlistInitialValue);
    const [error,seterror]=React.useState(false);
    
    const [wishlist, setwishlist] = useState([]);

    

    
   
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(getWishlist()).then((data) =>{
            console.log(data)
            setwishlist(data.payload.UserWishlist)
            console.log(wishlist);
        }   
        );
        
    }, []);

    const {id} = useParams(); 
    console.log("Taking ID from params product - ",id);


    const onListItemTap = (wishlistID) => {
        dispatch(addProductInWishlist(id,wishlistID)).then((data)=>{
            console.log("In add product dispatch function")
            console.log(data);

        });
        handleOnClose();
    };


    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const useStyle = makeStyles(theme=>(
       {
        mainDialog:{
                height:"60vh",
                width:'70vh',
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

    const demoWishlistName = [
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",

    ]

return(

    
    <>
   
    
    <Dialog open={openWishlistDialog}  >
         
        <DialogContent className={classes.mainDialog} >
         {/** Main Container For all Content Start*/}
         <Grid container alignItems='center' direction='column' className={classes.maincontainer}>
         
         {/**Heading Here */}
         <Grid item xs={12} md={7} lg={6} className={classes.heading}> 
            <Typography style={{fontSize:20,fontFamily:['Monteserrat','sans-serif'],fontWeight:400,}}>Choose Wishlist</Typography> 
            <Divider style={{marginTop:4,marginBottom:4}}/>
         </Grid>
        
        {/** WishList Start Here */}
         <Grid item lg={12} md={12} xs={12}> 
         <Box className={classes.forWishlistname}> 
       
        <List>
             {
                wishlist ? 
                wishlist.map((wishlist)=>(
                    <>
                    <ListItem
                      secondaryAction={
                        <IconButton>
                          <FactCheckOutlined/>
                        </IconButton>
                      }
                      disablePadding>
                
                      <ListItemButton onClick={()=>onListItemTap(wishlist._id)}>
                      <ListItemText
                       
                        primary={wishlist.name} 
                        primaryTypographyProps={
                          {
                            fontFamily :['Oswald', 'sans-serif'],
                            fontSize:20,
                          }
                         
                        }
                      />
                    </ListItemButton>
                     
               
                 </ListItem>
                 <Divider style={{marginTop:4,marginBottom:4}}/> 

                 </>
                 
                )) : <div>Fetching Wishlists</div>
             }

        
        </List>

         </Box>  
         </Grid>
          {/** WishList End Here */}


        {/** Item For Buttons Start here */}
        <Grid item lg={12} md={12} xs={12}>
        <Grid container direction='row' spacing={2} className={classes.containerForButtons} >        
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
 <SuccessDialog OpenState={openwishlistSuccess} setOpenState={setopenwishlistSuccess}  />
    
    </>
)

};




export default AddProductToWishList;
