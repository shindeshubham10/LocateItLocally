import React,{useState} from "react";
import {Grid,TextField,Box,Button,Typography, Paper} from '@material-ui/core';
import "./owner_profile_style.css";

import src from "./Profile_Photo.png"
import {AccountCircle,ArrowForward} from "@material-ui/icons";
import { borderRadius } from "@mui/system";
import { useSelector,useDispatch } from 'react-redux';
import { updateBusiness } from "../../../redux/actions/businessActions";
import { IKImage,IKContext,IKUpload} from 'imagekitio-react';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@material-ui/core";
const businessInitialValues = {
  
    
    name:"",
    address:"",
    website:"",
    description:"",
    pincode:"",
    twitter:"",
    facebook:"",
    instagram:"",

}

// required parameter to fetch images
const urlEndpoint = 'https://ik.imagekit.io/ol5ujroevjc/';
const publicKey = 'public_uyc/OZswmVYeM7rvj19wIBHmFaM=';
const authenticationEndpoint = 'http://localhost:2000/imagekitAuth';


function Owner_profile()
{
    
    const dispatch=useDispatch();
    const reduxState=useSelector((global) => global.business.business);

     console.log({reduxState});

    const [businessState, setbusinessState] = React.useState(reduxState.business);
    const [ProfileImage,setProfileImage] = useState(false);
    const [ProfileImageUrl,setProfileImageUrl] = useState("");
    
    const handleChange = (event) => {
        setbusinessState({ ...businessState, [event.target.name]: event.target.value });
        console.log(businessState);
      };


      const onProfileImageError = err => {
        console.log("Error", err);
      };
      
      const onProfileImageSuccess = res => {
        console.log("Success", res);
        setProfileImage(true);
        setProfileImageUrl(res.url);
        setbusinessState({...businessState,profilePicture:res.url});
        //reduxState.user.profilePicture=res.url;
    
      };

    const saveBusiness=()=>{
            //console.log(reduxState.business._id);
            dispatch(updateBusiness(businessState))
        

                
    }
    return(
        <div>
          
        <div className="p">
        { reduxState?.business?
        <Paper elevation={15} style={{borderRadius:"50px"}}>
            <Grid container direction="row" className="main" spacing="2">



            <Grid container style={{justifyContent:"flex-end",marginBottom:"50px",marginRight:"15px"}}>
                
                    <Button 
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForward/>}
                            style={{
                                backgroundColor: "#38495A",
                                color:"white",
                                fontWeight:"bolder",
                                borderRadius:"10px",
                                
                                
                            }}
                            onClick={saveBusiness}
                    >Save</Button>
                     
                </Grid>


                <Grid item lg={6} sm={6} xs={12} className="part1">
                <Grid container direction="column" alignContent="center" spacing="3">
                    <Grid item>
                    <Grid container alignContent="center" direction="row">
                        <Grid item>
                        
                        {
                            reduxState.business.profilePicture ?
                           
                            <Grid container direction="row">
                            <label htmlFor="photo-upload" >
                            <div className="img-wrap img-upload" >
                           
                            <EditIcon for="photo-upload" style={{color:" #2980b9",cursor:'pointer'}}/>
                            
                            
                            </div>
                            <IKContext 
                                publicKey={publicKey} 
                                urlEndpoint={urlEndpoint} 
                                authenticationEndpoint={authenticationEndpoint} 
                               
                            >
                                
                            <IKUpload id="photo-upload"
                                
                                fileName="OwnerProfile-photo.png"
                                onError={onProfileImageError}
                                onSuccess={onProfileImageSuccess}
                                folder={"/BusinessOwner/Profile"}
                                
                            />
                            </IKContext>
                            </label>
                        
                            <IKContext
                            publicKey={publicKey} 
                            urlEndpoint={urlEndpoint} 
                            authenticationEndpoint={authenticationEndpoint} 
                            >
                            
                            
                            {
                                ProfileImageUrl ? 
                                <IKImage  
                                //src={`${reduxState.user.profilePicture}?tr=r-max,cm-extract`}
                                src={`${ProfileImageUrl}?tr=r-max,cm-extract`}
                                
                            /> : 
                            <IKImage  
                                src={`${reduxState.business.profilePicture}?tr=r-max,cm-extract`}
                               // src={ProfileImageUrl}
                                
                            /> 
                        }
                            
                        
                            </IKContext>
                           
                            {/* <img for="photo-upload" src={reduxState.user.profilePicture}/> */}
                            </Grid>
                            
                            
                            :
                            <Grid container direction="row">

                            {
                             ProfileImageUrl ? 
                            <Grid container direction="row">
                            <label htmlFor="photo-upload" >
                            <div className="img-wrap img-upload" >
                            <EditIcon for="photo-upload" style={{color:" #2980b9",cursor:'pointer'}}/>
                            </div>
                            <IKContext 
                                publicKey={publicKey} 
                                urlEndpoint={urlEndpoint} 
                                authenticationEndpoint={authenticationEndpoint} 
                               
                            >
                                
                            <IKUpload id="photo-upload"
                                
                                fileName="OwnerProfile-photo.png"
                                onError={onProfileImageError}
                                onSuccess={onProfileImageSuccess}
                                folder={"/BusinessOwner/Profile"}
                                
                            />
                            </IKContext>
                            </label>
                            <IKContext
                            publicKey={publicKey} 
                            urlEndpoint={urlEndpoint} 
                            authenticationEndpoint={authenticationEndpoint} 
                            >
                                <IKImage  
                                //src={`${reduxState.user.profilePicture}?tr=r-max,cm-extract`}
                                src={`${ProfileImageUrl}?tr=r-max,cm-extract`}
                                
                            /> 
                            </IKContext> 
                            </Grid>
                             
                            
                            :
                            <label>
                            <div className="img-wrap img-upload" >
                            <img for="photo-upload" src={src} style={{cursor:'pointer'}}/>
                            <h5 style={{cursor:'pointer'}}>*click to upload image</h5>
                            </div>

                            <IKContext 
                                publicKey={publicKey} 
                                urlEndpoint={urlEndpoint} 
                                authenticationEndpoint={authenticationEndpoint} 
                               
                            >
                                
                            <IKUpload 
                                
                                fileName="userProfile-photo.png"
                                onError={onProfileImageError}
                                onSuccess={onProfileImageSuccess}
                                folder={"/BusinessOwner/Profile"}
                            />
                            </IKContext>
                            </label> 
                        }
                            </Grid>
                            
                            
                            
                
              
                        }

                        </Grid>
                    </Grid>
                    </Grid> 
                    <Grid item >
                    <p>Business Name</p>
                    <TextField
                        required
                        fullWidth
                        type="text"
                        placeholder="Business Name*"
                        variant="outlined"
                        onChange={handleChange}
                        defaultValue={reduxState.business.name}
                        name="name"
                    />
                    </Grid>

                    <Grid item >
                    <Grid container direction="row" spacing="1">
                        <Grid item>
                        <p>First Name</p>
                        <TextField
                            required
                            type="text"
                            id="outlined-required"
                            placeholder="First Name*"
                            variant="outlined"
                            onChange={handleChange}
                            defaultValue={reduxState.business.firstName}
                            name="firstName"
                        />
                        </Grid>

                        <Grid item>
                        <p>Last Name</p>
                        <TextField
                            required
                            type="text"
                            placeholder="Last Name*"
                            variant="outlined"
                            onChange={handleChange}
                            defaultValue={reduxState.business.lastName}
                            name="lastName"
                        />
                        </Grid>
                    </Grid>
                    </Grid>

                    <Grid item>
                    <p>Email</p>
                    <TextField
                        required
                        fullWidth
                        type="email"
                        placeholder="Email*"
                        variant="outlined"
                        onChange={handleChange}
                        defaultValue={reduxState.business.email}
                        name="email"
                    />
                    </Grid>

                    <Grid item>
                    <p>Phone</p>
                    <TextField
                        required
                        fullWidth
                        type="tel"
                        placeholder="Phone*"
                        variant="outlined"
                        onChange={handleChange}
                        defaultValue={reduxState.business.contactNumber}
                        name="contactNumber"
                    />
                    </Grid>

                    
                    
                </Grid>
                </Grid>




                <Grid item lg={6} sm={6} xs={12} className="part2">
                <Grid container direction="column" alignContent="center" spacing="3">

                    <Grid item>
                    <p>Business Website</p>
                    <TextField
                        required
                        fullWidth
                        type="url"
                        placeholder="Business Website*"
                        variant="outlined"
                        onChange={handleChange}
                        defaultValue={reduxState.business.website}
                        name="website"
                    />
                    </Grid>

                    <Grid item>
                    <p>Address</p>
                    <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        type="text"
                        placeholder="Address*"
                        variant="outlined"
                        onChange={handleChange}
                        defaultValue={reduxState.business.address}
                        name="address"
                    />
                    </Grid>

                    <Grid item>
                    <p>PinCode</p>
                    <TextField
                        required
                        fullWidth
                        type="text"
                        placeholder="pincode*"
                        variant="outlined"
                        onChange={handleChange}
                        defaultValue={reduxState.business.pincode}
                        name="pincode"
                    />
                    </Grid>

                    <Grid item>
                    <p>Business Discription</p>
                    <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        type="text"
                        placeholder="Business Discription*"
                        variant="outlined"
                        onChange={handleChange}
                        defaultValue={reduxState.business.description}
                        name="description"
                    />
                    </Grid>

                    <Grid item>
                    <Grid container direction="row" spacing="1">
                        
                        <Grid item lg={6}>
                        <p>Instagram</p>
                        <TextField
                            required
                            fullWidth
                            type="url"
                            placeholder="Instagram*"
                            variant="outlined"
                            onChange={handleChange}
                            defaultValue={reduxState.business.instagram}
                            name="instagram"
                        />
                        </Grid>

                        <Grid item lg={6}>
                        <p>Facebook</p>
                        <TextField
                            required
                            fullWidth
                            type="url"
                            placeholder="Facebook*"
                            variant="outlined"
                            onChange={handleChange}
                            defaultValue={reduxState.business.facebook}
                            name="facebook"
                        />
                        </Grid>
                        

                    </Grid>
                    </Grid>

                    
                </Grid>
                </Grid>


                
                
                
                

            </Grid>
        </Paper>:<div>Waiting___</div>
        }
        </div>
            
        </div>
    );
}

export default Owner_profile;