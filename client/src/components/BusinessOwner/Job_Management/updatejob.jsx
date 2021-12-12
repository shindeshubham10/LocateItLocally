import React from "react";
import {Grid,TextField,Box,Button,Typography, Paper} from '@material-ui/core';
import {AddBoxOutlined,LocationOnOutlined,DescriptionOutlined,AssignmentIndOutlined,WorkOutlineOutlined} from "@material-ui/icons";
// import CurrencyRupeeOutlinedIcon from '@mui/icons-material';
//import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { useDispatch } from "react-redux";

import './addJobOpeningStyle.css'
import { updateJob } from "../../../redux/actions/jobActions";

const initialData={

    jobTitle:"",
    description:"",
    vacancy:0,
    annualPackage:0,
    department:"",

}

function UpdateJobOpening(props)
{

    console.log(props);
    const dispatch=useDispatch();

    const [jobdata, setjobdata] = React.useState(initialData);

    const handleInputChange = (event) => {
        setjobdata({ ...jobdata, [event.target.name]: event.target.value });
        console.log(jobdata);
      };
    

    const updatejob =  () => {
        console.log(jobdata);
        console.log("enter into function");
        // productdata.seller=reduxState.business._id;
        dispatch(updateJob(jobdata,props.location.state._id)).then((data)=>console.log(data))
        
    //     console.log("dfndncjndjk");
    //     if (!response)
    //     {
    //       seterror(true);
         
    //       return;
    //     }
    //    return;
             
      
      };


    return(
        <div>
        <div className="maindiv">
        <Paper elevation={15}>
        <Grid container  direction="row">

        <Grid>
            <h1 className="mainheading">Update Job Opening <AddBoxOutlined fontSize="large"/></h1>
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
                        defaultValue={props.location.state.jobTitle}
                        InputProps={{
                            endAdornment: <WorkOutlineOutlined/>
                        }}
                        name="jobTitle"
                        onChange={(e)=>handleInputChange(e)}
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
                        defaultValue={props.location.description}
                        name="description"
                        InputProps={{
                            endAdornment: <DescriptionOutlined/>
                        }}
                        onChange={(e)=>handleInputChange(e)}
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
                        name="vacancy"
                        defaultValue={props.location.vacancy}
                        onChange={(e)=>handleInputChange(e)}
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
                        name="department"
                        InputProps={{
                            endAdornment: <AssignmentIndOutlined/>
                        }}
                        onChange={(e)=>handleInputChange(e)}
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
                        name="annualPackage"
                        defaultValue={props.location.annualPackage}
                        onChange={(e)=>handleInputChange(e)}
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
                        name="location"
                        InputProps={{
                            endAdornment: <LocationOnOutlined/>
                        }}
                        onChange={(e)=>handleInputChange(e)}
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
            <Button variant="contained" style={{fontWeight:"bold"}} onClick={updatejob}>Submit</Button>
        </Grid>

        </Grid>    
        </Paper>
        </div>
        </div>
    );
}

export default UpdateJobOpening;