import {Box,Grid,List,ListItem, TextField, Typography, Button,makeStyles,Card, CardHeader,TextareaAutosize, CardContent, CardActions} from '@material-ui/core'

import ReactStars from "react-rating-stars-component";
import Review from "./Review"

import { postReviews } from '../../../redux/actions/reviewActions';

import { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import BusinessReview from '../../reviews/BusinessReviews';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { getReviewsB } from '../../../redux/actions/reviewActions';
const useStyle = makeStyles(theme=>({

    root:{

        marginTop:150,
        display:'flex',
        justifyContent:'center',

    }

    
        
}))

const Reviews=()=>{

        const {id}=useParams();
    
        const [openReview,setopenReview] = useState(false);

        const openReviewDailog = () =>{

            if (!localStorage.LocateItLocallyUser) {
                return alert("Please sign in to post a review");
            }
            setopenReview(true);
        };

        const [Reviews, setReviews] = useState([]);

        const dispatch=useDispatch();

        useEffect(() => {
                
                dispatch(getReviewsB(id)).then((data) =>
                    setReviews(data.payload.reviews)
                    
                );
                
        }, );


    const classes=useStyle();

    return(
        <Grid container className={classes.root}>
            <Grid item xs={12} >
                {/* <Card style={{backgroundColor:''}}>
                    <CardHeader
                    title={<Typography style={{fontFamily:'Monteserrat'}}>Add a Review</Typography>}/>

                    <CardContent>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={4}
                            className={classes.txtarea}
                            placeholder=""
                            
                    
                            

                        />
                        <Typography style={{fontFamily:'Monteserrat'}}>
                            Rate it
                        </Typography>
                        <ReactStars/>

                    </CardContent>

                    <CardActions>
                        <Button variant="contained" size="small" style={{backgroundColor:'grey'}}>Submit</Button>
                        
                    </CardActions>

                
                    
                    
                    
                    
                </Card> */}
                <Button style={{ backgroundColor: '#38495A', borderRadius: 50, }} variant="contained"  onClick={()=>openReviewDailog()} endIcon={<ReviewsIcon style={ {color:'white'}}/>}>
                         <Typography style={{fontweight:'bold',fontSize:18,color:'white',fontFamily:['Monteserrat','sans-serif']}}>ADD REVIEW</Typography> 
                </Button>

            </Grid>
            <Grid item xs={12} >
                <List>

                    {

                     Reviews?Reviews.map(
                            (review)=>(

                                <ListItem>
                                   <Review {...review}/>
                                </ListItem>

                            )
                        ):<div>Lodaing</div>
                    }

                   
                   
                </List>

            </Grid>
            <BusinessReview open={openReview} setopenReview={setopenReview}/>
            
        </Grid>

    );

}

export default Reviews