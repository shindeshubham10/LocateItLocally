import {Link} from 'react-router-dom';
import {AppBar,Toolbar,makeStyles,Typography,Box} from '@material-ui/core'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const useStyle=makeStyles(
    {
        header:{
            background:'#F7F8F9',
            height:'90px',
            
        },

        logo :{
            height:'150px'
        },
        container:{
            display:'flex',
            marginLeft:'400px',
            justifyContent:'space-between',
            gap:'20px',
            

        },

        txt:{
            color:'black',
            fontFamily:'Montserrat',
            fontWeight:'bold',
            fontSize:'17px',
            textDecoration:'none',

        },

        endicons:{
            color:'black',
        },

        endcontainer:{
            display:'flex',
            marginLeft:500,
            gap:15,

        },
    }
)

const Header= () => {

    const classes=useStyle();
    const logoURL="https://s3-alpha-sig.figma.com/img/878d/5004/35fa8ac75b99cc29a464ec310289ea9c?Expires=1632700800&Signature=INooMoo7crezLzOKDOMgjHJrB3bsWCdk7oc4nMGoIehYmfpDENc-m-pZLUGYiz5lkzUpe7tO1FgUc5jieLXaTNtVz~tu5zrMvpLGuMAdfJD2Zkknao33JH-tLEejpB5bb5Ppl13~NZaizJBZlowGGJsmZZrEGxDyK84B5cQn2N-HO6ylkZOffJ385wdf1dj0oqZmKPCt9tIzHCpXt~C8-0RUP-7h~~bHeK-3XFIYPmslAQ~5JvoGtQgHZ9fV14iOH5-GZi~YdaPCtT17cca4k-jaB3cuilJ6wpmiTKf2H2qnOsnlh4TL3InODtmoat4~8CDyl5Vl6elDXrMfpyR5Zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA";

    return(
        <AppBar className={classes.header}>
            <Toolbar>
                <img src={logoURL} alt="icon" className={classes.logo}/>

                <Box className={classes.container}>
                    <Link to='/' className={classes.txt}>
                        Home
                    </Link>
                    

                    <Link to='/' className={classes.txt}>
                        Demo
                    </Link>
                    <Link to='/contact' className={classes.txt}>
                        Contact
                    </Link>
                    <Link to='/about' className={classes.txt}>
                        About Us
                    </Link>
                    
                </Box>

                <Box className={classes.endcontainer}>
                    <Link to='/login'><PersonOutlineIcon className={classes.endicons}/></Link>

                   
                    <Link to='/favourites'><FavoriteBorderIcon className={classes.endicons}/></Link>

                    <Link to='/cart'><ShoppingCartOutlinedIcon className={classes.endicons}/></Link>

               </Box>
                
            </Toolbar>
        </AppBar>
    );

}

export default Header;