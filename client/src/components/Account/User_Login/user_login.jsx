import React from "react";
import {Grid,TextField,Box,Button} from '@material-ui/core';
import {ToggleButtonGroup,ToggleButton} from "@mui/material"
import '/Users/shubhamrajendrashinde/Desktop/New/LocateItLocally/client/src/components/Account/User_Login/user_login_style.css'

import {Person,Google,Facebook,Password,AccountBox,Phone,Lock} from "@mui/icons-material"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
function Login()
{
    return(
        <div>
          <Grid container direction="row" className="main">
            <Grid item lg={12} sm={12} xs={12}className="toggle">
              <ToggleButtonGroup
                  
                  exclusive
                  
                  color="info"
                  
                >
                <ToggleButton sx={{borderRadius:"15px",backgroundColor:'gray',color:'white'}} size="small" value="user" >
                  Customer
                </ToggleButton>
                <ToggleButton sx={{borderRadius:"15px"}} size="small" value="business" >
                Business Owner
                </ToggleButton>
                
              </ToggleButtonGroup>
            </Grid>
            

            <Grid item lg={9} xs={12}>
            
            <Grid container  className="p2" direction="row" >
              <Grid item lg={12} xs={12} >
              <Grid container alignItems="center" direction="column">
                    <Grid item><h1 style={{fontSize:'50px'}}>Sign in</h1></Grid>
                    <Grid item>
                    <a href="#"><Google fontSize="large"/></a>
                    <a href="#"><Facebook fontSize="large"/></a>
                    </Grid>
                    <Grid item>
                    <p>Or Use your Email for Sign in</p>
                    </Grid>
                    
              </Grid>
              </Grid>


              <Grid item lg={12} sm={12} xs={12}>
              <Grid container direction="column" className="t" spacing='3'>
                <Grid item lg={12} sm={12} xs={12} >
                  <TextField
                    required
                    variant="standard"
                    color="primary"
                    type="email"
                    label="Email"
                    size="medium"
                    placeholder="test@test.com"
                    InputProps={{
                      endAdornment: <Person/>
                    }}
                    sx={{width:"45vh",padding:"5px"}}
                  />
                  </Grid>

                  <Grid item lg={12} sm={12} xs={12} >
                    <TextField
                        required
                        variant="standard"
                        color="primary"
                        type="password"
                        label="Password"
                        size="medium"
                        placeholder="**********"
                        InputProps={{
                        endAdornment: <Password/>
                        }}
                        sx={{width:"45vh",padding:"5px"}}
                    />
                  </Grid> 

                  
              </Grid>
              </Grid>
              </Grid>



              
              
              <Grid container justifyContent="center" className="t">
                  <Grid item>
                  <Button className="t" variant="contained" style={{marginTop:"30px"}}>Sign in</Button>
                  </Grid>
              </Grid>
              
              

            </Grid>


            <Grid item lg={3} sm={12} xs={12}>
            <Grid  container direction="column" className="p1">
              <Grid item  style={{marginTop:'30px'}}>
                  <h1>Welcome Back !!</h1>
              </Grid>
              <Grid item>
                
                  <p className="para">
                    To keep connected 
                    with us please login with
                    your personal info
                  </p>
                  
              </Grid>
              <Grid item style={{textAlign:'center',marginTop:'60px'}}>
                <p>Dont't Have a Account ?</p>
                <Button variant="contained" color="white" href="#">Register</Button>
              </Grid>
            </Grid>
            </Grid>



          </Grid>

        </div>

    );
}

export default Login;