import React from "react";
import './RegisterStyle.css'
import {Grid,TextField,Box,Button} from '@material-ui/core';
import {ToggleButtonGroup,ToggleButton} from "@mui/material"
import {Link} from 'react-router-dom';
import {Person,Google,Facebook,Password,AccountBox,Phone,Lock} from "@mui/icons-material"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
function Register()
{
  const [user, setUser] = React.useState('customer');
    const handleUserBusiness = (event, obj) => {
      if (obj !== null) {
        setUser(obj);
        
      }
    };
    return(
        <div>
          <Grid container direction="row" className="rmain">
            
            <Grid item lg={3} sm={12} xs={12}>
              <Grid  container direction="column" className="rp1">
                <Grid item  style={{marginTop:'30px'}}>
                    <h1>Welcome Back !!</h1>
                </Grid>
                <Grid item>
                  
                    <p className="rpara">
                      To keep connected 
                      with us please login with
                      your personal info
                    </p>
                    
                </Grid>
                <Grid item style={{textAlign:'center',marginTop:'60px'}}>
                  <p>Have a already Account ?</p>
                  <Link to="/login"><Button variant="contained"  style={{color:"white",borderRadius:"50px", backgroundColor:"#38495a",width:200}} >Login</Button></Link>
                </Grid>
            </Grid>
          </Grid>

          <Grid item lg={9} xs={12}>
            
            <Grid container  className="rp2" direction="row" >
              <Grid item lg={12} xs={12} >
              
              <Grid container alignItems="center" direction="column">
              <Grid
                      item
                      className="toggleButtons"
                      direction="column"
                      alignItems="flex-end"
                      justify="flex-start"
                      >
                        
                        <ToggleButtonGroup
                            value={user}
                            exclusive
                            onChange={handleUserBusiness}
                            //color="red"
                           style={{color:'red'}}
                          
                          >
                          <ToggleButton 
                          sx={{borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px",}} 
                          size="small" 
                          value="customer" 
                        //style={{}}
                        
                          >
                            Customer
                          </ToggleButton>
                          <ToggleButton 
                          sx={{borderTopRightRadius:"20px",borderBottomRightRadius:"20px"}}
                          size="small" 
                          value="business" >
                          Business Owner
                          </ToggleButton>
                        
                        </ToggleButtonGroup>
                        
                      </Grid>
                    <Grid item>
                      {user=="customer"? <h1 style={{fontSize:'40px'}}> Create Account </h1> :<h1 style={{fontSize:'40px'}}> Create Business Account </h1>}
                    </Grid>
                    <Grid item>
                    <a href="#"><Google fontSize="large"/></a>
                    <a href="#"><Facebook fontSize="large"/></a>
                    </Grid>
                    <Grid item>
                    <p>Or Use your Email for Registration</p>
                    </Grid>
                    
              </Grid>
              </Grid>
              { user=="customer"?
              <Grid item>
              <Grid container direction="row" className="rt">
                <Grid item lg={6} sm={6} xs={12}>
                  <TextField
                    required
                    variant="standard"
                    color="primary"
                    type="text"
                    label="Name"
                    size="medium"
                    placeholder="test@test.com"
                    InputProps={{
                      endAdornment: <Person/>
                    }}
                    sx={{width:"45vh",padding:"5px"}}
                  />
                  </Grid>
                  <Grid item lg={6} xs={12} sm={6}>
                  <TextField
                    required
                    variant="standard"
                    color="primary"
                    type="text"
                    label="Username"
                    size="small"
                    placeholder="test@test.com"
                    InputProps={{
                      endAdornment: <AccountBox />
                    }}
                    sx={{width:"45vh",padding:"5px"}}
                  />
                  </Grid>
                  <Grid item lg={6} sm={6} xs={12}>
                  <TextField
                    required
                    variant="standard"
                    color="primary"
                    type="email"
                    label="Email"
                    size="small"
                    placeholder="test@test.com"
                    InputProps={{
                      endAdornment: <EmailOutlinedIcon />
                    }}
                    sx={{width:"45vh",padding:"5px"}}
                />
                </Grid>

                <Grid item lg={6} sm={6} xs={12} >
                <TextField
                  required
                  variant="standard"
                  color="primary"
                  type="number"
                  label="Contact Number"
                  size="small"
                  placeholder="123456789"
                  InputProps={{
                    endAdornment: <Phone/>
                  }}
                  sx={{width:"45vh",padding:"5px"}}
                />
                </Grid>
                <Grid item lg={6} sm={6} xs={12} >
                <TextField
                  required
                  variant="standard"
                  color="primary"
                  type="password"
                  label="Password"
                  size="small"
                  placeholder="*******"
                  InputProps={{
                    endAdornment: <Password />
                  }}
                  sx={{width:"45vh",padding:"5px"}}
                />
                </Grid>
                <Grid item lg={6} sm={6} xs={12}>
                <TextField
                  required
                  variant="standard"
                  color="primary"
                  type="password"
                  label="Confirm Password"
                  size="small"
                  placeholder="*******"
                  InputProps={{
                    endAdornment: <Lock />
                  }}
                  sx={{width:"45vh",padding:"5px"}}
                />
                </Grid>
                </Grid>
              </Grid>
              :
              <Grid item>
                <Grid container direction="row" className="rt">
                  <Grid item lg={6} sm={6} xs={12}>
                    <TextField
                      required
                      variant="standard"
                      color="primary"
                      type="text"
                      label="Company Name"
                      size="medium"
                      placeholder="test@test.com"
                      InputProps={{
                        endAdornment: <Person/>
                      }}
                      sx={{width:"45vh",padding:"5px"}}
                    />
                    </Grid>
                    <Grid item lg={6} xs={12} sm={6}>
                    <TextField
                      required
                      variant="standard"
                      color="primary"
                      type="text"
                      label="Username"
                      size="small"
                      placeholder="test@test.com"
                      InputProps={{
                        endAdornment: <AccountBox />
                      }}
                      sx={{width:"45vh",padding:"5px"}}
                    />
                    </Grid>
                    <Grid item lg={6} sm={6} xs={12}>
                    <TextField
                      required
                      variant="standard"
                      color="primary"
                      type="email"
                      label="Business Email"
                      size="small"
                      placeholder="test@test.com"
                      InputProps={{
                        endAdornment: <EmailOutlinedIcon />
                      }}
                      sx={{width:"45vh",padding:"5px"}}
                  />
                  </Grid>

                  <Grid item lg={6} sm={6} xs={12} >
                  <TextField
                    required
                    variant="standard"
                    color="primary"
                    type="number"
                    label="Contact Number"
                    size="small"
                    placeholder="123456789"
                    InputProps={{
                      endAdornment: <Phone/>
                    }}
                    sx={{width:"45vh",padding:"5px"}}
                  />
                  </Grid>
                  <Grid item lg={6} sm={6} xs={12} >
                  <TextField
                    required
                    variant="standard"
                    color="primary"
                    type="password"
                    label="Password"
                    size="small"
                    placeholder="*******"
                    InputProps={{
                      endAdornment: <Password />
                    }}
                    sx={{width:"45vh",padding:"5px"}}
                  />
                  </Grid>
                  <Grid item lg={6} sm={6} xs={12}>
                  <TextField
                    required
                    variant="standard"
                    color="primary"
                    type="password"
                    label="Confirm Password"
                    size="small"
                    placeholder="*******"
                    InputProps={{
                      endAdornment: <Lock />
                    }}
                    sx={{width:"45vh",padding:"5px"}}
                  />
                  </Grid>
                  </Grid>
                </Grid>
              }

              
              </Grid>

              <Grid container justifyContent="center" className="rt">
                  <Grid item>
                  {user=="customer"?
                  <Button  variant="contained" style={{color:"white",marginTop:"30px", borderRadius:"50px"}} className="registerbutton">Register</Button>
                  :
                  <Button  variant="contained" style={{color:"white",marginTop:"30px", borderRadius:"50px"}} className="registerbutton">Register</Button>
                  }
                  </Grid>
              </Grid>
              
              

            </Grid>
          </Grid>

        </div>

    );
}

export default Register;