import * as React from 'react';
import {List,ListItemText,ListItem,Grid,Chip,Box,useMediaQuery} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { Divider } from '@material-ui/core';



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
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return(
        <Grid container >
        <Grid
          item
          sx={{
            width: '100%',
            height: 400,
            //backgroundColor: '#f3f3f3',
            margin:"40px 30px",
            position:"relative",
            border:"1px solid black",
              borderRadius: "10px",
           
            
            
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
            //bgcolor: 'background.paper',
             position: 'relative',
        
            overflow: 'auto',
            maxWidth:1200,
            maxHeight: 300,
            margin: mobileScreen ? "30px 0px 20px 0px" : "30px 20px 20px 120px",

            
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
                    <ListItemText primary={item.q} primaryTypographyProps={{ fontSize: mobileScreen ? '1rem':'1.2rem',fontWeight:400,fontFamily:['Roboto','sans-serif']}}/>
                        </ListItem>
                    
                    <ListItem >
                    <Question txt="A" />
                    <ListItemText primary={item.a} primaryTypographyProps={{ fontSize: mobileScreen ? '1rem':'1.2rem',fontWeight:400,fontFamily:['Roboto','sans-serif']}}/>
                </ListItem>
                <Divider/>        
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