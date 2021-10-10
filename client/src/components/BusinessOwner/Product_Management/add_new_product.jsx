import React from 'react';

//import Tabs from '@mui/material/Tabs';
//import Tab from '@mui/material/Tab';


import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@mui/material/Box';
import { Divider, useMediaQuery } from '@material-ui/core';
//import { useTheme } from '@emotion/react';

import { makeStyles, useTheme } from '@material-ui/core';
import Grid from '@mui/material/Grid';
//import TabPanel from '@mui/lab/TabPanel';

import Login from '../../Account/User_Login/user_login';
import { Person, Google, Facebook, Password, } from "@mui/icons-material"

import { TextField } from '@mui/material';
import { minWidth } from '@mui/system';
import Newproduct from './AddNewProduct/new_product';


const useStyle = makeStyles(theme => (
    {
        
        mainBoxFor_Tabs_Divider: {
            marginTop: 100,
            display: 'flex',
            padding: 10,
           // backgroundColor: 'pink',
            width: '100%',
            height: '100%',
            
            
             [theme.breakpoints.down('sm')]: {
                 display:'Grid',
            },
            [theme.breakpoints.between('sm','md')]: {
                display:'Grid',
            },
        },
        tablabels: {
            fontFamily: ['Noto Sans', 'sans-serif'],
            fontSize: '1rem',
            fontWeight: '500',
            backgroundColor: 'red',
            borderRadius: 5,
            
           
        },
        
        testBox: {
            //display: 'flex',
            //backgroundColor: 'green',
            width: 160,
            height: '100%',
            borderRight: '0.1em solid #A1B3BA',
            //paddingTop:60,
            
            //only for testing
            //marginTop: 40,
            marginLeft: 50,
            marginRight: 30,
            [theme.breakpoints.down('sm')]: {
               display:'Grid',
                marginLeft: 10,
                marginRight:10,
                height: 100,
                width: '100%',
                borderBottom: '0.1em solid #A1B3BA',
                borderRight: 'none',
                
            }
        },
        firstpanel: {
            width: '100%',
            height: '100%',
            backgroundColor:'red',
        },
        verticalDivider: {
            height: 400,
            marginLeft:200,
        },

        mainHeading: {
           // marginTop:80,
            marginLeft: 10,
            marginBottom: 50,
            fontSize:'1.5rem',
            color: '#323232',
            fontFamily: ['Montserrat', 'sans-serif'],
            fontweight:'bold',
            // '@media(minWidth:600px)': {
            //     fontSize:'1.5rem'
            // }
            [theme.breakpoints.down('sm')]: {
                fontSize:'0.8rem'
            }
        },
        headingDescription: {
            fontFamily: ['Montserrat', 'sans-serif'],
            //fontSize: 20,
            color: '#323232',
            fontweight: 'light',
            fontSize: '1.0rem',
            
            [theme.breakpoints.down('sm')]: {
                fontSize:'0.9rem'
            }
        },
        horizontalDivider: {
            width: '100%',
            marginTop:20,
        },


        default_tabStyle:{
            // color: 'black',
            // fontSize:11,
            // backgroundColor: 'blue',



            fontFamily: ['Noto Sans', 'sans-serif'],
            fontSize: '1rem',
            fontWeight: '500',
            backgroundColor: 'transparent',
            borderRadius: 5,
        },
        active_tabStyle:{
            fontFamily: ['Noto Sans', 'sans-serif'],
            fontSize: '1rem',
            fontWeight: '500',
            fontColor:'black',
            backgroundColor: '#D0D7DA',
            borderRadius: 5,
           }
    }
));

function TabPanel(props) {
    const { children ,value,index} = props;
    return (
        <div>
            {
                value === index && (
                    <h1>{children }</h1>
                )
           }
        </div>
    )
}

const AddNewProduct = () => {

    const classes = useStyle();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
  

    return (
        <>
            {/* <Typography className={classes.mainHeading} component="div" >DashBoard</Typography> */}
            <Box className={classes.mainBoxFor_Tabs_Divider}>
            
                <Box className={classes.testBox}>
                 <Typography className={classes.mainHeading} component="div" >DashBoard</Typography>     
                <Tabs
                    orientation={mobileScreen ? 'horizontal' : 'vertical'}
                    variant='scrollable'
                    value={value}
                    onChange={handleChange}
                >

        <Tab label="Add Product" className={ value===0 ? classes.active_tabStyle : classes.default_tabStyle  } />
        <Tab label="Item Two"  className={ value===1 ? classes.active_tabStyle : classes.default_tabStyle  }/>
        <Tab label="Item Three" className={ value===2 ? classes.active_tabStyle : classes.default_tabStyle  }/>
        <Tab label="Item Four" className={ value===3 ? classes.active_tabStyle : classes.default_tabStyle  }/>
        <Tab label="Item Five" className={ value===4 ? classes.active_tabStyle : classes.default_tabStyle  }/>
        <Tab label="Item Six" className={ value===5 ? classes.active_tabStyle : classes.default_tabStyle  }/>
        <Tab label="Item Seven" className={ value===6 ? classes.active_tabStyle : classes.default_tabStyle  }/>

                    
            </Tabs>
        
        </Box>
                {/* <Grid container spacing={2}> */}
                    <TabPanel value={value} index={0}>
                    <Newproduct/>        
                    </TabPanel>
            {/* </Grid> */}
            </Box>
            
            {/* <Divider className={classes.verticalDivider} orientation="vertical"/> */}
            
             
           
        </>
    )
}

export default AddNewProduct;
