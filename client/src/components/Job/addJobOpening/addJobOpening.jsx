import React from "react";
import {Grid,TextField,Box,Button,Typography, Paper} from '@material-ui/core';
import {AddBoxOutlined,LocationOnOutlined,DescriptionOutlined,AssignmentIndOutlined,WorkOutlineOutlined} from "@material-ui/icons";
// import CurrencyRupeeOutlinedIcon from '@mui/icons-material';
//import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';


import './addJobOpeningStyle.css'


const AddJobOpening = () => {


    return(
        <div>
        <div className="maindiv">
        <Paper elevation={15}>
        <Grid container  direction="row">

        <Grid>
            <h2 className="mainheading">Add New Job Opening <AddBoxOutlined fontSize="medium"/></h2>
            <hr className="divider"></hr>
        </Grid>
        
        
        <Grid container direction="row" className="maincontent">
            <Grid item lg={6} sm={6} xs={12}>
            <Grid container direction="column" className="leftside" spacing={3}>
                <Grid item>
                    <p className="textfieldHeading">Job Title</p>
                    <TextField
                        required
                        fullWidth
                        type="text"
                        placeholder="Job Title"
                        variant="outlined"
                        InputProps={{
                            endAdornment: <WorkOutlineOutlined/>
                        }}
                    />            
                </Grid>

                <Grid item>
                    <p className="textfieldHeading">Description</p>
                    <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        type="text"
                        placeholder="Description*"
                        variant="outlined"
                        InputProps={{
                            endAdornment: <DescriptionOutlined/>
                        }}
                    />            
                </Grid>

                <Grid item>
                    <p className="textfieldHeading">Number of Vacancy</p>
                    <TextField
                        required
                        fullWidth
                        type="number"
                        placeholder="Number of Vacancy*"
                        variant="outlined"
                    />            
                </Grid>

                <Grid item>
                    <p className="textfieldHeading">Department</p>
                    <TextField
                        required
                        fullWidth
                        type="text"
                        placeholder="Department*"
                        variant="outlined"
                        InputProps={{
                            endAdornment: <AssignmentIndOutlined/>
                        }}
                    />            
                </Grid>


            </Grid>
            </Grid>


            <Grid item lg={6} sm={6} xs={12}>
            <Grid container direction="column" className="rightside" spacing={3}>
                
                <Grid item>
                    <p className="textfieldHeading">Annual Package</p>
                    <TextField
                        required
                        fullWidth
                        type="text"
                        placeholder="In Lakhs*"
                        variant="outlined"
                        // InputProps={{
                        //     endAdornment: <CurrencyRupeeOutlinedIcon/>
                        // }}
                    />            
                </Grid>

                <Grid item>
                    <p className="textfieldHeading">Location</p>
                    <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        type="text"
                        placeholder="Location*"
                        variant="outlined"
                        InputProps={{
                            endAdornment: <LocationOnOutlined/>
                        }}
                    />            
                </Grid>

                <Grid item>
                    <p className="textfieldHeading">Interview Date</p>
                    <TextField
                        required
                        type="date"
                        placeholder="First Name*"
                        variant="outlined"
                    />            
                </Grid>

            </Grid>
            </Grid>
        </Grid>

        <Grid container className="submitbtndiv" justifyContent="center">
            <Button variant="contained" style={{fontWeight:"bold"}}>Submit</Button>
        </Grid>

        </Grid>    
        </Paper>
        </div>
        </div>
    );


}

// function addJobOpening()
// {

    
// }

export default AddJobOpening;