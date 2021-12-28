import {Grid,Box,Card, CardContent,CardHeader,Avatar,makeStyles, Typography} from '@material-ui/core'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const useStyle = makeStyles(theme=>({

    root:{

        display:"flex",
        justifyContent:'flex-start',
        alignItems:'flex-start',

    }

    
        
}))

const JobCard=(props)=>{

    const classes=useStyle();


    return(
       
            <Grid className={classes.root} xs={12}>

                <Card style={{backgroundColor:' #eaf2f8 ', fontFamily:'Monteserrat'}}>
                    <CardHeader 
                        title={<Typography style={{color:'black',fontFamily: ['Montserrat', 'sans-serif'],fontSize:'1.5rem'}}>{props.title}</Typography>}
                        subheader={<Typography style={{ color: '#A1B3BA',fontweight: 'light',fontFamily: ['Montserrat', 'sans-serif'],fontSize:'1rem'}}>Location<LocationOnOutlinedIcon fontSize='small'/></Typography>}
                    />
                    <CardContent style={{fontFamily:'Monteserrat'}}>
                        <Typography  style={{color:'#34495e', fontFamily: ['Montserrat', 'sans-serif'],fontSize:'1rem',marginBottom:4}}>{props.description}</Typography>
                        <Typography  style={{color:'#34495e', fontFamily: ['Montserrat', 'sans-serif'],fontSize:'1rem',marginTop:20,marginBottom:4}}>Salary - {props.salary}</Typography>
                        <Typography  style={{color:'#34495e', fontFamily: ['Montserrat', 'sans-serif'],fontSize:'1rem',marginTop:4,marginBottom:4}}>Contact - {props.contact}</Typography>
                    </CardContent>
                        
                    
                    </Card>


            </Grid>
                


            
      

    );
}

export default JobCard;