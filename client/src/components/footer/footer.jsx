import React from "react";
import "./footer.css"
import {Grid, Icon, IconButton,Paper } from '@material-ui/core';

import {Twitter,Facebook,Instagram,LinkedIn,YouTube,Copyright,LocationOn,ContactMail,Menu,Home,Call,LiveHelp} from "@material-ui/icons"


function Footer() {
  return (
    <div>
      
      <Grid container className='main'>
          <Grid item lg={3} sm={3} xs={6}>
            <a href="#"><img src="https://s3-alpha-sig.figma.com/img/878d/5004/35fa8ac75b99cc29a464ec310289ea9c?Expires=1632700800&Signature=INooMoo7crezLzOKDOMgjHJrB3bsWCdk7oc4nMGoIehYmfpDENc-m-pZLUGYiz5lkzUpe7tO1FgUc5jieLXaTNtVz~tu5zrMvpLGuMAdfJD2Zkknao33JH-tLEejpB5bb5Ppl13~NZaizJBZlowGGJsmZZrEGxDyK84B5cQn2N-HO6ylkZOffJ385wdf1dj0oqZmKPCt9tIzHCpXt~C8-0RUP-7h~~bHeK-3XFIYPmslAQ~5JvoGtQgHZ9fV14iOH5-GZi~YdaPCtT17cca4k-jaB3cuilJ6wpmiTKf2H2qnOsnlh4TL3InODtmoat4~8CDyl5Vl6elDXrMfpyR5Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img></a>
          </Grid>
          <Grid item lg={3} sm={3} xs={6}>
            <h2>Contact Us    <ContactMail/></h2>
            <p>Email:info@locateitlocally.com<br></br>
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
             Kondivita Road,J B Nagar,Andheri(west)<br></br>
                State/area: Maharashtra<br></br>
                Phone number  02236389036<br></br>
                Zip code  400069
            </p>
          </Grid>
          <Grid item lg={3} sm={3} xs={6} className='navigation' >
            <ul>
              <li><a href="#"><Menu/>Menu</a></li>
              <li><a href="#"><Home/>Home</a></li>
              <li><a href="#"><Call/>About Us</a></li>
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
  );
}

export default Footer;