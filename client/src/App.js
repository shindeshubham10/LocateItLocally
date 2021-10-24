
import Header from './components/header/Header'
import './App.css';
import Home from './components/home/Home';

import Footer from './components/footer/footer'
import { makeStyles } from '@material-ui/core';

import Contact from './components/contact/Contact';
import About from './components/about/About';
import Cart from './components/cart/Cart';
import Favourites from './components/favourites/Favourites';
import Register from './components/Account/User_Register/user_register';
import Login from './components/Account/User_Login/user_login';
import CategoryMenu from './components/home/PopOverModals/CategoryMenu';
import MainDashboard from './components/BusinessOwner/Product_Management/MainDashboard';
import Owner_profile from './components/BusinessOwner/Owner_Profile/owner_profile'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Product from './components/product/Product';
import FAQ from './components/product/FAQ';
import ProductDetails from './components/product/ProductDetails';
import Description from './components/product/Description';

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
      
       <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/favourites" component={Favourites} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/products" component={ProductDetails} />
        <Route exact path="/profile" component={Owner_profile} />
        <Route exact path="/businessdashboard" component={MainDashboard} />
        

      </Switch>
       <Footer/> 
    </Router>
   
   
  );
}

export default App;
