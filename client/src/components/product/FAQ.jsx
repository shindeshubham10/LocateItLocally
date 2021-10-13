
import {Box,Typography,Grid,Chip,withStyles,Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";



const useStyles=makeStyles(theme=>(
            {
                root:{

                    
                        marginTop:250,
                        backgroundColor:'white',
                        gap:50,
                        
                        
                        
                       
                        borderStyle:'groove',
                        borderRadius:10,
                       
                        
                    
                    
                    
                },
                txt:{

                    fontFamily:"Monteserrat",
                },
               /* main:{
                    display:'flex',
                    gap:50,
                },*/

                chip:{
                    position:'relative',
                    left:450,
                    bottom:20,
                    width:100,
                    backgroundColor:'white'

                },
                main:{

                


                },

            }

    )
);
const StyledChip = withStyles({
    root: {
        
        
    },
    label:{
        fontWeight:'bold',
        
    }
  })(Chip);
const FAQ=()=>{
    const classes=useStyles();
    const QA=[

        {
            q:"Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:"As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."

        },
        {
            q:"Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:"As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        {
            q:"Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:"As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        {
            q:"Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:"As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        {
            q:"Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:"Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?"


        },
        {
            q:"Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:"As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        {
            q:"Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:"As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        {
            q:"Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:"As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        {
            q:"Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:"As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        {
            q:"Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:"As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        {
            q:"Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:"As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        {
            q:"Does The Sonos One Pair Up With A Sonos Play1 As A Stereo Pair ?",
            a:"As long as the players are grouped in a configuration to your liking, you can ask Alexa on the Sonos One or on an echo device to start music and playback will begin across the Sonos grouping."


        },
        
        

    ];

    return(
        
        <Container>
            <StyledChip label="FAQs"/>
            <Grid container  className={classes.root} justifyContent="space-around" >
           
            {
                
                 QA.map(
                    item1 => (
                       
                        <Grid item  md={5} xs={12}  >
                            <Box style={{marginTop:20,display:'flex',gap:10}}>
                                <Question txt="Q"/>
                                <Typography className={classes.txt}>
                                    {item1.q}
                                </Typography>
                            </Box>
                             <Box style={{marginTop:20,display:'flex',gap:10}} >
                                 <Question txt="A"/>
                                <Typography className={classes.txt} style={{marginLeft:'20',}}>
                                    {item1.a}
                                </Typography>
                            </Box> 
                        </Grid>
                       

    
                        
    
                    )
                )
                
 }
                

            </Grid>
        </Container>
        
            
    

        
    );

}

const Question=(props)=>{

    return(

        <Box style={{backgroundColor:"#C4C4C4",borderRadius:60,width:30,height:25}}>
            <Typography style={{fontWeight:'bold',fontFamily:'Monteserrat',fontSize:20,width:"100%",height:"100%",marginLeft:5,}}>
                {props.txt}
            </Typography>
        </Box>
    )
}

export default FAQ;