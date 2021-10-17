import React from "react";
import {Grid,TextField,Box,Button,Typography, Paper} from '@material-ui/core';
import owner_profile_style from "/Users/shubhamrajendrashinde/Desktop/New/LocateItLocally/client/src/components/Account/Owner_Profile/owner_profile_style.css"
import src from "/Users/shubhamrajendrashinde/Desktop/New/LocateItLocally/client/src/components/Account/Owner_Profile/Profile_Photo.png"
import {AccountCircle,ArrowForward} from "@material-ui/icons";
import { borderRadius } from "@mui/system";

function Owner_profile()
{
    return(
        <div>
            <Grid container className="first">
                <Grid item>
                    <Button 
                        variant="contained"
                        size="large"
                        endIcon={<ArrowForward/>}
                        style={{
                            backgroundColor: "#38495A",
                            color:"white",
                            fontWeight:"bolder",
                            alignContent:"flex-end",
                            borderRadius:"25px"
                        }}
                    >Save</Button>
                </Grid>
            </Grid>
        




        <div className="p">
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
                        />
                        </Grid>

                    </Grid>
                    </Grid>

                    
                </Grid>
                </Grid>


                
                
                
                

            </Grid>
        </Paper>
        </div>
            
        </div>
    );
}

export default Owner_profile;