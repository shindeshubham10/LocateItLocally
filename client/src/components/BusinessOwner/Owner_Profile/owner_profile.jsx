import React from "react";
import {Grid,TextField,Box,Button,Typography, Paper} from '@material-ui/core';
import "./owner_profile_style.css";

import src from "./Profile_Photo.png"
import {AccountCircle,ArrowForward} from "@material-ui/icons";
import { borderRadius } from "@mui/system";
import { useSelector,useDispatch } from 'react-redux';
import { updateBusiness } from "../../../redux/actions/businessActions";

const businessInitialValues = {
  
    
    name:"",
    address:"",
    website:"",
    description:"",
    
    twitter:"",
    facebook:"",
    instagram:"",

}

function Owner_profile()
{
    
    const dispatch=useDispatch();
    const reduxState=useSelector((global) => global.business.business);

     console.log({reduxState});

    const [businessState, setbusinessState] = React.useState(reduxState.business);

    
    const handleChange = (event) => {
        setbusinessState({ ...businessState, [event.target.name]: event.target.value });
        console.log(businessState);
      };

    const saveBusiness=()=>{
            console.log(reduxState.business._id);
            dispatch(updateBusiness(reduxState.business._id,businessState))
        

                
    }
    return(
        <div>
            <Grid container className="first">
                <Grid item sx={{alignItems:"center",justify:"flex-end"}}>
                    <Button 
                        variant="contained"
                        size="large"
                        endIcon={<ArrowForward/>}
                        style={{
                            backgroundColor: "#38495A",
                            color:"white",
                            fontWeight:"bolder",
                            
                            borderRadius:"25px"
                        }}
                        onClick={saveBusiness}
                    >Save</Button>
                </Grid>
            </Grid>
        




        <div className="p">
        { reduxState?.business?
        <Paper elevation={15} style={{borderRadius:"50px"}}>
            <Grid container direction="row" className="main" spacing="2">
                <Grid item lg={6} sm={6} xs={12} className="part1">
                <Grid container direction="column" alignContent="center" spacing="3">
                    <Grid item>
                    <Grid container alignContent="center" direction="row">
                        <Grid item>
                        <label htmlFor="photo-upload" className="custom-file-upload fas">
                            <div className="img-wrap img-upload" >
                            <img for="photo-upload" src={src}/>
                            </div>
                            <input id="photo-upload" type="file" /> 
                        </label>
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
                            label="last Name"
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
                        <p>Twitter</p>
                        <TextField
                            required
                            fullWidth
                            type="url"
                            placeholder="Twitter*"
                            variant="outlined"
                            onChange={handleChange}
                            defaultValue={reduxState.business.twitter}
                            name="twitter"
                        />
                        </Grid>

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