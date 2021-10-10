import React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider, useMediaQuery } from '@material-ui/core';
//import { useTheme } from '@emotion/react';

import { makeStyles, useTheme } from '@material-ui/core';
import Grid from '@mui/material/Grid';
//import TabPanel from '@mui/lab/TabPanel';

import Login from '../../Account/User_Login/user_login';

const useStyle = makeStyles(theme => (
    {
        
        mainBoxFor_Tabs_Divider: {
            marginTop: 100,
            display: 'flex',
            padding: 10,
            backgroundColor: 'pink',
            width: '100%',
            height:'100%',
        },
        
        testBox: {
            display: 'flex',
            //backgroundColor: 'green',
            width: 160,
            height: '100%',
            borderRight: '0.1em solid black',
            paddingTop:60,
            
            //only for testing
            marginTop: 95,
            marginLeft: 50,
            marginRight: 30,
            [theme.breakpoints.down('sm')]: {
               marginLeft:10,
                height: 100,
                width: '100%',
                borderBottom: '0.1em solid black',
                
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

const MainDashBoard = () => {

    const classes = useStyle();
    const [value, setValue] = React.useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
  

    return (
        <>
            <Box className={classes.mainBoxFor_Tabs_Divider}>
            <Box className={classes.testBox}> 
                <Tabs
                    orientation={mobileScreen ? 'horizontal' : 'vertical'}
                    variant='scrollable'
                    value={value}
                    onChange={handleChange}
                >

        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three"/>
        <Tab label="Item Four"/>
        <Tab label="Item Five"/>
        <Tab label="Item Six" />
        <Tab label="Item Seven"/>

                    
            </Tabs>
           
                


                </Box>
                <Grid container spacing={2}>
                <TabPanel value={value} index={0}>
                    
                        <Login/>
            </TabPanel>
            </Grid>
            </Box>
            
            {/* <Divider className={classes.verticalDivider} orientation="vertical"/> */}
            
             
           
        </>
    )
}

export default MainDashBoard;
