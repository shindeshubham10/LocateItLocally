import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"
import Box from '@mui/material/Box';
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
        <Grid container >
        <Grid
          item
          sx={{
            width: '100%',
            height: 400,
            backgroundColor: '#f3f3f3',
            margin:"40px 60px",
            position:"relative",
            border:"1px solid black",
            borderRadius:"10px",
            
            
          }}
        >
        <Box
            display="flex" 
            flexDirection="column"
            alignItems="center"
            justifyContent="center" 
        >
            <Chip label="FAQ's" sx={{position:"absolute",top:"-15px",backgroundColor: '#8FD1D1'}}/>
        </Box>
          
        <List
        sx={{
            width: '100%',
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxWidth:1200,
            maxHeight: 300,
            margin:"30px 20px 20px 20px",
            width:{xs:"80%",},
           
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
    );

}

const Question=(props)=>{

    return(

        <Chip label={props.txt} sx={{marginLeft:"10px",marginRight:"15px"}}>
            
        </Chip>
    )
}

export default FAQ;