import {Grid,Box,Card, CardContent,CardHeader,makeStyles, Typography} from '@material-ui/core'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Avatar from '@mui/material/Avatar';
const useStyle = makeStyles(theme=>({

    root:{

        display:"flex",
        justifyContent:'flex-start',
        alignItems:'flex-start',

    },
    Selleravatar:{
        //backgroundColor:'red',
    },
    SellerName:{
        backgroundColor:'green',
    }

    
        
}))

const SellerInfoCard=(props)=>{

const {image,name,address,contact} = props;
    const classes=useStyle();
/** name address avatar contact number job avalability */

    return(
       
            // <Grid container className={classes.root}>

                <Card  style={{backgroundColor:'  #d4e6f1  ', borderRadius:6, fontFamily:'Monteserrat',height:300,width:350,overflowY:'visible',scrollBehavior:'smooth',scrollbarWidth:'thin'}}>
                    <Grid container style={{marginLeft:20,marginBottom:3,marginTop:10}}  >
                        <Grid item lg={6} className={classes.Selleravatar}>
                        <Avatar sx={{ width: 70, height: 70, }} alt="Remy Sharp" src={image} />
                        </Grid>
                        
                        </Grid>
                    <CardHeader 
                        
                        title={<Typography style={{color:'black',fontFamily: ['Montserrat', 'sans-serif'],fontSize:'1.5rem'}}>{name}</Typography>}
                        subheader={<Typography style={{ color: '#A1B3BA',fontweight: 'light',fontFamily: ['Montserrat', 'sans-serif'],fontSize:'1rem'}}><LocationOnOutlinedIcon fontSize='small'/>{address} </Typography>}
                    >
                        
                    </CardHeader>
                    <CardContent style={{fontFamily:'Monteserrat'}}>
                    <Grid container  >
                        <Grid item lg={12} >
                        <Typography  style={{color:'#34495e', fontFamily: ['Montserrat', 'sans-serif'],fontSize:'1rem',marginTop:20,marginBottom:4}}>{contact}</Typography>
                        </Grid>
                        
                    </Grid>
                    <Grid container  >
                        <Grid item lg={12} >
                        <Typography  style={{color:'#34495e', fontFamily: ['Montserrat', 'sans-serif'],fontSize:'1rem',marginTop:4,marginBottom:4}}>Job Availability : Yes/No</Typography>
                        </Grid>
                        
                    </Grid>
                        
                        
                        
                    </CardContent>
                        
                    
                    </Card>


            // </Grid>
                


            
      

    );
}

export default SellerInfoCard;