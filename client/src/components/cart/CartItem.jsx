




import {Box,makeStyles,Divider,Chip, Button,Grid, Typography,Card, CardMedia, CardContent, CardActions} from '@material-ui/core';
import {CancelOutlined} from '@material-ui/icons';
import GroupedButton from './ItemCountButton';



const useStyles=makeStyles(theme=>(
    {
    
        
        main:{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
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
        <Grid className={classes.root}>
            <Card className={classes.main}>
                
                <CancelOutlined/>
                
                <img src= {props.items.img} alt="" />
                
                
                <Typography style={{fontWeight:'bold'}}>
                    {props.items.name}
                </Typography>
                <CardActions>
                    <GroupedButton/>
                </CardActions>
                <Typography style={{fontWeight:'bold',marginRight:50,}} >
                    {props.items.price}
                </Typography>
            

            </Card>
        </Grid>
        
            
    );
}

export default CartItem;