




import {Box,makeStyles,Divider,Chip, Button,Grid,Paper, Typography,Card, CardMedia, CardContent, CardActions} from '@material-ui/core';
import {CancelOutlined} from '@material-ui/icons';
import GroupedButton from './ItemCountButton';



const useStyles=makeStyles(theme=>(
    {
    
        
        main:{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-around',
            backgroundColor:'white',
            gap:20,
            minHeight:200,
            [theme.breakpoints.down('sm')]: {
                minHeight:0,
               
            },
            

            

        },
        root:{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            gap:50,
            


        },
        txt:{
            fontWeight:'bold',
            fontFamily:'Verdana',
        },

    }

)
);
const CartItem=(props)=>{

    const classes=useStyles();
    return(
        // <Grid xs={12} className={classes.root}>
        //     <Card className={classes.main}>
                
        //         <CancelOutlined style={{color:'#C4C4C4'}}/>
                
        //         <img src= {props.items.img} alt="" />
                
                
        //         <Typography style={{fontWeight:'bold'}}>
        //             {props.items.name}
        //         </Typography>
        //         <CardActions>
        //             <GroupedButton/>
        //         </CardActions>
        //         <Typography style={{fontWeight:1000,fontSize:24,marginRight:50,}} >
        //             {props.items.price}
        //         </Typography>
            

        //     </Card>
        // </Grid>
        <Paper className={classes.main} elevation={0} >
             <CancelOutlined style={{color:'#C4C4C4',marginLeft:10}}/>
             <Grid container xs={12}  className={classes.root}>
                 <Grid item>
                 <img src= {props.items.img} alt="" />
                </Grid>

                     <Grid item>
                     <Typography style={{fontWeight:'bold'}}>
                         {props.items.name}
                      </Typography>
                     </Grid>
                     <Grid item>
                     <GroupedButton/>
                     </Grid>
                     <Grid item>
                        <Typography style={{fontWeight:1000,fontSize:24,marginRight:20}} >
                    {props.items.price}
                    </Typography>
                     </Grid>
               
               
               
                

             </Grid>
        </Paper>
            
    );
}

export default CartItem;