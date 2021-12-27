import HomeSearchBar  from './SearchBar';
import React,{useState} from 'react';
import { useEffect } from 'react';
import Banner from './Banner';
import Headings from './Headings'
//import { productDetails } from "../../constants/data";
import Cards from './Cards';
import Footer from '../footer/footer';
import * as opencage from 'opencage-api-client';

import MapView from '../MapView';
import MultiSlider from './MultiSlider';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as ProductList } from '../../redux/actions/productActions';
import { getMyself } from '../../redux/actions/userActions';
import { getBusinessbylocation,gettopSellers } from '../../redux/actions/businessActions';
import { getMyBusiness } from '../../redux/actions/businessActions';
import { getlatestProducts,gettopProducts } from '../../redux/actions/productActions';
import SearchBarSection from '../DemoSearch/SearchBarSection';
import SellersInformationCard from './SellersInformation';
const Home = () => {


  const [latestproducts,setlatestproducts]=useState([])
  const [topProducts,settopProducts] = useState([]);
  const [sellerbyloc,setsellerbyloc]=useState([])
  const [pincode,setpincode]=useState("");
  const [status, setStatus] = useState(null);
  const [sellerInfo,setsellerInfo] = useState([]);

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
      { enableHighAccuracy: true }
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
    const dispatch1= useDispatch();
    const dispatch2 = useDispatch();
    const dispatch3 = useDispatch();

    
    const [firstHalf,setfirstHalf] = useState([]);
    const [secondHalf,setsecondHalf] = useState([]);


    const [topSellersdata,settopSellersdata] = useState([]);


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
        
    

    dispatch1(getBusinessbylocation(pincode.toString())).then((SellersInforamtion)=>{
          console.log(SellersInforamtion)
          setsellerInfo(SellersInforamtion.payload.business);
          console.log("after setting ================ ",SellersInforamtion.payload.business);
        });
        dispatch(ProductList());

        // For new arrivals
        dispatch(getlatestProducts()).then((x)=>setlatestproducts(x.payload.products));

        // for top products
        dispatch2(gettopProducts()).then((topproduct)=>{
          console.log(topproduct)
         // settopProductsdata(topproduct.payload.products)
            const half = Math.ceil(topproduct.payload.products.length / 2);
             setfirstHalf(topproduct.payload.products.slice(0, half))   
             setsecondHalf(topproduct.payload.products.slice(-half)) 
          settopProducts(topproduct.payload.products);
        })

        // for top sellers 
        dispatch3(gettopSellers()).then((topseller)=>{
          console.log(topseller);
          settopSellersdata(topseller.payload.sellers);
        })

        console.log("Inside dispatch");
    }, [dispatch,dispatch1,pincode])

    const [showSearchedProduct,setshowSearchedProduct] = useState(true);



    return (
      <div >
             {/* <HomeSearchBar/> */}
             <HomeSearchBar  setshowSearchedProduct={setshowSearchedProduct} pincode={pincode}/>

             {
               showSearchedProduct ? 
               <>

                <Banner />
                <Headings name="Sellers NearBy"/> 
                <SellersInformationCard info={sellerInfo}/>
                <Headings name="NEW ARRIVALS"/> 
                <Cards data={latestproducts}/> 
        
                 <Headings name="TOP PRODUCTS"/> 
                 <MultiSlider firstHalf={firstHalf} secondHalf={secondHalf}/> 
                <Headings name="TOP SELLERS"/> 
                {/* <Cards data={getProducts.Products}/>  */}
                <SellersInformationCard info={topSellersdata}/>
                {/* <MapView data={sellerbyloc}/> */}
                
               </> : <>Your Searched Products</>
             }
             
                   

        </div>
          
        
        

    );

}
export default Home;