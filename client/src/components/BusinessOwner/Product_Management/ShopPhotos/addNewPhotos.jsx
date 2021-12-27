import React from 'react'

import  { makeStyles,Grid,TextField,OutlinedInput,Box,useTheme,useMediaQuery,InputBase,Card,CardContent, CardMedia,Button} from '@material-ui/core'

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { Person, Google, Facebook, Password, } from "@mui/icons-material";
import MenuItem from '@mui/material/MenuItem';
import { borderRadius } from '@mui/system';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
//import { newProduct } from '../../../../service/api';
import { useSelector, useDispatch } from 'react-redux';
import { addProductDetails } from '../../../../redux/actions/productActions';
import {updateBusiness} from '../../../../redux/actions/businessActions'

import { ProductCategories } from '../../../../constants/data';
import { IKContext,IKImage,IKUpload } from 'imagekitio-react';


// required parameter to fetch images
const urlEndpoint = 'https://ik.imagekit.io/ol5ujroevjc/';
const publicKey = 'public_uyc/OZswmVYeM7rvj19wIBHmFaM=';
const authenticationEndpoint = 'http://localhost:2000/imagekitAuth';

const useStyle = makeStyles(theme => (
    {
        mainHeading: {
            marginTop: 80,
            marginLeft: 40,
            marginBottom: 50,
            fontSize: '2.4rem',
            color: '#323232',
            fontFamily: ['Montserrat', 'sans-serif'],
            fontweight: 'bold',
            // '@media(minWidth:600px)': {
            //     fontSize:'1.5rem'
            // }
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.5rem'
            }
        },
        headingDescription: {
            fontFamily: ['Montserrat', 'sans-serif'],
            //fontSize: 20,
            color: '#A1B3BA',
            fontweight: 'light',
            fontSize: '1.0rem',
            
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.9rem'
            }
        },
        horizontalDivider: {
            width: '100%',
            marginTop: 20,
        },
        containerForTwoVerticalGrids: {
            marginLeft: 50,
            marginTop: 30,

           // marginRight: 50,
            //backgroundColor: 'green',
            
            [theme.breakpoints.down('sm')]: {
                marginLeft: 0,
                
            },
        },
        firstVerticalGrid: {
            //backgroundColor: 'red',
            //paddingLeft: 10,
            
            [theme.breakpoints.down('sm')]: {
                alignItems: 'center',
                paddingLeft: 0
            }

            
            
        },
        SecondVerticalGrid: {
            marginBottom: 40,
            marginLeft:50,
            //backgroundColor: 'red',
        },
        
        forFirstColumnTextFields: {
            width: '80%',
            height: '100%',
            marginBottom: 40,
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                height: '100%'
            },
            
        },
        textFieldHeading: {
            fontFamily: ['Noto Sans', 'sans-serif'],
            fontSize: 20,
            fontWeight: '500',
        },
        textFieldInstructions: {
            color: '#A1B3BA',
            fontFamily: ['Montserrat', 'sans-serif'],
        },
        realTextField: {
            backgroundColor: 'white',
            
        },

        boxForUploadImage: {
            //backgroundColor: 'green',
            height: '30vh',
            borderRadius: 5,
            border:'1px dashed black'
        },
        imageCardContent: {
            marginTop:40,
            textAlign: 'center',
            justifyContent: 'center',
            //alignItems:'center',
        },
        imageUploadInstructions: {
            fontFamily: ['Noto Sans', 'sans-serif'],
            fontSize: '1rem',
            fontWeight: '400',
            color:'#C4C4C4',

            [theme.breakpoints.down('sm')]: {
                fontSize:'0.8rem'
            }
        },
        chooseimageButton: {
            display:'none',
        },
        boxForButtons: {
          width:'100%',  
        },
        addProductButton: {
            width: '100%',
            height:'7vh',
            backgroundColor: '#38495A',
            
        },
        saveProductButton: {
            width: '100%',
            height: '7vh',
            border:'1px solid #38495A'
        },
        
    }
));




  
const ProductAvailabilty = [
    {
        value: 'In Stock',
        label:'In Stock',
    },
    {
        value: 'Out Of Stock',
        label:'Out of Stock'
    }
]

const intialValues={

    
    Shopimages:[],


}


