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
    monthlySalary:0,
    contactNumber:"",
    location:"",

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
                        defaultValue={props.location.state.description}
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
                        defaultValue={props.location.state.vacancy}
                        onChange={(e)=>handleInputChange(e)}
                    />            
                </Grid>

                <Grid item>
                    <p className="textfieldHeading">Monthly Salary</p>
                    <TextField
                        required
                        fullWidth
                        type="text"
                        placeholder="Salary"
                        variant="outlined"
                        name="monthlySalary"
                        defaultValue={props.location.state.monthlySalary}
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
                    <p className="textfieldHeading">Contact Number</p>
                    <TextField
                        required
                        fullWidth
                        type="text"
                        
                        variant="outlined"
                        name="contactNumber"
                        defaultValue={props.location.state.contactNumber}
                        onChange={(e)=>handleInputChange(e)}
                        // InputProps={{
                        //     endAdornment: <CurrencyRupeeOutlinedIcon/>
                        // }}
                    />            
                </Grid>

                <Grid item>
                    <p className="textfieldHeading">Address</p>
                    <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        type="text"
                        placeholder="Location*"
                        variant="outlined"
                        name="location"
                        defaultValue={props.location.state.location}
                        InputProps={{
                            endAdornment: <LocationOnOutlined/>
                        }}
                        onChange={(e)=>handleInputChange(e)}
                    />            
                </Grid>

            </Grid>
            </Grid>
        </Grid>

        <Grid container className="submitbtndiv" justifyContent="center">
         
            <Button
                variant="contained"
                onClick={updatejob}
                style={{color:'white',  backgroundColor: '#38495A', fontFamily: ['Montserrat', 'sans-serif'],fontSize: '1rem',marginTop:10}}                
            >Update</Button>
        </Grid>

        </Grid>    
        </Paper>
        </div>
        </div>
    );
}

export default UpdateJobOpening;