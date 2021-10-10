import React from 'react'

import  { makeStyles,Grid,TextField,OutlinedInput,Box,useTheme,useMediaQuery,InputBase} from '@material-ui/core'

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { Person, Google, Facebook, Password, } from "@mui/icons-material";
import MenuItem from '@mui/material/MenuItem';
import { borderRadius } from '@mui/system';



const useStyle = makeStyles(theme => (
    {
        mainHeading: {
            marginTop: 80,
            marginLeft: 40,
            marginBottom: 50,
            fontSize: '2.4rem',
            color: '#323232',
            fontFamily: ['Montserrat', 'sans-serif'],
            fontweight: 'bold',
            // '@media(minWidth:600px)': {
            //     fontSize:'1.5rem'
            // }
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.5rem'
            }
        },
        headingDescription: {
            fontFamily: ['Montserrat', 'sans-serif'],
            //fontSize: 20,
            color: '#323232',
            fontweight: 'light',
            fontSize: '1.0rem',
            
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.9rem'
            }
        },
        horizontalDivider: {
            width: '100%',
            marginTop: 20,
        },
        containerForTwoVerticalGrids: {
            //marginLeft: 50,
            marginTop: 30,
           // marginRight: 50,
            //backgroundColor: 'green',
            
            [theme.breakpoints.down('sm')]: {
                marginLeft: 0,
                
            },
        },
        firstVerticalGrid: {
            //backgroundColor: 'red',
            //paddingLeft: 10,
            
            [theme.breakpoints.down('sm')]: {
                alignItems: 'center',
                paddingLeft: 0
            }

            
            
        },
        SecondVerticalGrid: {
            backgroundColor: 'purple',
        },
        
        forFirstColumnTextFields: {
            width: '80%',
            height: '100%',
            marginBottom: 40,
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                height: '100%'
            },
            
        },
        textFieldHeading: {
            fontFamily: ['Noto Sans', 'sans-serif'],
            fontSize: 20,
            fontWeight: '500',
        },
        realTextField: {
            backgroundColor: 'white',
            
        },
    }
));



const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];


const Newproduct = () => {
    const classes = useStyle();
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const TabletScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    // This is used for Category Selection of the form on the page
    const [currency, setCurrency] = React.useState('EUR'); 

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <div>  
            {/* <Grid container> */}
            <Typography className={classes.mainHeading} component="div" >Add New Products</Typography>
                        <Grid item  style={{textAlign:'start',marginTop:'10px',marginLeft:'20px'}}>
                        <Typography className={classes.headingDescription} component="div" >New Products can be added here. When adding products here, do not ignore to fill all the required fields completely and follow up product adding rules</Typography>
                        </Grid>
                       
                <Divider className={classes.horizontalDivider} />
                
            <Grid container spacing={2} direction='row' justifyContent='center' className={classes.containerForTwoVerticalGrids} > {/** Main Grid for both vertical containers */}
                    
                  
                    <Grid item xs={12} md={12} lg={6}  > {/** First Vertical grid */}
                        
                    <Grid container direction='column' className={classes.firstVerticalGrid} >

                        {/*** Product Name */}
                        <Box className={classes.forFirstColumnTextFields}>
                        <Typography className={classes.textFieldHeading} component="div" >Product Name</Typography> 
                        <TextField className={classes.realTextField}
                  fullWidth
                  required
                  variant="outlined"
                  color="primary"
                  type="email"
                  //label="Email"
                  size='medium'
                  placeholder="test@test.com"
                 
                     />
                    </Box>
                        
                        {/** Product Name Instructions */}
                        <Grid item  style={{textAlign:'start',marginBottom:'20px'}}>
                        <Typography className={classes.textFieldInstructions} component="div" >Do not exceed 20 characters when entering the product name</Typography>
                        </Grid>


                     {/*** Category */}
                     <Box className={classes.forFirstColumnTextFields}>
                        <Typography className={classes.textFieldHeading} component="div" >Category</Typography> 
                        <TextField className={classes.realTextField}
                            fullWidth
                            required
                            select
                  variant="outlined"
                  color="primary"
                  value={currency}
                  onChange={handleChange}
                  size='medium'
                  placeholder="test@test.com"
                 
                        >
                                
                                {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                     </TextField>
                        </Box>

                      {/*** for brand and quantity */}  
                        <Grid container direction='row' columnSpacing={{ xs: 1 }}>
                            {/** For Brand */}
                            <Grid items xs={6} md={7} lg={7}>
                            <Box className={classes.forFirstColumnTextFields}>
                        <Typography className={classes.textFieldHeading} component="div" >Brand</Typography> 
                        <TextField className={classes.realTextField}
                            fullWidth
                            required
                            select
                  variant="outlined"
                  color="primary"
                  value={currency}
                  onChange={handleChange}
                  size='medium'
                  placeholder="test@test.com"
                 
                        >
                                
                                {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                     </TextField>
                        </Box>
                            </Grid>

                            {/** For Quantity */}
                            <Grid items xs={4} md={4} lg={4}>
                            <Box className={classes.forFirstColumnTextFields}>
                        <Typography className={classes.textFieldHeading} component="div" >Quantity</Typography> 
                        <TextField className={classes.realTextField}
                                        type="number"
                                        variant="outlined"
                            InputLabelProps={{
                                shrink: true,

                            }}
                            />
                        </Box>
                            </Grid>
                        </Grid>
                        {/** close */}



                        {/** For Description */}
                        <Box className={classes.forFirstColumnTextFields}>
                        <Typography className={classes.textFieldHeading} component="div" >Description</Typography> 
                        <TextField className={classes.realTextField}
                            id="outlined-multiline-static"
                            //label="Multiline"
                            fullWidth
                            multiline
                            rows={4}
                            defaultValue="Description"
                            variant='outlined'
                            />
                        </Box>
                        {/** Description Instructions */}
                        <Grid item  style={{textAlign:'start',marginBottom:'20px'}}>
                        <Typography className={classes.textFieldInstructions} component="div" >Do not exceed 100 characters when entering the product description</Typography>
                        </Grid>



                        </Grid>

                        </Grid>
                  

                  
                    <Grid item lg={6} xs={12} md={12} > {/** Second Vertical grid */}
                    <Grid container direction='column' className={classes.SecondVerticalGrid}>
                    <TextField className={classes.realTextField}
                            required
                     
                    variant="standard"
                    color="primary"
                    type="email"
                    label="Email"
                    size="medium"
                    placeholder="test@test.com"
                  />
                    </Grid>
                    
                        </Grid>
                  
                
                </Grid> 

            {/* </Grid> */}
        </div>
    )
}

export default Newproduct
//alignItems={mobileScreen || TabletScreen ? 'center' : 'flex-start' }