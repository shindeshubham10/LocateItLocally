
import {withStyles,Paper,Chip,Grid,Card,Box,makeStyles,Button, CardActions, CardContent,Container, CardHeader, Divider,TextareaAutosize, Typography} from "@material-ui/core"
import CartItem from "./CartItem"
import { cartitems } from "../../constants/data"
import { NetworkWifiSharp } from "@material-ui/icons";

const StyledChip = withStyles({
    root: {
        
        
    },
    label:{
        fontStyle:'bold',
        
    }
  })(Chip);


const useStyles=makeStyles(theme=>(
    {
        main:{
            marginTop:150,
            display:"flex",
           
            gap:50,
            
            justifyContent:'center',
            [theme.breakpoints.down('sm')]: {
               
           },
           

            
        },
        first:{

            
            [theme.breakpoints.down('sm')]: {
                
                overflow:'auto',
                whitespace: 'nowrap',
            }

            


        },

        second :{
            [theme.breakpoints.down('sm')]: {
                
            },
        },

        btn:{
            backgroundColor:'#C4C4C4',
            borderRadius:25,
            fontWeight:'bold',
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
            left:190,
            top:10,
            
            
            borderColor:'black',
            backgroundColor:'white',
            [theme.breakpoints.down('sm')]: {
                position:'relative',
                left:100,
            },
            
            

        },
        chipstyle2:
        {
            position:'relative',
            left:300,
            top:10,
            
            
            borderColor:'black',
            backgroundColor:'white'
            

        },
        btns:{

            display:'flex',alignItems:'center',gap:150,justifyContent:'center',height:'100px',backgroundColor:'white',
            
            [theme.breakpoints.down('sm')]: {
              
              flexDirection:'column',  
              gap:25,
            },

        }
        

        
    }

)
   
)
const Cart = () => {

    const classes=useStyles()
    return (
        <Grid container className={classes.main} >
            
            <Grid item xs={12} lg={6} className={classes.first} >
            <StyledChip label="Cart Items"  variant="outlined" className={classes.chipstyle2}/>
                    {
                           cartitems.map(item =>(

                            <CartItem items={item} style={{width:'100%',height:'100%'}}/>
                           ))
                    }
                    <Grid className={classes.btns}>
                        <Button className={classes.btn}>
                            Continue Shopping
                        </Button>
                        <Button className={classes.btn}>
                            Update Cart
                        </Button>

                    </Grid>
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
         
               
            <Grid item xs={12} lg={4} >
            <StyledChip label="Cart Total" size='medium' variant='outlined'  className={classes.chipstyle}/>
                <Card style={{height:600,width:427}}>
                
                    <CardHeader title={<Typography style={{fontWeight:'bold'}}>Cart Note</Typography>} style={{fontWeight:'bold',textAlign: 'center'}}/>
                    <Divider/>
                    <CardContent>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={6}
                        
                        placeholder="Note Regarding the Cart"
                        style={{ width: 200,marginLeft:100, }}
                        

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
