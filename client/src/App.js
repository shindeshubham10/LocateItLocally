
import Header from './components/header/Header'
import './App.css';
import Home from './components/home/Home';

import Footer from './components/footer/footer'
import { CallMissedSharp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';

import Login from './components/login/Login';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Cart from './components/contact/Contact';
import Favourites from './components/favourites/Favourites';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


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
    
    <Router>
    
      
      <Header/>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/favourites" component={Favourites} />

      </Switch>

      <Footer/>
    </Router>


    
   
  );
}

export default App;
