
import {Grid,TextField,Box,Button,Typography, Paper} from '@material-ui/core';
import {AddBoxOutlined,LocationOnOutlined,DescriptionOutlined,AssignmentIndOutlined,WorkOutlineOutlined} from "@material-ui/icons";
// import CurrencyRupeeOutlinedIcon from '@mui/icons-material';
//import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { useState } from 'react';
import { useDispatch } from "react-redux";

import { addJobDetails } from "../../../redux/actions/jobActions";

import './addJobOpeningStyle.css'

const initialData={

    jobTitle:"",
    description:"",
    vacancy:0,
    annualPackage:0,
    department:"",

}

const AddJobOpening = () =>{

    console.log("Atleast here");
   const dispatch=useDispatch();

   const [jobdata,setjobdata]=useState(initialData);




    

    const handleInputChange = (event) => {
        console.log("IDhar to aa");
        setjobdata({ ...jobdata, [event.target.name]: event.target.value });
        console.log(jobdata);
      };

   
    

    const addjob =  () => {

        console.log("Helllllllllllllllllllllllllll");
        console.log(jobdata);
        console.log("enter into function");
        // productdata.seller=reduxState.business._id;
        dispatch(addJobDetails(jobdata)).then((data)=>console.log(data))
        
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
            <h1 className="mainheading">Add New Job Opening <AddBoxOutlined fontSize="large"/></h1>
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
                        name="jobTitle"
                        onChange={(e)=>handleInputChange(e)}
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
                        name="description"
                        onChange={(e)=>handleInputChange(e)}
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
                        name="vacancy"
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
                        InputProps={{
                            endAdornment: <AssignmentIndOutlined/>
                        }}
                        name="department"
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
            <Button variant="contained" style={{fontWeight:"bold"}}
            onClick={()=>addjob()}
            >Submit</Button>
        </Grid>

        </Grid>    
        </Paper>
        </div>
        </div>
    );
}

export default AddJobOpening;