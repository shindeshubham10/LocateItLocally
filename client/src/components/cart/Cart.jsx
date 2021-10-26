
import {withStyles,Paper,Chip,Grid,Card,Box,ListItem,makeStyles,Button,List, CardActions, CardContent,Container, CardHeader, Divider,TextareaAutosize, Typography, ListItemText} from "@material-ui/core"
import CartItem from "./CartItem"
import { cartitems } from "../../constants/data"
import { NetworkWifiSharp } from "@material-ui/icons";
import { fontSize } from "@mui/system";

const StyledChip = withStyles({
    root: {
       
        
    },
    label:{
        fontWeight:'bold',
        fontFamily:"Monteserrat",
        fontSize:16,
        
    }
  })(Chip);


const useStyles=makeStyles(theme=>(
    {
        main:{
            
            display:"flex",
            marginBottom:0,
            marginTop:150,
           
            gap:50,
            
            justifyContent:'center',
            [theme.breakpoints.down('sm')]: {

               
           },
           

            
        },
        first:{
                borderRadius:40,

            
            // [theme.breakpoints.down('sm')]: {
                
            //     overflowX:'auto',
            //     //whitespace: 'nowrap',
            // }
            

            


        },

        second :{
            [theme.breakpoints.down('sm')]: {

               
                
            },
        },

        btn:{
            backgroundColor:'#C4C4C4',
            borderRadius:25,
            fontWeight:1400,
            fontFamily:"Roboto",
            [theme.breakpoints.down('sm')]: {
              
            },
            
        },
        txt:{

            fontWeight:'bold',
            fontFamily:'Verdana',
        },
        /*first:{
                   
            position: 'absolute',
           
            opacity: 0.8,

        },*/
        /*chip:{
                      
            position: 'relative',
            left:450,
            bottom:20,
            
            
            

        },
        chip2:{
            position:'relative',
            bottom:620,
            
            left:190,
            
        },*/
        chipstyle:
        {
            position:'relative',
            left:200,
            top:10,
           
            
            
            borderColor:'black',
            backgroundColor:'white',
            [theme.breakpoints.down('sm')]: {
                
            },
            [theme.breakpoints.down('md')]: {
                position:'relative',
                left:335,
                
            },
            
            

        },
        chipstyle2:
        {
            position:'relative',
            left:300,
            top:20,
     
            
            borderColor:'black',
            backgroundColor:'white',
            [theme.breakpoints.down('sm')]: {
                position:'relative',
                backgroundColor:'red',
                
            },
            [theme.breakpoints.down('md')]: {
                position:'relative',
                left:350,
                
            },
            

        },
        btns:{

            display:'flex',alignItems:'center',gap:150,justifyContent:'center',height:'125px',backgroundColor:'white',
            
            [theme.breakpoints.down('sm')]: {
              
              flexDirection:'column',
              
              gap:25,
            },


        },

        cartitem:{

            
           

            [theme.breakpoints.down('sm')]: {
              
                overflowX:'scroll',
                whiteSpace:'nowrap',
                
              },

        },

        txtarea:{
            width:200,
            
            marginLeft:'auto',
            marginRight:'auto',
            display:'block',


           
        
        }
        

        
    }

)
   
)
const Cart = () => {

    const classes=useStyles()
    return (
        <Grid container className={classes.main} >
           
            <Grid item xs={12} lg={6} md={12} className={classes.first} >

            <StyledChip label="Cart Items"  variant="outlined" className={classes.chipstyle2}/>
               <div style={{borderRadius:25}}>
               <Grid className={classes.cartitem}>
                    
                    {
                           cartitems.map(item =>(
                               
                                  <>
                                        <CartItem items={item} style={{width:'100%',height:'100%'}}/>
                                        <Divider/>
                               
                                    </>
                            

                            
                           ))
                    }
                    
                    

                    </Grid>
                    
                    
                    <Divider/>
                    <Grid className={classes.btns}>
                        <Button className={classes.btn}>
                            <Typography style={{fontFamily:'bold'}}>
                                Continue Shopping
                            </Typography>
                        </Button>
                        <Button className={classes.btn}>
                           <Typography style={{fontFamily:'bold'}}>
                                Update Cart
                            </Typography>
                        </Button>

                    </Grid>
               


               </div>
                    
                    
                    
                {/* <Card  >
                    <CardHeader title="desfedf"/>
                        
                    <CardContent >
                    {
                           cartitems.map(item =>(

                            <CartItem items={item} style={{width:'100%',height:'100%'}}/>
                           ))
                    }
                    </CardContent>
                    <CardActions style={{display:'flex',alignItems:'center',gap:150,justifyContent:'center',marginTop:'50px'}}>
                        <Button className={classes.btn}>
                            Continue Shopping
                        </Button>
                        <Button className={classes.btn}>
                            Update Cart
                        </Button>
                    </CardActions>
                       
                </Card> */}
                    
               
            </Grid>
         
               
            <Grid item xs={12} md={12} lg={4}  >
            <StyledChip label="Cart Total" size='large' variant='outlined'  className={classes.chipstyle}/>
                <Card  >
                
                    <CardHeader title={<Typography style={{fontWeight:'bold'}}>Cart Note</Typography>} style={{fontWeight:'bold',textAlign: 'center'}}/>
                    <Divider/>
                    <CardContent>
                     
                     <TextareaAutosize
                        aria-label="minimum height"
                        minRows={6}
                        className={classes.txtarea}
                        placeholder="Note Regarding the Cart"
                        
                
                        

                    />


                     

                      
                    
                    
                    <Divider style={{marginTop:25,}}/>
                    <Container style={{display:'flex',gap:20,justifyContent:'center',marginTop:25,}}>
                        
                        <Typography className={classes.txt}>
                            SubTotal:-
                        </Typography>

                        <Typography className={classes.txt}>
                            1234
                        </Typography>

                    </Container>

                    <Divider style={{marginTop:25,}}/>

                    <Box style={{display:'flex',gap:20,justifyContent:'center',marginTop:25,}}>
                        <Typography className={classes.txt}>
                            Total:-
                        </Typography>
                        
                        <Typography className={classes.txt}>
                            1234
                        </Typography>

                    </Box>

                    </CardContent>
                    

                    
                    
                    

                       
                </Card>
                {/* <div className={classes.chip2} variant="outlined" color='primary' >
                    <StyledChip label="Cart Total" size='medium' variant='outlined'  className={classes.chipstyle}/>
                </div> */}

            </Grid>
            
        </Grid>
    )
}

export default Cart
