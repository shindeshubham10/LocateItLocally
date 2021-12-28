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
            //marginLeft: 50,
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

    name:"",
    category:"",
    description:"",
    brand:"",
    price:0,
    countInStock:0,
    availability:"",
    image:[],
    rating:0,
    


}


const Newproduct = () => {
    const dispatch=useDispatch()
    const classes = useStyle();
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const TabletScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const productImage = null;
    // This is used for Category Selection of the form on the page
    const [category, setcategory] = React.useState(''); 

    const [error,seterror]=React.useState(false);
    const reduxState=useSelector((global) => global.business.business);

     console.log({reduxState});

    const handleCategory = (event) => {
        setcategory(event.target.value);
        handleInputChange(event);
    };

    // For Product Availability
    const [availability, setAvailability] = React.useState('In Stock');
    const handleProductAvailability = (event) => {
        setAvailability(event.target.value);
        handleInputChange(event);
    }

    const [productdata, setproductdata] = React.useState(intialValues);

    const handleInputChange = (event) => {
        setproductdata({ ...productdata, [event.target.name]: event.target.value });
        console.log(productdata);
      };
    

    const addproduct =  () => {
        console.log(productdata);
        console.log("enter into function");
        // productdata.seller=reduxState.business._id;
        dispatch(addProductDetails(productdata)).then((data)=>console.log(data))
        
    //     console.log("dfndncjndjk");
    //     if (!response)
    //     {
    //       seterror(true);
         
    //       return;
    //     }
    //    return;
             
      
      };

    /***** Code For Uploading Image (use at the time of doing backend) */
    const [image, setImage] = React.useState([]);

    //const [ProductImage,setProductImage] = React.useState([]);

    const onProductImageUploadError = err => {
        console.log("Error", err);
      };
      
      const onProfileImageUploadSuccess = res => {
        console.log("Success", res);
        setImage([...image,res.url]);
        console.log(image);
        setproductdata({ ...productdata, image:[...image,res.url] });
        console.log(productdata);
        //setProfileImage(true);
        //setProfileImageUrl(res.url);
       /// setuserState({...userState,profilePicture:res.url});
        //reduxState.user.profilePicture=res.url;
    
      };

    // const Imageset = (event) => {
    //     // const reader = new FileReader();
    //     // console.log(reader.result);
    //     // reader.onload = () => {
    //     //     if(reader.readyState===2){
    //     //         setImage(reader.result);
    //     //         console.log(reader.result);
    //     //     } 
    //     // }

    //     // reader.readAsDataURL(event.target.files[0])

    //     // console.log(event.target.files[0]);
    //     // // console.log(image);
    //     // // console.log(URL.createObjectURL(event.target.files[0]));
    //     // // setImage([...image,URL.createObjectURL(event.target.files[0])])
    //     setImage([...image,URL.createObjectURL(event.target.files[0])]);
    //     setproductdata({ ...productdata, image:[...image,image] });
    //     console.log(image);
    //     console.log(productdata);
        


    // }

    
   

    return (
        <div>  
            {/* <Grid container> */}
            <Typography className={classes.mainHeading} component="div" >Add New Products</Typography>
                        <Grid item  style={{textAlign:'start',marginTop:'10px',marginLeft:'20px'}}>
                        <Typography className={classes.headingDescription} component="div" >New Products can be added here. When adding products here, do not ignore to fill all the required fields completely and follow up product adding rules</Typography>
                        </Grid>
                       
                <Divider className={classes.horizontalDivider} />
                
            <Grid container spacing={2} direction='row' justifyContent='center' className={classes.containerForTwoVerticalGrids} > {/** Main Grid for both vertical containers */}
                    
                  
                    <Grid item xs={12} md={12} lg={6}  > {/** First Vertical grid */}
                        
                    <Grid container direction='column' className={classes.firstVerticalGrid} >

                        {/*** Product Name */}
                        <Box className={classes.forFirstColumnTextFields}>
                        <Typography className={classes.textFieldHeading} component="div" >Product Name</Typography> 
                        <TextField className={classes.realTextField}
                  fullWidth
                  required
                  variant="outlined"
                  color="primary"
                  type="email"
                  //label="Email"
                  name="name"
                  size='medium'
                  placeholder="Eg : Round Neck T-Shirt"
                  onChange={(e)=>handleInputChange(e)}
                 
                     />
                    </Box>
                        
                        {/** Product Name Instructions */}
                        <Grid item  style={{textAlign:'start',marginBottom:'20px'}}>
                        <Typography className={classes.textFieldInstructions} component="div" >Do not exceed 20 characters when entering the product name</Typography>
                        </Grid>


                     {/*** Category */}
                     <Box className={classes.forFirstColumnTextFields}>
                        <Typography className={classes.textFieldHeading} component="div" >Category</Typography> 
                        <TextField className={classes.realTextField}
                            fullWidth
                            required
                            select
                            variant="outlined"
                            name="category"
                            color="primary"
                            value={category}
                            onChange={handleCategory}
                           
                            size='medium'
                            placeholder="test@test.com"
                 
                        >
                                
                                {ProductCategories.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                     </TextField>
                        </Box>

                      {/*** for brand and quantity */}  
                        <Grid container direction='row' columnSpacing={{ xs: 1 }}>
                            {/** For Brand */}
                            <Grid items xs={6} md={7} lg={7}>
                            <Box className={classes.forFirstColumnTextFields}>
                        <Typography className={classes.textFieldHeading} component="div" >Brand</Typography> 
                        <TextField className={classes.realTextField}
                            id="outlined-multiline-static"
                            //label="Multiline"
                            fullWidth
                            placeholder='Eg : Cocacola'
                            variant='outlined'
                            name="brand"
                            onChange={(e)=>handleInputChange(e)}
                            />
                                
                                {/* {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))} */}
                     
                        </Box>
                            </Grid>

                            {/** For Quantity */}
                            <Grid items xs={4} md={4} lg={4}>
                            <Box className={classes.forFirstColumnTextFields}>
                        <Typography className={classes.textFieldHeading} component="div" >Quantity</Typography> 
                        <TextField className={classes.realTextField}
                                        type="number"
                                        variant="outlined"
                                        name="countInStock"
                            InputLabelProps={{
                                shrink: true,

                            }}
                            />
                        </Box>
                            </Grid>
                        </Grid>
                        {/** close */}



                        {/** For Description */}
                        <Box className={classes.forFirstColumnTextFields}>
                        <Typography className={classes.textFieldHeading} component="div" >Description</Typography>
                        {/** Description Instructions */}
                        <Grid item  style={{textAlign:'start',marginBottom:'20px'}}>
                        <Typography className={classes.textFieldInstructions} component="div" >Do not exceed 100 characters when entering the product description</Typography>
                        </Grid>    
                        <TextField className={classes.realTextField}
                            id="outlined-multiline-static"
                            //label="Multiline"
                            fullWidth
                            multiline
                            rows={4}
                            defaultValue="Description"
                            variant='outlined'
                            name="description"
                            onChange={(e)=>handleInputChange(e)}
                            />
                        </Box>
                        
                        

                        {/** For Product Price */}
                        <Box className={classes.forFirstColumnTextFields}>
                        <Typography className={classes.textFieldHeading} component="div" >Product Price</Typography>
                        <Grid item  style={{textAlign:'start',marginBottom:'20px'}}>
                        <Typography className={classes.textFieldInstructions} component="div" >Please add Price of the Product in Indian Currency</Typography>
                        </Grid>
                        <TextField className={classes.realTextField}
                  fullWidth
                  required
                  variant="outlined"
                  color="primary"
                  type="number"
                  //label="Email"
                  size='medium'
                  placeholder="₹1000"
                  name="price"
                onChange={(e)=>handleInputChange(e)}
                 
                     />
                    </Box>


                        </Grid>

                        </Grid>
                  

                  
                    <Grid item lg={6} xs={12} md={12} > {/** Second Vertical grid */}
                    <Grid container direction='column' className={classes.SecondVerticalGrid}>
                        <Typography className={classes.textFieldHeading} component="div" >Product Images</Typography>
                        <Grid item  style={{textAlign:'start',marginBottom:'20px'}}>
                        <Typography className={classes.textFieldInstructions} component="div" >Upload at least four images of your product. Pay attention to the quality of the pictures you add.</Typography>
                        </Grid>

                    {/** This grid is for 4 image boxes (upload images) */}    
                        <Grid container direction='row' spacing={2} style={{marginBottom:'30px'}}>
                            
                            {/** For 1st Image */}
                            <Grid item xs={6} lg={6} md={6}>
                                <Card className={classes.boxForUploadImage}>
                                    <CardContent className={classes.imageCardContent}>
                                        

                           { 
                           image[0]?
                        //    <img src={image[0]}/> 
                           <IKContext 
                            publicKey={publicKey} 
                            urlEndpoint={urlEndpoint} 
                            authenticationEndpoint={authenticationEndpoint}
                           >
                              <IKImage src={image[0]}/> 
                           </IKContext>
                           :
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
                                folder={"/Products"}
                                
                            />
                            <AddPhotoAlternateOutlinedIcon fontSize='large'  style={ {color:'#C4C4C4'}}/>  
                            <div className='label'>
                                <label htmlFor='upload-image' style={{color:'#064482',fontSize:'1rem',cursor:'pointer'}}>
                                click to browse
                                </label>
                            </div>
                            </div>
                           
                            </IKContext>}
                           
                                    </CardContent>
                                    {/* <CardMedia
                                    component="img"
                                   // image= {image}
                                    alt="Product Image"
                                    /> */}
                                   
                                </Card>
                            </Grid>

                            {/** For 2st Image */}
                            <Grid item xs={6} lg={6} md={6}>
                                <Card className={classes.boxForUploadImage}>
                                    <CardContent className={classes.imageCardContent}>
              
                        { 
                           image[1]?<img src={image[1]}/> :
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
                                folder={"/Products"}
                                
                            />
                             <AddPhotoAlternateOutlinedIcon fontSize='large'  style={ {color:'#C4C4C4'}}/>  
                            <div className='label'>
                                <label htmlFor='upload-image' style={{color:'#064482',fontSize:'1rem',cursor:'pointer'}}>
                                click to browse
                                </label>
                            </div>
                            </div>
                           
                            </IKContext>
                            
                        }


                                    </CardContent>
                                    {/* <CardMedia
                                    component="img"
                                   // image= {image}
                                    alt="Product Image"
                                    /> */}
                                   
                                </Card>
                            </Grid>

                            {/** For 3rd Image */}
                            <Grid item xs={6} lg={6} md={6}>
                                <Card className={classes.boxForUploadImage}>
                                    <CardContent className={classes.imageCardContent}>
                                        
                                     { 
                           image[2]?<img src={image[2]}/> :
                           <IKContext 
                                publicKey={publicKey} 
                                urlEndpoint={urlEndpoint} 
                                authenticationEndpoint={authenticationEndpoint} 
                               
                            >
                               
                            <div>
                            <IKUpload id='upload-image'
                                
                                fileName="productImage.png"
                                onError={onProductImageUploadError}
                                onSuccess={onProfileImageUploadSuccess}
                                folder={"/Products"}
                                
                            />
                            <AddPhotoAlternateOutlinedIcon fontSize='large'  style={ {color:'#C4C4C4'}}/>  
                            <div className='label'>
                                <label htmlFor='upload-image' style={{color:'#064482',fontSize:'1rem',cursor:'pointer'}}>
                                click to browse
                                </label>
                            </div>
                            </div>
                           
                            </IKContext>}
                                    </CardContent>
                                    {/* <CardMedia
                                    component="img"
                                   // image= {image}
                                    alt="Product Image"
                                    /> */}
                                   
                                </Card>
                            </Grid>

                            {/** For 4th Image */}
                            <Grid item xs={6} lg={6} md={6}>
                                <Card className={classes.boxForUploadImage}>
                                    <CardContent className={classes.imageCardContent}>
                                   
                                     { 
                                        image[3]?<img src={image[3]}/> :
                                        <IKContext 
                                            publicKey={publicKey} 
                                            urlEndpoint={urlEndpoint} 
                                            authenticationEndpoint={authenticationEndpoint} 
                                        
                                        >
                                           
                                        <div>
                                        <IKUpload id='upload-image'
                                            
                                            fileName="productImage.png"
                                            onError={onProductImageUploadError}
                                            onSuccess={onProfileImageUploadSuccess}
                                            folder={"/Products"}
                                            
                                        />
                                        <AddPhotoAlternateOutlinedIcon fontSize='large'  style={ {color:'#C4C4C4'}}/>  
                                        <div className='label'>
                                            
                                            <label htmlFor='upload-image' style={{color:'#064482',fontSize:'1rem',cursor:'pointer'}}>
                                            click to browse
                                            
                                            </label>
                                        </div>
                                        </div>
                                    
                                        </IKContext>
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
                       
                        

                         

                    {/** For Availability */}
                    <Box className={classes.forFirstColumnTextFields}>
                        <Typography className={classes.textFieldHeading} component="div" >Availability</Typography> 
                        <TextField className={classes.realTextField}
                            fullWidth
                            required
                            select
                  variant="outlined"
                  color="primary"
                  value={availability}
                  onChange={handleProductAvailability}
                  size='medium'
                  placeholder="In Stock"
                  name="availability"
                 
                        >
                                
                                {ProductAvailabilty.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                     </TextField>
                        </Box>
                        
                        {/** Buttons Container Start */}
                        <Grid container spacing={4} direction='row'>
                            <Grid item xs={6} md={6} lg={6}>
                                <Box className={classes.boxForButtons}>
                                    <Button
                                        variant="contained"
                                        
                                        className={classes.addProductButton}
                                        style={{color:'white', fontFamily: ['Montserrat', 'sans-serif'],fontSize: mobileScreen ? '0.7rem' : '1rem'}}
                                        onClick={()=>addproduct()}
                                    >Add Product</Button>
                                </Box>
                            
                            </Grid> {/** 1st button */}
                            <Grid item xs={6} md={6} lg={6}>
                                <Box className={classes.boxForButtons}>
                                    <Button
                                        variant="outlined"
                                        className={classes.saveProductButton}
                                        style={{ color: 'black', fontFamily: ['Montserrat', 'sans-serif',], fontSize: mobileScreen ? '0.7rem' : '1rem'}}
                                    >Save Product</Button>
                                </Box>
                            
                            </Grid> {/** 2nd button */}

                        </Grid>   {/** Buttons Container End */}
                        
                    </Grid> {/** Second Vertical Grid Close */}

                </Grid> {/** main 2nd Item Grid Close */}
                  
                
            </Grid> 

            {/* </Grid> */}
        </div>
    )
}

export default Newproduct
//alignItems={mobileScreen || TabletScreen ? 'center' : 'flex-start' }