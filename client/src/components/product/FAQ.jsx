import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';


const FAQ=()=>{
    const QA=[

        {
            q:" Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:" As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."

        },
        {
            q:" Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:" As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        {
            q:" Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:" As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        {
            q:" Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:" As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        {
            q:" Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:" Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?"


        },
        {
            q:" Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:" As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        {
            q:" Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:" As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        {
            q:" Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:" As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        {
            q:" Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:" As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        {
            q:" Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:" As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        {
            q:" Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:" As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        {
            q:" Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:" As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        
        

    ];

    return(
    <Container sx={{boder:"1px solid black",borderRadius:"10px",}}>
    <Grid item textAlign="center" justifyItems="center" sx={{marginTop:"15px"}} >
       <Chip size="medium" label="FAQ's" sx={{fontSize:"1.2rem",height: "2rem",borderRadius: "9999px"}}></Chip>
    </Grid> 
    <Grid container sx={{alignContent:"center",marginTop:"20px"}} >
    
    <Grid item>
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        border:"1px solid black",
        borderRadius:"10px",
        '& ul': { padding: 0 },
      }}
      
    >
      
        <li >
          <ul>
          <Grid container spacing={1}>
            {QA.map((item) => (
              <Grid item xs={12} md={6} lg={6}>
              <ListItem >
                <Question txt="Q" />
                <ListItemText primary={item.q} />
                </ListItem>
                <ListItem >
                <Question txt="A" />
                <ListItemText primary={item.a} />
              </ListItem>
             </Grid>
            ))}
            </Grid>
          </ul>
        </li>
      
    </List>
    </Grid>
    </Grid> 
      
    </Container>
    )

}

const Question=(props)=>{

    return(

        <Chip label={props.txt} sx={{marginLeft:"10px",marginRight:"15px"}}>
            
        </Chip>
    )
}

export default FAQ;