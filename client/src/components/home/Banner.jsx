import { bannerData } from "../../constants/data";
import Carousel from "react-material-ui-carousel";
import { mergeClasses } from "@material-ui/styles";
import {AppBar,Toolbar,makeStyles,Typography,Box, Button} from '@material-ui/core'

const useStyles=makeStyles(theme=>(


    {
        
        ban:
        {
            marginTop:20,
            marginLeft:100,
            marginRight:100,
            [theme.breakpoints.down('sm')]: {
                marginLeft:0,
                marginRight:0,
            }
            

            

        },
       
        image:{
           width:"100%",
           height:"100%",
           [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            
        }
        
            
           
            

        }
    }
)
    
);


const Banner=()=>{

    const classes = useStyles();
    return (
       

            <Carousel className={classes.ban}>
                {
                    bannerData.map( image => (
                        
                             <img src={image} className={classes.image} />
                        
                   ) )
                }
            </Carousel>


       
    )
    

}
export default Banner;