
import React, { useEffect } from 'react'

import  { makeStyles,Grid,TextField,OutlinedInput,Box,useTheme,useMediaQuery,InputBase,Card,CardContent, CardMedia,Button} from '@material-ui/core'
import { List, ListItem,ListItemText,ListItemAvatar,Avatar,ListItemIcon ,Checkbox } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { IconButton } from '@material-ui/core';
import { Person, Google, Facebook, Password, } from "@mui/icons-material";
import MenuItem from '@mui/material/MenuItem';
import { borderRadius, color } from '@mui/system';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ListItemButton from '@mui/material/ListItemButton';
import { useDispatch } from 'react-redux';

import { getJobsofbusiness,deleteJobsofbusiness } from '../../../redux/actions/jobActions';
import DeleteIcon from '@mui/icons-material/Delete';
import { Edit } from '@mui/icons-material';
import { Link } from 'react-router-dom';



import UpdateJobOpening from './updatejob';




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
            color: '#A1B3BA',
            fontweight: 'light',
            fontSize: '1.0rem',
            
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.9rem'
            }
        },
        horizontalDivider: {
            //width: '100%',
            width:'82vw',
            marginTop: 20,
        },
        mainBoxScreen: {
            width: '100%',
            backgroundColor:'purple',
        },
        containerForwholeList: {
           // backgroundColor: 'green',
           
        },
        productList: {
           // backgroundColor: 'red',
            width: '100%',
            //marginTop:10,
        },
        productInfoContent: {
            //backgroundColor: 'pink',
            marginTop: 10,
            paddingLeft: 30,
            marginLeft: 40,
            
            [theme.breakpoints.down('sm')]: {
                paddingLeft: 10,
                marginLeft: 10,
                marginRight:0,
            }
        },
        productContentStyle: {
            fontFamily: ['Montserrat', 'sans-serif'],
            fontweight: 'bold',
            fontSize: '1.2rem',

            [theme.breakpoints.down('sm')]: {
                fontSize: '0.9rem',
            }
        },
        avatarstyle: {
            width: '100px',
            height: '100px'
        },
       
        
    }
));







const AllJobs = () => {

    const [jobs,setjobs]=React.useState([]);
    const [todeleteIDs,setdeleteIDs]=React.useState([]);
    const [requestData, setRequestData] = React.useState(new Date());
    const dispatch=useDispatch();
    React.useEffect(()=>{



        dispatch(getJobsofbusiness()).then((data)=>setjobs(data.payload.jobs))

    },[requestData])
    const classes = useStyle();
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const TabletScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    
    // This is used for Category Selection of the form on the page
    const [currency, setCurrency] = React.useState('EUR'); 

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    // For Product Availability
    const [availability, setAvailability] = React.useState('In Stock');
    const handleProductAvailability = (event) => {
        setAvailability(event.target.value);
    };


    // Code To handle CheckBox
    const [checked, setChecked] = React.useState([0]);
    
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }

        console.log(newChecked);
        const arr=[]
        setChecked(newChecked);
        newChecked.map((x)=>(
            
           arr.push(jobs[x]._id)
            
            
        )
        )
        console.log(arr);
        setdeleteIDs(arr);

       
    };
    
    // checkBox Code End
    const deleteproducts=()=>{
        console.log(todeleteIDs);
        dispatch(deleteJobsofbusiness(todeleteIDs)).then((x)=>{
            setRequestData({})
            setChecked([]);
            setdeleteIDs([]);
            console.log(x)});
        
        
        
        
    }


    return (
        <div>  
            {/* <Grid container> */}
            <Typography className={classes.mainHeading} component="div" >All Products</Typography>
                        <Grid item  style={{textAlign:'start',marginTop:'10px',marginLeft:'20px'}}>
                        <Typography className={classes.headingDescription} component="div" >All Jobs are Listed Down Below</Typography>
                        </Grid>

                        <Link to={{ 
                                        pathname: "/businessdashboard/job/add", 
                                        
                                }}>
                                <Button>
                                    ADD JOB
                                </Button>
                        </Link>


                        <IconButton  aria-label="delete" onClick={deleteproducts}>
                                    <DeleteIcon />
                                  </IconButton>
                       
                <Divider className={classes.horizontalDivider} />

            
            <Grid container spacing={2} direction='row' className={classes.containerForwholeList}> {/** Main Grid for both vertical containers */}
               
                <Grid item lg={12} xs={12}>
                    <List className={classes.productList}>
                        
                        {
                            
                            jobs?.map(eachItem => (
                                
                               // List Item Start
                                <>
                                <ListItem alignItems="flex-start" key={jobs.indexOf(eachItem)} >
                                    
                                {/** ListItemButton Start */}
                                <ListItemButton role={undefined} onClick={handleToggle(jobs.indexOf(eachItem))} dense>

                                    <ListItemIcon>
                                        <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(jobs.indexOf(eachItem)) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': jobs.indexOf(eachItem)}}
                                        />
                                    </ListItemIcon>
                                                            
                                                 
                                        

                                        {/* // Container for responsive Product Info*/}
                                        <Grid container direction='row' className={classes.productInfoContent} id={eachItem._id}>

                                        <Grid item lg={3} xs={12} >
                                        <ListItemText>
                                                    <Typography className={classes.productContentStyle}>{eachItem.jobTitle}</Typography>
                                        </ListItemText>
                                        </Grid>
                                        <Grid item lg={3} xs={12} >
                                        <ListItemText>
                                                    <Typography className={classes.productContentStyle}>{eachItem.description}</Typography>
                                        </ListItemText>
                                        </Grid>
                                        <Grid item lg={3} xs={12}>
                                        <ListItemText>
                                                    <Typography className={classes.productContentStyle}>{eachItem.vacancy}</Typography>
                                        </ListItemText>
                                        </Grid>
                                        <Grid item lg={3} xs={12}>
                                       

                                        </Grid>   
                                           

                                        </Grid>
                                        {/* //Responsive product info container ends  */}

                                    </ListItemButton>
                                    {/** ListItemButton End */}
                                    <Link to={{ 
                                        pathname: "/businessdashboard/job/update", 
                                        state: eachItem
                                        }}>
                                        <Edit/>
                                    </Link>
                                    

        
                                </ListItem>
                                <Divider className={classes.horizontalDivider} />
                                </>
                              
                        // List Item End         
                        ))
                        }
                 
            </List> 
            </Grid>
            </Grid> 

            {/* </Grid> */}
        </div>
    )
}

export default AllJobs;
