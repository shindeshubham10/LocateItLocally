
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
import Login from './components/Account/User_Login/user_login.jsx';
import Reviews from './components/Account/ShopDetails/Reviews';

import ShopProducts from './components/Account/ShopDetails/ShopProducts';

import Newproduct from './components/BusinessOwner/Product_Management/AddNewProduct/new_product';
import User_profile from './components/Account/User_Profile/user_profile';
import googleMapsComponent from './components/GoogleMapIntegration/googleMaps.component';
import Owner_profile from './components/BusinessOwner/Owner_Profile/owner_profile';
import display_user_profile from './components/User/Profile/Display_User_Profile/display_user_profile';

import ShowProducts from './components/ShowProducts/showProducts';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
//import Product from './components/product/Product';
import FAQ from './components/product/FAQ';
import ProductDetails from './components/product/ProductDetails';
import ShopDetails from './components/Account/ShopDetails/ShopDetails';
import ShowMap from './components/GoogleMapIntegration/googleMapsIntegration';
//import Product from './components/product/Product';
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
        <Route exact path="/newProduct" component={Newproduct} />
        <Route exact path="/New Arrivals" component={User_profile} />
        <Route exact path="/productsDetails/:id" component={ProductDetails} />
        
        <Route exact path="/user_profile" component={User_profile} />
        <Route exact path="/maps" component={ShowMap} />
        <Route exact path="/reviews" component={Reviews} />
        <Route exact path="/shopproducts" component={ShopProducts} />
        <Route exact path="/shopdetails" component={ShopDetails} />
        <Route exact path="/owner_profile" component={Owner_profile} />
        <Route exact path="/display_user_profile" component={display_user_profile} />
        <Route exact path="/allproducts/:options/" component={ShowProducts}/>
        <Route exact path="/allproducts" component={ShowProducts}/>
      
      </Switch>
       <Footer/> 
    </Router>
   
   
  );
}

export default App;