const AddShopPhotos = () => {
    const dispatch=useDispatch()
    const classes = useStyle();
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const TabletScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const productImage = null;


    
    const reduxState=useSelector((global) => global.business.business);

     console.log({reduxState});

    
    const [productdata, setproductdata] = React.useState(reduxState.business);

    const handleInputChange = (event) => {
        setproductdata({ ...productdata, [event.target.name]: event.target.value });
        console.log(productdata);
      };
    

    const addShopPhotos =  () => {
        console.log(productdata);
        console.log("enter into function");
        // productdata.seller=reduxState.business._id;
        //dispatch(addProductDetails(productdata)).then((data)=>console.log(data))
        dispatch(updateBusiness(productdata)).then((data)=>console.log(data))
    //     console.log("dfndncjndjk");
    //     if (!response)
    //     {
    //       seterror(true);
         
    //       return;
    //     }
    //    return;
             
      
      };
    console.log(reduxState.business.Shopimages);
    /***** Code For Uploading Image (use at the time of doing backend) */
    const [image, setImage] = React.useState(reduxState.business.Shopimages); // initialized array state from our dataset
    const [imageInBox,setimageInBox] = React.useState(''); //for UI purpose only
    const [checkImageinBox,setcheckImageinBox] = React.useState(false); //for UI purpose only
    //const [ProductImage,setProductImage] = React.useState([]);

    const onProductImageUploadError = err => {
        console.log("Error", err);
      };
      
      const onProfileImageUploadSuccess = res => {
        console.log("Success", res);
        setImage([...image,res.url]);
        setimageInBox(res.url); //for UI purpose only
        setcheckImageinBox(true); // for UI purpose only
        console.log(image);
        setproductdata({ ...productdata, Shopimages:[...image,res.url] });
        console.log(productdata);
      
    
      };

   
        


    

    
   

    return (
        <div>  
            {/* <Grid container> */}
            <Typography className={classes.mainHeading} component="div" >Add New Products</Typography>
                        <Grid item  style={{textAlign:'start',marginTop:'10px',marginLeft:'20px'}}>
                        <Typography className={classes.headingDescription} component="div" >Add New photos to the gallery. This photos are visible to the customers in shop profile. Add clear images...</Typography>
                        </Grid>
                       
                <Divider className={classes.horizontalDivider} />

                            
                          
                            <IKContext 
                                publicKey={publicKey} 
                                urlEndpoint={urlEndpoint} 
                                authenticationEndpoint={authenticationEndpoint} 
                               
                            >
                                {/* <p>click to browse</p> */}
                            <div>
                            <IKUpload id='upload-image'
                                
                                fileName="productImage.png"
                                onError={onProductImageUploadError}
                                onSuccess={onProfileImageUploadSuccess}
                                folder={"/BusinessOwner/ShopImages"}
                                
                            />
                           <Button 
                           className='upload-image' 
                           htmlFor='upload-image'
                           
                            style={{color:'white',  backgroundColor: '#38495A', fontFamily: ['Montserrat', 'sans-serif'],fontSize: mobileScreen ? '0.7rem' : '1rem',marginTop:10}}          
                            ><label htmlFor='upload-image' style={{color:'white',fontSize:'1rem',display:'inline-block',cursor:'pointer'}}>Add New Photo</label></Button>
                    
                            </div>
                           
                            </IKContext>
                        
                        
            
            <Grid container spacing={2} direction='column' alignItems='center' className={classes.containerForTwoVerticalGrids} > {/** Main Grid for both vertical containers */}
                    
                    <Grid item lg={12} xs={12} md={12} > {/** Second Vertical grid */}
                    <Grid container direction='column' className={classes.SecondVerticalGrid}>
                        <Typography className={classes.textFieldHeading} component="div" >Upload Photos</Typography>
                        <Grid item  style={{textAlign:'start',marginBottom:'20px'}}>
                        <Typography className={classes.textFieldInstructions} component="div" >
                            1. Choose one Image at a time<br/>
                            2. Get Preview of selected image<br/>
                            3. Add photo to Gallery<br/>
                        </Typography>
                        </Grid>

                    {/** This grid is for 4 image boxes (upload images) */}    
                        <Grid container direction='column' spacing={2} style={{marginBottom:'30px'}}>
                            
                            {/** For 1st Image */}
                            <Grid item xs={6} lg={12} md={6}>
                                <Card className={classes.boxForUploadImage}>
                                    <CardContent className={classes.imageCardContent}>
                                        

                           { 
                          checkImageinBox ?
                        //    <img src={image[0]}/> 
                           <IKContext 
                            publicKey={publicKey} 
                            urlEndpoint={urlEndpoint} 
                            authenticationEndpoint={authenticationEndpoint}
                           >
                              <IKImage src={imageInBox}/> 
                           </IKContext>
                           :
                        //    <IKContext 
                        //         publicKey={publicKey} 
                        //         urlEndpoint={urlEndpoint} 
                        //         authenticationEndpoint={authenticationEndpoint} 
                               
                        //     >
                        //         {/* <p>click to browse</p> */}
                        //     <div>
                        //     <IKUpload id='upload-image'
                                
                        //         fileName="productImage.png"
                        //         onError={onProductImageUploadError}
                        //         onSuccess={onProfileImageUploadSuccess}
                        //         folder={"/Products"}
                                
                        //     />
                            <div>
                            <AddPhotoAlternateOutlinedIcon fontSize='large'  style={ {color:'#C4C4C4'}}/>  
                            <Typography className={classes.textFieldInstructions} component="div" >
                            Image Preview
                            </Typography>
                            </div>
                            
                            // <div className='label'>
                            //     <label htmlFor='upload-image' style={{color:'#064482',fontSize:'1rem',cursor:'pointer'}}>
                            //     click to browse
                            //     </label>
                            // </div>
                            // </div>
                           
                            // </IKContext>
                            
                            }
                           
                                    </CardContent>
                                    {/* <CardMedia
                                    component="img"
                                   // image= {image}
                                    alt="Product Image"
                                    /> */}
                                   
                                </Card>
                            </Grid>

                            {/* <Grid item xs={6} lg={6} md={6}><Card className={classes.boxForUploadImage}>Box 2</Card> </Grid> */}
                            
                         </Grid>  {/** Image  Grid close */}
                       
                        
                        {/** Buttons Container Start */}
                        <Grid container spacing={4} direction='column' alignItems='center'>
                            <Grid item xs={6} md={6} lg={6}>
                                <Box className={classes.boxForButtons}>
                                    <Button
                                        variant="contained"
                                        
                                        className={classes.addProductButton}
                                        style={{color:'white', fontFamily: ['Montserrat', 'sans-serif'],fontSize: mobileScreen ? '0.7rem' : '1rem'}}
                                        onClick={()=>addShopPhotos()}
                                       
                                    >Add Photo</Button>
                                </Box>
                            
                            </Grid> {/** 1st button */}
                        </Grid>   {/** Buttons Container End */}
                        
                    </Grid> {/** Second Vertical Grid Close */}

                </Grid> {/** main 2nd Item Grid Close */}
                  
                
            </Grid> 

            {/* </Grid> */}
        </div>
    )
}

export default AddShopPhotos
//alignItems={mobileScreen || TabletScreen ? 'center' : 'flex-start' }