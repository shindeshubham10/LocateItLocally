import {Grid,Box,Card, CardContent,CardHeader,Avatar,makeStyles, Typography} from '@material-ui/core'

import ReactStars from 'react-rating-stars-component';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from "dayjs";
import { getUser } from '../../redux/actions/userActions';
const useStyle = makeStyles(theme=>({

    root:{

        display:"flex",
        justifyContent:'center',
        alignItems:'center',

    }

    
        
}))

const ReviewCard=(props)=>{

    const classes=useStyle();

    const [user, setUser] = useState("");
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getUser(props.user)).then((data) =>
        setUser(data.payload.user.firstName)
      );
    }, []);


    return(
       
            <Grid className={classes.root} xs={12}>

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
                                value={props.rating}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                        }
                        title={<Typography style={{color:'black', fontFamily: ['Montserrat', 'sans-serif'],fontSize:'0.9rem'}}>{user}</Typography>}
                        subheader={<Typography style={{color:'black', fontFamily: ['Montserrat', 'sans-serif'],fontSize:'0.9rem'}}> {dayjs(props.createdAt).format("DD MMM YYYY")}</Typography>}
                    />
                    <CardContent style={{fontFamily:'Monteserrat'}}>
                        <Typography  style={{color:'black', fontFamily: ['Montserrat', 'sans-serif'],fontSize:'1rem'}}>{props.reviewText}</Typography>
                    </CardContent>
                        
                    
                    </Card>


            </Grid>
                


            
      

    );
}

export default ReviewCard;