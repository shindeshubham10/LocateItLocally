
import {Grid,Box,makeStyles, Typography,Rating,List,Button, ListItemIcon,Divider, ListItemText, CardHeader,Card, CardContent, ListItem} from '@material-ui/core'
import {FavoriteOutlined,LocationDisabled,Star,PermDeviceInformationOutlined,CallOutlined} from '@material-ui/icons';
import ReactStars from "react-rating-stars-component";
import {ArrowRight} from '@material-ui/icons';

 
const useStyles=makeStyles(theme=>(


    {
        root:{
            marginTop:150,
            display:'flex',
            
            justifyContent:"center",
            gap:"25px",
            [theme.breakpoints.down('sm')]: {
              
            },
           


        },

        first:{
            width:100,
           
        },

        firstbox:{

            width:"100%",
            

        },

        second:{

            width:400,
            height:400,
            

        },
        secondbox:{
            width:"100%",
            height:"100%",
            
        },

        third:{

            [theme.breakpoints.down('sm')]: {
                marginLeft:'10px'
                   
            },
        },
        contacts:{

            borderStyle:'groove',
            borderRadius:10,
            marginTop:10,
        }




    }
)

)


const Product=()=>{
    
        const features_=[
            "Connects directly to Bluetooth",
            "Battery Indicator light",
            "Selection:2600/2000/1600/1200/800",
            "Computers running Windows",




        ];



        const classes=useStyles();
        return(

            <Grid container className={classes.root}>
                <Grid item className={classes.first}>
                    <Box className={classes.firstbox}>
                        <img style={{width:"100%",height:"auto"}}src="https://cdn.shopify.com/s/files/1/0067/6429/8297/products/sound2_79x79.jpg?v=1569164954" alt=""/>
                    </Box>
                </Grid>
                <Grid item className={classes.second} >

                    <Box className={classes.secondbox} >
                        <img style={{width:"100%",height:"100%"}} src="https://cdn.shopify.com/s/files/1/0067/6429/8297/products/sound2_79x79.jpg?v=1569164954" alt=""/>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={4} className={classes.third}>
                    <Typography>
                        Audio Speakers
                    </Typography>
                    <ReactStars
                            count={5}
                            
                            size={24}
                            activeColor="#ffd700"
                        />
                    <Typography style={{fontFamily:'Montserrat',marginTop:10,}}>
                        Codeless Trackman Wheel 2
                    </Typography>
                    <Typography style={{fontWeight:'bold',marginTop:10,}}>
                        1225
                    </Typography>
                    <Typography style={{marginTop:10,fontFamily:"Monteserrat"}}>
                    Uses a dictionary of over combined with a handful of model sentence structures, to generate lorem Ipsum which looks reasonable.My name is  anthony gp
                    </Typography>
                    
                    <Box>
                        <List>
                            {
                                 features_.map(
                                    item =>(
                                        <ListItem key={item}>
                                                {/* <ListItemIcon>
                                                    <ArrowRight/>
                                                </ListItemIcon>
                                                <ListItemText>
                                                    {item}
                                                </ListItemText> */}
                                                <ArrowRight/>
                                                {item}
                                        </ListItem>

    
                                    )
                                )

                            }
                           

                        </List>
                    </Box>
                    <Button  style={{backgroundColor:'#38495A',}}variant="contained" endIcon={<FavoriteOutlined/>}>
                         <Typography style={{fontweight:'bold',color:'white'}}> ADD TO FAVOURITES</Typography> 
                     </Button>


                </Grid>

                <Grid item xs={12} lg={2} style={{fontFamily:'Monteserrat'}} >
                    <Box style={{borderStyle:'groove',borderRadius:10}}>
                    <Box >
                    <Box style={{display:'flex',marginTop:10}}>
                        <PermDeviceInformationOutlined/>
                        <Typography style={{fontFamily:'Monteserrat'}}>
                            Seller Information
                        </Typography>
                    </Box>
                    <Box style={{marginLeft:10,marginTop:10,}}>
                        <Typography style={{fontFamily:'Monteserrat'}}>
                            Ratnadeep Socielty Civil lines solapur 
                        </Typography>
                    </Box>
                    </Box>
                    <Divider/>
                    <Box >
                        <Box style={{display:'flex',marginTop:10}}>
                            <LocationDisabled/>
                            <Typography style={{fontFamily:'Monteserrat'}}>
                                Seller Address
                            </Typography>
                        </Box>
                        <Box style={{marginLeft:10,marginTop:10,}}>
                        <Typography style={{fontFamily:'Monteserrat'}}>
                            Ratnadeep Socielty Civil lines solapur 
                        </Typography>
                        </Box>
                        

                    </Box>
                    <Divider/>
                    <Box >
                    <Box style={{display:'flex',marginTop:10}}>
                            <Star/>
                            <Typography style={{fontFamily:'Monteserrat'}}>
                                Seller Rating
                            </Typography>
                        </Box>
                        <Box  style={{marginLeft:10,marginTop:10,}}>
                            <ReactStars
                                count={5}
                               
                                size={24}
                                activeColor="#ffd700"
                            />
                        </Box>
                        
                        


                    </Box>
                    </Box>

                
                
                    <Box className={classes.contacts}>
                        <Box style={{display:'flex',marginTop:10,}}>
                            <CallOutlined/>
                            <Typography style={{fontFamily:'Monteserrat'}}>
                                Contact Details
                            </Typography>
                        </Box>

                        <Box style={{marginTop:10,marginLeft:10}}>
                            <Typography style={{fontFamily:'Monteserrat'}}>
                                9309818227
                            </Typography>
                        </Box>

                    </Box>

                
                </Grid>
                
            </Grid>

        

        );




}

export default Product;