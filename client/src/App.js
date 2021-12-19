
import Header from './components/header/Header'
import BusinessHeader from './components/header/BusinessHeader';
import './App.css';
import Home from './components/home/Home';

import Footer from './components/footer/footer'
import { makeStyles } from '@material-ui/core';

import { useSelector ,useDispatch} from 'react-redux';

import { useEffect, useState } from 'react';

import Contact from './components/contact/Contact';
import About from './components/about/About';
import Cart from './components/cart/Cart';
import Favourites from './components/favourites/Favourites';
import Register from './components/Account/User_Register/user_register';

import updateJobOpening from './components/BusinessOwner/Job_Management/updatejob';


import MainDashboard from './components/BusinessOwner/Product_Management/MainDashboard';
import Login from './components/Account/User_Login/user_login.jsx';
import Reviews from './components/Account/ShopDetails/Reviews';

import ShopProducts from './components/Account/ShopDetails/ShopProducts';

import Newproduct from './components/BusinessOwner/Product_Management/AddNewProduct/new_product';
import User_profile from './components/Account/User_Profile/user_profile';
import googleMapsComponent from './components/GoogleMapIntegration/googleMaps.component';
import Owner_profile from './components/BusinessOwner/Owner_Profile/owner_profile';
import display_user_profile from './components/User/Profile/Display_User_Profile/display_user_profile';
import UpdateProduct from './components/BusinessOwner/Product_Management/UpdateProduct/update_product';
import ShowProducts from './components/ShowProducts/showProducts';
import AddJobOpening from './components/BusinessOwner/Job_Management/AddNewJob';

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
import axios from "axios"
//import Product from './components/product/Product';
import { getMyself } from './redux/actions/userActions';
import { getMyBusiness } from './redux/actions/businessActions';
import TemplateProvider from './templates/TemplateProvider';
import SearchBarSection from './components/DemoSearch/SearchBarSection';

// axios global settings
if (localStorage.LocateItLocallyUser) {
  const { token } = JSON.parse(localStorage.LocateItLocallyUser);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  console.log(token);
}
else if(localStorage.LocateItLocallyBusiness)
{
  const { token } = JSON.parse(localStorage.LocateItLocallyBusiness);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  console.log(token);

}






const useStyles=makeStyles(
  {
      main :{
        backgroundColor:'black',
      }
  }
)
function App() {

  console.log("Hello");

  const dispatch=useDispatch();

const [chooseHeader,setchooseHeader] = useState(false);
const [isAuthenticated,setisAuthenticated]=useState(1);



  useEffect(()=>{
      if(localStorage.LocateItLocallyUser)
    {
      //setchooseHeader(true);
      console.log("In doinhgghyhhgg");
      dispatch(getMyself());

    }

    if(localStorage.LocateItLocallyBusiness)
    {
      setchooseHeader(true);
      console.log("In doinhgghyhhgg");
      dispatch(getMyBusiness());
    }

   
  },[isAuthenticated])

  

  const classes=useStyles();
  return (
    <>
    {
    <TemplateProvider>
    <Router>
    
     { chooseHeader ?  <BusinessHeader/>  :  <Header/>}
      
      
       <Switch >
        <Route exact path="/" component={() => (<Home myProp={setisAuthenticated} />)}  />
      <Route exact path="/login" component={() => (<Login myProp={setisAuthenticated} />)} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/favourites" component={Favourites} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/businessdashboard" component={MainDashboard} />
        <Route exact path="/businessdashboard/product/update" component={UpdateProduct} />
        <Route exact path="/businessdashboard/job/add" component={AddJobOpening}/>
        <Route exact path="/businessdashboard/job/update" component={updateJobOpening}/>
        <Route exact path="/newProduct" component={Newproduct} />
        <Route exact path="/New Arrivals" component={User_profile} />
        <Route exact path="/productsDetails/:id" component={ProductDetails} />
        
        <Route exact path="/user_profile" component={User_profile} />
        <Route exact path="/maps" component={ShowMap} />
        <Route exact path="/reviews" component={Reviews} />
        <Route exact path="/shopproducts" component={ShopProducts} />
        <Route exact path="/shopdetails/:id" component={ShopDetails} />
        <Route exact path="/owner_profile" component={Owner_profile} />
        <Route exact path="/display_user_profile" component={display_user_profile} />
        <Route exact path="/allproducts/:options/" component={ShowProducts}/>
        <Route exact path="/allproducts" component={ShowProducts}/>
      
        
      
      </Switch>
       <Footer/> 
    </Router>
    </TemplateProvider>
}
    </>
   
   
  );
}

export default App;
