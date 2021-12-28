import React from "react";
import {Grid,TextField,Button,makeStyles,Typography} from '@material-ui/core';
import {ToggleButtonGroup,ToggleButton} from "@mui/material"
import './user_login_style.css'
import {Link} from 'react-router-dom';
import { Redirect } from "react-router";


import {Person,Google,Facebook,Password,} from "@mui/icons-material";


//import  {UserSignIn,BusinessSignIn}  from "../../../service/api";

import { BusinesssignIn } from "../../../redux/actions/businessauthActions";

import { UsersignIn } from "../../../redux/actions/userauthActions";
import {useDispatch} from "react-redux"

import LoginSuccessDialog from '../../alertDialogs/loginSuccess';

import LoginErrorDialog  from '../../alertDialogs/loginError';

const useStyles=makeStyles(theme=>(
  {
    error:{
      fontSize:15,
      marginTop:0,
      fontWeight:600,
      color:'red',

    }
  
      
      

  }

)
);
const signInInitialValues = {

  email: "",
  hash_password: "",
};

const signInBusinessInitialValues = {

  email: "",
  password: "",
};



function Login(props)
{
  const classes=useStyles()
  const [user, setUser] = React.useState('customer');
    const handleUserBusiness = (event, obj) => {
      if (obj !== null) {
        setUser(obj);
        
      }
    };

  
    const [signinState, setsigninState] = React.useState(signInInitialValues);
    const [signinbusinessState, setsigninbusinessState] = React.useState(signInBusinessInitialValues);

    const [successDialog,setsuccessDialog] = React.useState(false);
    const [errorDialog,seterrorsDialog] = React.useState(false);
    const [error,setError]=React.useState(false)

    const [move,setmove]=React.useState(false)

    const dispatch=useDispatch();

  
  
    const signInUser = async () => {
      console.log("enter into sign in function");
      dispatch(UsersignIn(signinState)).then((validatedUserResponse)=>{
        console.log("Response after  User login ==== ",validatedUserResponse);
        if (validatedUserResponse.type=="ERROR")
      {
        setError(true);
        seterrorsDialog(true);
        return;
      }
      else
      {
       // setmove(true);
       setsuccessDialog(true);

      }
      
      })
      //console.log(response);
      
       
    
    };

    const signInBusiness = async () => {
      console.log("enter into function");
      //let response = await BusinessSignIn(signinbusinessState);
      dispatch(BusinesssignIn(signinbusinessState)).then((validatedResponse)=>{
        console.log("Response after login ==== ",validatedResponse);
        console.log("Rsponse TYPE ========== ",validatedResponse.type);

        // validat.type == "success" ERROR
      if (validatedResponse.type=="ERROR")
      {
        seterrorsDialog(true);
        setError(true);
      
        return;
      }
      else
      {
        setsuccessDialog(true);
        //setmove(true);
        

      }


      })

      // console.log(response);
      // if (!response)
      // {
      //   setError(true);
      //   return;
      // }
      // else
      // {
      //   setmove(true);

      // }
    
    };

    const onInputChange = (event) => {
      setsigninState({ ...signinState, [event.target.name]: event.target.value });
      console.log(signinState);
    };

    const onbusinessInputChange = (event) => {
      setsigninbusinessState({ ...signinbusinessState, [event.target.name]: event.target.value });
      console.log(signinbusinessState);
    };

    return(
      move? <Redirect to={{
        pathname: '/',
        
    }}
/>:
        <div>
          <Grid container direction="row" className="main">
            
            {/* Sign in box  */}
            <Grid item lg={9} xs={12}>
            
            <Grid container  className="p2" direction="row" >
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
                                color="standard"
                              
                              >
                              <ToggleButton 
                              sx={{borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px",}} 
                              size="small" 
                              value="customer" 
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
                          {user=="customer"? <h1 style={{fontSize:'50px'}}> Login </h1> :<h1 style={{fontSize:'50px'}}> Business Login </h1>}
                        </Grid>
                        <Grid item>
                        <a href="#"><Google fontSize="large"/></a>
                        <a href="#"><Facebook fontSize="large"/></a>
                        </Grid>
                        <Grid item style={{marginBottom:20}}>
                        <p>Or Use your Email for Sign in</p>
                        </Grid>
                        
                    </Grid>
                </Grid>


                <Grid item lg={12} sm={12} xs={12} justifyContent="center">
                { user=="customer"? 
                
                  <Grid container direction="row" className="t" spacing='1'>
                    <Grid item lg={12} sm={12} xs={12}>
                      <TextField
                        required
                        name="email"
                        onChange={(e)=>onInputChange(e)}
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
                        name="hash_password"
                        onChange={(e)=>onInputChange(e)}
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

                      <Grid item lg={12} sm={12} xs={12}>

                              {error && <Typography className={classes.error}>Invalid Email or Password</Typography>}

                      </Grid>
                      

                      
                  </Grid>
                :
                
                  <Grid container direction="column" className="t" spacing='3'>
                    <Grid item lg={12} sm={12} xs={12} >
                      <TextField
                        required
                        name="email"
                        onChange={(e)=>onbusinessInputChange(e)}
                        variant="standard"
                        color="primary"
                        type="email"
                        label="Business Email"
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
                        onChange={(e)=>onbusinessInputChange(e)}
                            variant="standard"
                            color="primary"
                            type="password"
                            label="Password"
                            size="medium"
                            name="password"
                            placeholder="**********"
                            InputProps={{
                            endAdornment: <Password/>
                            }}
                            sx={{width:"45vh",padding:"5px"}}
                        />
                    </Grid> 
                    { error && <Typography className={classes.error}>Please enter valid Email ID/Password</Typography> }
                  </Grid>
                }
                </Grid>
              </Grid>

              <Grid container justifyContent="center" className="t">
                  <Grid item>
                  { user=="customer"?
                  
                  <Button style={{color:"white",marginTop:"30px", borderRadius:"50px",fontWeight:"bold"}} onClick={()=>signInUser()} className="loginbutton" >Sign in</Button>
                  :
                  <Button style={{color:"white",marginTop:"30px", borderRadius:"50px"}} onClick={()=>signInBusiness()} className="loginbutton" >Sign in</Button>
                  }
                  </Grid>
              </Grid>
              
              

            </Grid>
            {/* Sign in box ends */}
            {/* Side bar box  */}
            <Grid item lg={3} sm={12} xs={12} >
              <Grid  container direction="column" className="p1">
                <Grid item  style={{marginTop:'30px',marginLeft:"30px"}}>
                  <h1>Welcome Back !!</h1>
                </Grid>
                <Grid item>
                  
                    <p className="para">
                      To keep connected 
                      with us please login with
                      your personal info
                    </p>
                    
                </Grid>
                  <Grid item style={{textAlign:'center',marginTop:'30px'}}>
                    <p>Dont't Have a Account ?</p>
                    <Link to="/register"><Button style={{color:"white",marginTop:"30px", borderRadius:"50px",fontWeight:"bold",marginTop:"60px"}} className="loginbutton" >Register</Button></Link>
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
          
          {/* Side bar box ends */} 
          <LoginSuccessDialog successDialog={successDialog} setsuccessDialog={setsuccessDialog} />
          <LoginErrorDialog errorDialog={errorDialog} seterrorDialog={seterrorsDialog} />
        </div>
        

    );
}

export default Login;