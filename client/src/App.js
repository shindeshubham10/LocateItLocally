
import Header from './components/header/Header'
import './App.css';
import Home from './components/home/Home';
import Footer from './components/footer/footer'
import { CallMissedSharp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';

const useStyles=makeStyles(
  {
      main :{
        backgroundColor:'black',
      }
  }
)
function App() {

  const classes=useStyles();
  return (
    
    <div>
      <Header/>
      <Home className={classes.main}/>
     <Footer/>
    </div>

    
   
  );
}

export default App;
