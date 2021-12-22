import HomeSearchBar  from './SearchBar';
import React,{useState} from 'react';
import { useEffect } from 'react';
import Banner from './Banner';
import Headings from './Headings'
//import { productDetails } from "../../constants/data";
import Cards from './Cards';
import Footer from '../footer/footer';


import MultiSlider from './MultiSlider';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as ProductList } from '../../redux/actions/productActions';
import { getMyself } from '../../redux/actions/userActions';
import { getMyBusiness } from '../../redux/actions/businessActions';
import SearchBarSection from '../DemoSearch/SearchBarSection';
import SellersInformationCard from './SellersInformation';
const Home = () => {

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




        dispatch(ProductList());
        console.log("Inside dispatch");
    }, [dispatch])

    const [showSearchedProduct,setshowSearchedProduct] = useState(true);




    return (
      <div >
             {/* <HomeSearchBar/> */}
             <HomeSearchBar  setshowSearchedProduct={setshowSearchedProduct}/>

             {
               showSearchedProduct ? 
               <>

                <Banner />
                <Headings name="Sellers NearBy"/> 
                <SellersInformationCard/>
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