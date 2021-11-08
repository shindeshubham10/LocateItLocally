import React from "react";
import {Grid,TextField,Box,Button,Typography, Paper, Select,MenuItem,Datepi} from '@material-ui/core';
import src from "../Owner_Profile/Profile_Photo.png"
import {AccountCircle,ArrowForward} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import "./user_profile_style.css";




  
  

function User_profile()
{

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return(
        <div>
 
        <div className="p">
        <Paper elevation={15}>

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
                                borderRadius:"25px",
                                
                                
                            }}
                    >Save</Button>
                </Grid>



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
                    <Grid container direction="row" spacing="1">
                        <Grid item xs={12}>
                        <p>First Name</p>
                        <TextField
                            required
                            fullWidth
                            type="text"
                            id="outlined-required"
                            placeholder="First Name*"
                            variant="outlined"
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
                    <Grid container direction="row" spacing="1">
                        <Grid item lg={6} sm={6} xs={6}>
                        <p>Gender</p>
                        
                        
                            <Select
                                variant="outlined"
                                value={age}
                                fullWidth
                                placeholder="None"
                                onChange={handleChange}
                            >
                            <MenuItem value={"Male"}>Male</MenuItem>
                            <MenuItem value={20}>Female</MenuItem>
                            <MenuItem value={30}>Other</MenuItem>
                            </Select>
                        
                        
                        </Grid>


                        <Grid item lg={6} sm={6} xs={6}>
                            <p>BirthDate</p>
                            <TextField
                                    type="date"
                                    variant="outlined"
                                    fullWidth
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

export default User_profile;