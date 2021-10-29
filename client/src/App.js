
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


import MainDashboard from './components/BusinessOwner/Product_Management/MainDashboard';
import ShowProducts from './components/ShowProducts/showProducts';
import Login from './components/Account/User_Login/user_login.jsx';


import User_profile from './components/Account/User_Profile/user_profile';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Product from './components/product/Product';
import FAQ from './components/product/FAQ';
import ProductDetails from './components/product/ProductDetails';

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
        <Route exact path="/businessdashboard" component={MainDashboard} />
        <Route exact path="/allproducts" component={ShowProducts} />
        <Route exact path="/products" component={ProductDetails} />
        <Route exact path="/user_profile" component={User_profile} />

    
        

      </Switch>
       <Footer/> 
    </Router>
   
   
  );
}

export default App;
