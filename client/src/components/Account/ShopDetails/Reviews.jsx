import {Box,Grid,List,ListItem, TextField, Typography, Button,makeStyles,Card, CardHeader,TextareaAutosize, CardContent, CardActions} from '@material-ui/core'

import ReactStars from "react-rating-stars-component";
import Review from "./Review"

const useStyle = makeStyles(theme=>({

    root:{

        marginTop:150,
        display:'flex',
        justifyContent:'center',

    }

    
        
}))

const Reviews=()=>{

    const classes=useStyle();

    return(
        <Grid container className={classes.root}>
            <Grid item xs={12} lg={2}>
                <Card style={{backgroundColor:''}}>
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

                
                    
                    
                    
                    
                </Card>

            </Grid>
            <Grid item xs={12} lg={4} >
                <List>
                    <ListItem>
                        <Review/>
                        
                        

                    </ListItem>
                    <ListItem>
                        <Review/>
                        
                        

                    </ListItem>
                    <ListItem>
                        <Review/>
                        
                        

                    </ListItem>
                </List>

            </Grid>
            
        </Grid>

    );

}

export default Reviews