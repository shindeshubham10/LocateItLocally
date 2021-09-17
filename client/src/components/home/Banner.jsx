import { bannerData } from "../../constants/data";
import Carousel from "react-material-ui-carousel";
import { mergeClasses } from "@material-ui/styles";
import {AppBar,Toolbar,makeStyles,Typography,Box, Button} from '@material-ui/core'

const useStyles=makeStyles(
    {
        
        ban:
        {
            marginTop:20,
            marginLeft:100,
            marginRight:100,

            

        },
       
        image:{
           //width:"100%",
            //height:"100%",
            width:"100%",
            
           
            

        }
    }
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