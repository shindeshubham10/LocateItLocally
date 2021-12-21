import HomeSearchBar  from './SearchBar';
import React,{useState} from 'react';
import { useEffect } from 'react';
import Banner from './Banner';
import Headings from './Headings'
//import { productDetails } from "../../constants/data";
import Cards from './Cards';
import Footer from '../footer/footer';
import * as opencage from 'opencage-api-client';


import MultiSlider from './MultiSlider';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as ProductList } from '../../redux/actions/productActions';
import { getMyself } from '../../redux/actions/userActions';
import { getBusinessbylocation } from '../../redux/actions/businessActions';
import { getMyBusiness } from '../../redux/actions/businessActions';

import SearchBarSection from '../DemoSearch/SearchBarSection';
const Home = () => {



  const [pincode,setpincode]=useState("");
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      const id=navigator.geolocation.watchPosition((position) => {
        setStatus(null);
        console.log(position);
       const string=position.coords.latitude+","+position.coords.longitude;
         opencage
         .geocode({ key: '574f2e7a4cba478c9e03b38705c09f8c' , q:string })
         .then(response => {
           console.log(response);
           setpincode(response.results[0].components.postcode);
           console.log(pincode);
           
  
           navigator.geolocation.clearWatch(id);
         
         
          
          
         })
         .catch(err => {
           console.error(err);
          
         });
      }, () => {
        setStatus('Unable to retrieve your location');
      },
      { enableHighAccuracy: true, maximumAge: 2000, timeout: 5000 }
      );
    }

    //return pincode;
  }


    console.log("Inside home 1");

    // Getting the data from Store (Redux)
    const getProducts = useSelector(state => state.getProducts);
    console.log("Inside hone 2");
    console.log("data from database type :", typeof (getProducts));
    console.log(getProducts);
    console.log(getProducts.Products);
    
  //state for searching the products
  // if(getProducts.Products ){
  //   const [searchedProducts, setsearchedProducts] = useState(getProducts);
  // }


     



    console.log("Inside hone 3");
  
    console.log("Inside hone 4");
    
    console.log("Inside hone 5");
   

    const dispatch = useDispatch();

    useEffect(() => {



        
        if(localStorage.LocateItLocallyUser)
      {
        //setchooseHeader(true);
        console.log("In doinhgghyhhgg");
        dispatch(getMyself());
  
      }
  
      if(localStorage.LocateItLocallyBusiness)
      {
        console.log("In doinhgghyhhgg");
        dispatch(getMyBusiness());
      }


        getLocation();

        console.log(pincode);
        


        dispatch(getBusinessbylocation(411002)).then((x)=>console.log(x));
        dispatch(ProductList());
        console.log("Inside dispatch");
    }, [dispatch])

    const [showSearchedProduct,setshowSearchedProduct] = useState(true);




    return (
      <div >
             {/* <HomeSearchBar/> */}
             <HomeSearchBar  setshowSearchedProduct={setshowSearchedProduct} pincode={pincode}/>

             {
               showSearchedProduct ? 
               <>

                <Banner />
                <Headings name="NEW ARRIVALS"/> 
                <Cards data={getProducts.Products}/> 
        
                 <Headings name="TOP PRODUCTS"/> 
                 <MultiSlider/> 
                <Headings name="TOP SELLERS"/> 
                <Cards data={getProducts.Products}/> 
               </> : <>Your Searched Products</>
             }
             
                   

        </div>
          
        
        

    );

}
export default Home;