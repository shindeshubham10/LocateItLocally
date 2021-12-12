import React, {useState,useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as ProductList } from '../../redux/actions/productActions';
import "./SearchBarSection.css";

const SearchBarSection = ({setshowSearchedProduct}) => {


    const getProducts = useSelector(state => state.getProducts);
    console.log("Inside hone 2");
    console.log("data from database type :", typeof (getProducts));
    console.log(getProducts);
    console.log(getProducts.Products);


    const dispatch = useDispatch();

   

    const [showProducts,setshowProducts] = useState(false);

    const [Products,setProducts] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {

      dispatch(ProductList()).then((searchdata)=>{
          console.log(searchdata);
          setProducts(searchdata.payload);

      });

      //setshowSearchedProduct(false);
      console.log("Inside dispatch");

  }, [])

    const filteredProducts = Products?.filter((product) => {
        if (
          product?.name.toLowerCase().includes(search) ||
         
          product?.category.toLowerCase().includes(search)
        ) {
          return product;
        }
      });



  return (
      
  (

    Products ?
      
    <div className="searchBarSection">
      <div class="searchBar">
        <input
          className="input"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
            setshowSearchedProduct(false);
            if(e.target.value.length==0){
              setshowProducts(false);
              setshowSearchedProduct(true);
            }else{
              setshowProducts(true);
              //setshowSearchedProduct(true);
              
            }
            
          }}        
        />
        <button className="button">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="display">
         { 
         showProducts ?
         filteredProducts.map((product) => (
          <div className="product">
            <h6>{product.category}</h6>
            <h3>{product.name}</h3>
           
          </div>
        )) : <p>....</p>
      }
        
        
      </div>
    </div> : <div>Wait for search</div>
  )
   

    
  )
};

export default SearchBarSection;
