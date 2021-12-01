import React from 'react'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography,useMediaQuery} from '@material-ui/core';

import Reviews from './reviews';
const useStyle = makeStyles(theme=>({
    
        
}))
const Description = () => {

    const classes=useStyle()
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [alignment, setAlignment] = React.useState('A');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const content = <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti quod eligendi exercitationem iste laborum, voluptatem adipisci aliquam ex fuga?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates reprehenderit ut asperiores neque quos. Saepe, incidunt reprehenderit vel provident cum mollitia maxime corrupti vero voluptatem porro placeat quam iusto id fugiat modi repellat amet veniam optio exercitationem eum aliquam nisi? Quisquam tempore hic sed saepe repellendus atque debitis repudiandae maxime veritatis quae minus animi, ut a excepturi vero fuga? Commodi?</div>
    return (
        <Grid container >
            <Grid
            item xs={12}
            sx={{
                width: '100%',
                minHeight:300,
                backgroundColor: '#f3f3f3',
                margin:"40px 20px",
                position:"relative",
                border:"1px solid black",
                borderRadius:"10px",
                flexGrow:"1",
                
            }}
            >
            <Box 
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                className={classes.togglebox}
            >
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    color="primary"
                    size="small"
                    
                    
                    
                    onChange={handleAlignment}
                    sx={{position:"absolute",top:"10px",textAlign:"center",}}
                    >
                    <ToggleButton  sx={{borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px",color:'black',fontFamily:['Monteserrat','sans-serif'],fontWeight:600}} value="A" >
                        Description 
                    </ToggleButton>
                    <ToggleButton  value="B" sx={{color:'black',fontFamily:['Monteserrat','sans-serif'],fontWeight:600}} >
                        Specification 
                    </ToggleButton>
                    <ToggleButton  sx={{borderTopRightRadius:"20px",borderBottomRightRadius:"20px",paddingRight:"30px",color:'black',fontFamily:['Monteserrat','sans-serif'],fontWeight:600}} value="C" >
                        Review 
                    </ToggleButton>
                    
                </ToggleButtonGroup>  
            </Box>
            <Grid sx={{textAlign:"center",margin:"60px 20px 20px 20px"}}>
            { alignment=="A"?
                <Typography> {content} - Desc</Typography>
            :
            alignment=="B"?
                <Typography> {content} - Specs </Typography>
            :
              <Reviews/>
            }
            </Grid>
          </Grid>
        </Grid>
    )
}

export default Description
