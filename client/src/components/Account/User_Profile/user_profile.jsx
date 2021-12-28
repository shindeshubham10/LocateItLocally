import React from "react";
import {Grid,TextField,Box,Button,Typography, Paper, Select,MenuItem,Datepi} from '@material-ui/core';
import src from "./Profile_Photo.png"
import { useEffect ,useState} from "react";

import {AccountCircle,ArrowForward} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import "./user_profile_style.css";
import { useSelector,useDispatch } from 'react-redux';
import { getMyself,updateUser } from "../../../redux/actions/userActions";
import { Link } from "react-router-dom";
import { IKImage,IKContext,IKUpload} from 'imagekitio-react';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@material-ui/core';
const userInitialValues = {
  
    
    address:"",
    birthdate:"",
    gender:"",
    twitter:"",
    facebook:"",
    instagram:"",
    profilePicture:"",

}




// required parameter to fetch images
const urlEndpoint = 'https://ik.imagekit.io/ol5ujroevjc/';
const publicKey = 'public_uyc/OZswmVYeM7rvj19wIBHmFaM=';
const authenticationEndpoint = 'http://localhost:2000/imagekitAuth';
  

function User_profile()
{

    // const dispatch=useDispatch();

    // useEffect(()=>{
    //     if(localStorage.LocateItLocallyUser)
    //     {
    //     console.log("In doinhgghyhhgg");
    //     dispatch(getMyself());
    //     }

    // })
    const [ProfileImage,setProfileImage] = useState(false);
    const [ProfileImageUrl,setProfileImageUrl] = useState("");

    const dispatch=useDispatch();
    const reduxState=useSelector((global) => global.user.user);

     console.log({reduxState});

    const [userState, setuserState] = React.useState(reduxState.user);

    
    const handleChange = (event) => {
        setuserState({ ...userState, [event.target.name]: event.target.value });
        console.log(userState);
      };

      const onProfileImageError = err => {
        console.log("Error", err);
      };
      
      const onProfileImageSuccess = res => {
        console.log("Success", res);
        setProfileImage(true);
        setProfileImageUrl(res.url);
        setuserState({...userState,profilePicture:res.url});
        //reduxState.user.profilePicture=res.url;
    
      };

    const saveUser=()=>{
            //console.log(reduxState.user._id);
            console.log(userState);
            //userState ?
            //userState.profilePicture = ProfileImageUrl : userState.profilePicture = ""
            dispatch(updateUser(userState))
        

                
    }

   

    
    

    return(
        <div>
       {reduxState?.user?
        <div className="p">
        <Paper elevation={15}>

            <Grid container direction="row" className="main" spacing="2">
                
                <Grid container style={{justifyContent:"flex-end",marginBottom:"50px",marginRight:"15px"}}>
                <Link to='/display_user_profile'>
                <Button 
                            variant="contained"
                            size="large"
                            
                            style={{
                                backgroundColor: " #5d6d7e ",
                                color:"white",
                                fontWeight:"bolder",
                                borderRadius:"10px",
                                marginRight:50
                                
                                
                                
                            }}
                           
                    >DashBoard</Button>
                </Link>
                
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
                            onClick={saveUser}
                    >Save</Button>
                     
                </Grid>
                
               


                <Grid item lg={6} sm={6} xs={12} className="part1">
                <Grid container direction="column" alignContent="center" spacing="3">
                    <Grid item>
                    <Grid container alignContent="center" direction="row">
                        <Grid item>
                       

                        {
                            reduxState.user.profilePicture ?
                            
                            <Grid container direction="row">
                            
                            {/* <IKContext 
                                publicKey={publicKey} 
                                urlEndpoint={urlEndpoint} 
                                authenticationEndpoint={authenticationEndpoint} 
                               
                            >
                                <EditIcon/>
                            <IKUpload 
                                
                                fileName="userProfile-photo.png"
                                onError={onProfileImageError}
                                onSuccess={onProfileImageSuccess}
                                folder={"/User"}
                                
                            />
                            </IKContext> */}
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
                                
                                fileName="userProfile-photo.png"
                                onError={onProfileImageError}
                                onSuccess={onProfileImageSuccess}
                                folder={"/User"}
                                
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
                               
                                src={`${ProfileImageUrl}?tr=r-max,cm-extract`}
                                
                            /> : 
                            <IKImage  
                                src={`${reduxState.user.profilePicture}?tr=r-max,cm-extract`}
                              
                                
                            /> 
                        }
                            
                        
                            </IKContext>
                           
                            
                            </Grid>
                            
                            
                            :
                            // <IKContext 
                            //     publicKey={publicKey} 
                            //     urlEndpoint={urlEndpoint} 
                            //     authenticationEndpoint={authenticationEndpoint} 
                               
                            // >
                            //     <p>Upload an image</p>
                            // <IKUpload 
                                
                            //     fileName="userProfile-photo.png"
                            //     onError={onProfileImageError}
                            //     onSuccess={onProfileImageSuccess}
                            //     folder={"/User"}
                            // />
                            // </IKContext>
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
                                
                                fileName="userProfile-photo.png"
                                onError={onProfileImageError}
                                onSuccess={onProfileImageSuccess}
                                folder={"/User"}
                                
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
                                folder={"/User"}
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
                    <Grid container direction="row" spacing="1">
                        <Grid item xs={12}>
                        <p>First Name</p>
                        <TextField
                            required
                            fullWidth
                            type="text"
                            id="outlined-required"
                            placeholder="First Name*"
                            value={reduxState.user.firstName}
                            variant="outlined"
                            onChange={handleChange}
                            name="firstName"
                        />
                        </Grid>

                        <Grid item xs={12}>
                        <p>Last Name</p>
                        <TextField
                            required
                            fullWidth
                            type="text"
                            label="last Name"
                            placeholder="Last Name*"
                            value={reduxState.user.lastName}
                            onChange={handleChange}
                            variant="outlined"
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
                        value={reduxState.user.email}
                        onChange={handleChange}
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
                        name="contactNumber"
                        value={reduxState.user.contactNumber}
                        onChange={handleChange}
                    />
                    </Grid>


                    
                    
                </Grid>
                </Grid>




                <Grid item lg={6} sm={6} xs={12} className="part2">
                <Grid container direction="column" alignContent="center" spacing="3">

                    <Grid item>
                    <p>Address</p>
                    <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        type="text"
                        placeholder="Address*"
                        defaultValue={reduxState.user.address}
                        variant="outlined"
                        onChange={handleChange}
                        name="address"
                    />
                    </Grid>
                    
                    <Grid item>
                    <Grid container direction="row" spacing="1">
                        <Grid item lg={6} sm={6} xs={6}>
                        <p>Gender</p>
                        
                        
                            <Select
                                variant="outlined"
                                //value={age}
                                fullWidth
                                placeholder="None"
                                name="gender"
                                value={reduxState.user.gender}
                                onChange={handleChange}
                            >
                            <MenuItem value={"Male"}>Male</MenuItem>
                            <MenuItem value={"Female"}>Female</MenuItem>
                            <MenuItem value={"Other"}>Other</MenuItem>
                            </Select>
                        
                        
                        </Grid>


                        <Grid item lg={6} sm={6} xs={6}>
                            <p>BirthDate</p>
                            <TextField
                                    type="date"
                                    variant="outlined"
                                    fullWidth
                                    defaultValue={reduxState.user.birthdate}
                                    onChange={handleChange}
                                    name="birthdate"
                            />
                       
                    
                        </Grid>
                    </Grid>
                    </Grid>


                    <Grid item>
                    <Grid container direction="row" spacing="1">
                        <Grid item lg={6} xs={12}>
                        <p>Twitter</p>
                        <TextField
                            required
                            fullWidth
                            type="url"
                            placeholder="Twitter*"
                            variant="outlined"
                            defaultValue={reduxState.user.twitter}
                            onChange={handleChange}
                            name="twitter"
                        />

                        </Grid>

                        <Grid item lg={6} xs={12}>
                        <p>Instagram</p>
                        <TextField
                            required
                            fullWidth
                            type="url"
                            placeholder="Instagram*"
                            variant="outlined"
                            onChange={handleChange}
                            defaultValue={reduxState.user.instagram}
                            name="instagram"
                        />
                        </Grid>

                        <Grid item lg={6} xs={12}>
                        <p>Facebook</p>
                        <TextField
                            required
                            fullWidth
                            type="url"
                            placeholder="Facebook*"
                            variant="outlined"
                            onChange={handleChange}
                            defaultValue={reduxState.user.facebook}
                            name="facebook"
                        />
                        </Grid>

                    </Grid>
                    </Grid>

                    
                </Grid>
                </Grid>


                
                
                
                

            </Grid>
        </Paper>
        
        </div>:<div>Waiting</div>
        }
        
            
        </div>
    );
}

export default User_profile;