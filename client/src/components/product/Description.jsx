import React from 'react'
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@material-ui/core';
const useStyle = makeStyles(theme=>({
    container:{
        marginTop:15,
        marginBottom:15,
        marginRight:50,
        marginLeft:50,
        
    },
}))
const Description = () => {

    const classes=useStyle()
    
    const [alignment, setAlignment] = React.useState('A');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const content = <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corrupti quod eligendi exercitationem iste laborum, voluptatem adipisci aliquam ex fuga?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates reprehenderit ut asperiores neque quos. Saepe, incidunt reprehenderit vel provident cum mollitia maxime corrupti vero voluptatem porro placeat quam iusto id fugiat modi repellat amet veniam optio exercitationem eum aliquam nisi? Quisquam tempore hic sed saepe repellendus atque debitis repudiandae maxime veritatis quae minus animi, ut a excepturi vero fuga? Commodi?</div>
    return (
        <Grid className={classes.container}>
        
        <Grid item textAlign="center" justifyItems="center" >
            <ToggleButtonGroup
                value={alignment}
                exclusive
                color="standard"
                size="small"
                onChange={handleAlignment}
                sx={{marginTop:"10px"}}
                >
                    <ToggleButton  sx={{borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px"}}value="A" >
                        Description 
                    </ToggleButton>
                    <ToggleButton  value="B" >
                        Specification 
                    </ToggleButton>
                    <ToggleButton  sx={{borderTopRightRadius:"20px",borderBottomRightRadius:"20px",paddingRight:"30px"}} value="C" >
                        Review 
                    </ToggleButton>
                    
                </ToggleButtonGroup>  
            </Grid>
        { alignment=="A"?
        <Grid sx={{textAlign:"center",margin:"20px"}}>
            <Typography> {content}</Typography>
        </Grid>
        :
        alignment=="B"?
        <Grid sx={{textAlign:"center",margin:"20px"}}>
            <Typography> {content} 
            </Typography>
        </Grid>
        :
        <Grid sx={{textAlign:"center",margin:"20px"}}>
        <Typography> {content}</Typography>
        </Grid>
        }
        
        </Grid>
    )
}

export default Description
