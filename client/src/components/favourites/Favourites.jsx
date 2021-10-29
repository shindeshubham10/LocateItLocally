import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { Grid } from '@mui/material';


const Favourites = () => {
    
  return (
    <Grid container >
    <Grid
      item
      sx={{
        width: '100%',
        height: 300,
        backgroundColor: '#f3f3f3',
        margin:"200px 45px",
        position:"relative",
        border:"1px solid black",
        borderRadius:"10px",
        
        
      }}
    >
      <Box textAlign="center">
        <Chip label="FAQ's" sx={{position:"absolute",top:"-10px",backgroundColor: '#8FD1D1'}}/>
      </Box>
      </Grid>
      </Grid>
    
  );
}

export default Favourites
