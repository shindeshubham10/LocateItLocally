import React from "react";
import "./footer.css"
import {Grid, Icon, IconButton,Paper, Typography,makeStyles } from '@material-ui/core';
import logo from "../Logo/LocateItLocally Logo.png"
import {Twitter,Facebook,Instagram,LinkedIn,YouTube,Copyright,LocationOn,ContactMail,Menu,Home,Call,LiveHelp} from "@material-ui/icons"
import { fontFamily } from "@mui/system";




function Footer() {
  const headingstyle={
      fontSize:"30px",
      fontFamily:['Noto Sans', 'sans-serif'],
      fontWeight:"bold"
  }
  
  return (
    <div>
      
      <div className="topdiv">
      <Grid container direction="row">
          <Grid item lg={3} sm={3} xs={6} className="logodiv">
            <a href="#"><img src={logo} className="logoimg"></img></a>
          </Grid>


          <Grid item lg={3} sm={3} xs={6}>
            <Typography style={headingstyle}>Contact Us</Typography>
            
            <p>Email:info@locateitlocally<br></br>
                Phone No:7768424964
            </p>
            <div className="socialicon">
              <a href="#"><Twitter fontSize="large" /></a>
              <a href="#"><Facebook fontSize="large"/></a>
              <a href="#"><Instagram fontSize="large"/></a>
              <a href="#"><LinkedIn fontSize="large"/></a>
              <a href="#"><YouTube fontSize="large"/></a>
          
            </div>
            
          </Grid>
          <Grid item lg={3} sm={3} xs={6} className='address'>
            <h2>Address <LocationOn/></h2>
            <p>Street: A 36, New Empire Indl Estate,<br></br>
                State/area: Maharashtra<br></br>
                Phone number  02236389036<br></br>
                Zip code  400069
            </p>
          </Grid>
          <Grid item lg={3} sm={3} xs={6} className='navigation' >
            <ul>
              <li><a href="#"><Menu/>Menu</a></li>
              <li><a href="#"><Home/>Home</a></li>
              <li><a href="#"><Call/>About</a></li>
              <li><a href="#"><LiveHelp/>FAQs</a></li>
            </ul>
          </Grid>
          <Grid item lg={6} sm={6} xs={6}>
              <p className="copyright">LocateItLocally<Copyright/>2021</p>
              
          </Grid>
          <Grid item lg={6} sm={6} xs={6} container justifyContent={"flex-end"}>
              <p className="powered" >Powerd By QJTechnology</p>
              
          </Grid>
          
      </Grid>

      </div>
    </div>
  );
}

export default Footer;