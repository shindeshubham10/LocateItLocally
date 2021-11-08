
import {Grid,Box,Card, CardContent,CardHeader,Avatar,makeStyles, Typography} from '@material-ui/core'

import ReactStars from 'react-rating-stars-component';

const useStyle = makeStyles(theme=>({

    
        
}))

const Review=()=>{

    const classes=useStyle();


    return(
       
            
                <Card style={{fontFamily:'Monteserrat'}}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        R
                    </Avatar>
                    }
                    action={
                        <ReactStars
                                count={5}
                               
                                size={24}
                                activeColor="#ffd700"
                            />
                    }
                    title={<Typography style={{fontFamily:'Monteserrat'}}>Anirudha Kulkarni</Typography>}
                    subheader={<Typography style={{fontFamily:'Monteserrat'}}>24th,September 2016</Typography>}
                />
                <CardContent style={{fontFamily:'Monteserrat'}}>
                        Very Nice shop.Gives good customers service
                </CardContent>
                    
                   
                </Card>


            
      

    );
}

export default Review;