import { Grid, makeStyles, Paper, Typography ,Box, useMediaQuery, useTheme} from '@material-ui/core'
import React from 'react'
import CoverImage from "./coverImage.jpg"
import ProfileImage from "./profileImage.png"
import ReactStars from "react-rating-stars-component";
// import {LocationOn} from "@material-ui/icons"
// import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
// import Newproduct from '../BusinessOwner/Product_Management/AddNewProduct/new_product';
// import ViewAllProducts from '../BusinessOwner/Product_Management/AllProducts/allProducts';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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

const item={
    "name":"Adidas",
    "desc":"We are dedicated to sell best quality products at reasonable prices.",
    "addr":"New York City,New York, United States.",
    "details":"Joined Since 2018 | Total Products 9",
    "rating" : 4,
}
const useStyles= makeStyles(theme=>({
    paper:{
        margin:"200px 20px 20px 20px",
        padding:"15px",
    },
    main:{
        margin:"20px",
        width:"auto",
        [theme.breakpoints.down('sm')]:{

        },
    },
    img:{
    width:"100%",
    height:"300px",
    marginRight:"50px",
    [theme.breakpoints.down('sm')]:{
        height:"150px",
        
        
    },

    },
    profile:{
        width:"150px",
        height:"150px",
        marginTop:"10px",
        marginLeft:"50px",
        borderRadius:"50%",
        border:"1px solid black",
        [theme.breakpoints.down('sm')]:{
            width:"65px",
            height:"65px",
            marginLeft:"0px",
            marginRight:"0px",
        },
    },
    cover:{
        marginRight:"75px",
        marginLeft:"75px", 
        [theme.breakpoints.down('sm')]:{
            marginRight:"10px",
            marginLeft:"10px", 
        },
    },
    second:{
       marginRight:"50px",
       marginLeft:"50px", 
       display:"flex",
       [theme.breakpoints.down('sm')]:{
        marginRight:"10px",
        marginLeft:"10px",
       },
    },
    tp:{
        margin:"10px 0px 10px 0px",
        [theme.breakpoints.down('sm')]:{
            margin:"0px",
        }
    },
    list:{
        listStyle:"none",
    },
    text:{
        fontWeight:"900",
        flexGrow:"1",
        fontFamily:"Roboto,sans-serif",
        [theme.breakpoints.down('sm')]:{
            fontSize:"0.5rem",
            padding:"5px",
            
            
        }
    },
    mainBoxFor_Tabs_Divider: {
            marginLeft:"75px",
            marginRight:"75px",
             display:'Grid',
             [theme.breakpoints.down('sm')]:{
                marginLeft:"10px",
                marginRight:"10px",
             },
       
    },
    testBox: {
        
           display:'Grid',
            marginLeft: 10,
            marginRight:10,
            
            width: '100%',
            borderBottom: '0.1em solid #A1B3BA',
            borderRight: 'none',
            
        
    },
    default_tabStyle:{
        

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
        backgroundColor: '#ff6868',
        borderRadius: 5,
       },
}))

const ShopDetails = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const TabletScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Paper flexGrow={2} elevation={5} className={classes.paper}>
        <Grid container className={classes.main}>
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.cover}>
                <img src={CoverImage} alt="Cover Image" className={classes.img}></img>
            </Grid>
        </Grid>
            
                <Grid container className={classes.second} alignItems="center">
                    <Grid item xs={3}>
                        <img src={ProfileImage} alt="Profile Image" className={classes.profile}></img>
                    </Grid>
                    <Grid item xs  className={classes.tp}>
                    <ul className={classes.list}>
                        <li>

                            <Typography variant="h6" gutterBottom component="div" className={classes.text} >
                                    {item.name}
                            </Typography>
                        </li>
                        <li>

                            <Typography variant="h8" gutterBottom component="div" className={classes.text} >
                            {item.desc}
                            </Typography>
                        </li>
                        <li>
                            
                            <Typography variant="h8" gutterBottom component="div" className={classes.text} >
                             {item.details}
                            </Typography>
                        </li>
                        <li>
                            
                            <Typography variant="h8" gutterBottom component="div" className={classes.text}>
                            {item.addr}
                            </Typography>
                        </li>
                        <li>
                            <ReactStars 
                                count={5}
                                size={mobileScreen?8:24}
                                value={item.rating}   
                            />
                        </li>
                    </ul>
                        
                    </Grid>
                </Grid>
             
            
            <Box className={classes.mainBoxFor_Tabs_Divider}>
            
            <Box className={classes.testBox}>
                <Tabs
                    orientation='horizontal'
                    variant='scrollable'
                    value={value}
                    onChange={handleChange}
            >

                    <Tab label="Seller Products" className={ value===0 ? classes.active_tabStyle : classes.default_tabStyle  } />
                    <Tab label="Reviews"  className={ value===1 ? classes.active_tabStyle : classes.default_tabStyle  }/>
                    <Tab label="Description" className={ value===2 ? classes.active_tabStyle : classes.default_tabStyle  }/>
                    <Tab label="Policy" className={ value===3 ? classes.active_tabStyle : classes.default_tabStyle  }/>
                    <Tab label="Photos" className={ value===4 ? classes.active_tabStyle : classes.default_tabStyle  }/>
                    
                </Tabs>
    
            </Box>
            {/* <Grid container spacing={2}> */}
            <TabPanel value={value} index={0}>
                    <Typography gutterBottom component="div" style={{fontFamily:"Montserrat,sans-serif",fontWeight:"700"}}  >
                    Seller Products
                    </Typography>     
            </TabPanel>
                
            <TabPanel value={value} index={1}>
                    <Typography gutterBottom component="div" style={{fontFamily:"Montserrat,sans-serif",fontWeight:"700"}}  >
                    Reviews 
                    </Typography>      
            </TabPanel>
            <TabPanel value={value} index={2}>
                    <Typography gutterBottom component="div" style={{fontFamily:"Montserrat,sans-serif",fontWeight:"700"}}  >
                    Description
                    </Typography>      
            </TabPanel>
            <TabPanel value={value} index={3}>
                    <Typography gutterBottom component="div" style={{fontFamily:"Montserrat,sans-serif",fontWeight:"700"}}  >
                    Policy 
                    </Typography>      
            </TabPanel>
            <TabPanel value={value} index={4}>
                    <Typography gutterBottom component="div" style={{fontFamily:"Montserrat,sans-serif",fontWeight:"700"}}  >
                    Photos 
                    </Typography>      
            </TabPanel>
            
            {/* </Grid> */}
            </Box>
            

        
        </Paper>
    )
}



export default ShopDetails