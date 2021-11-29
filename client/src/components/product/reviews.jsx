import {Grid,Box,Card, CardContent,CardHeader,Avatar,makeStyles, Typography} from '@material-ui/core'

import ReactStars from 'react-rating-stars-component';
import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { getReviews } from '../../redux/actions/reviewActions';
import ReviewCard from './reviewCard';
const useStyle = makeStyles(theme=>({

    
        
}))

const Reviews=()=>{

    const [Reviews, setReviews] = useState([]);

    const reduxState = useSelector(state=>state.getProductDetails);
    console.log(reduxState.Products.product);
    const dispatch = useDispatch();

    useEffect(() => {
        if (reduxState) {
        dispatch(getReviews(reduxState?.Products?.product?._id)).then((data) =>
            setReviews(data.payload.reviews)
        );
        }
    }, []);

    


    return(

            <div>
                {Reviews?
                    Reviews.map((review)=>(
                        <ReviewCard {...review}/>
                    )):<div>Waiting....</div>
                }

            </div>
       
            
                

            
      

    );
}

export default Reviews;