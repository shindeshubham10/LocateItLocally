import HomeSearchBar  from './SearchBar';
import React from 'react';
import Banner from './Banner';
import Headings from './Headings'
import Cards from './Cards';



import MultiSlider from './MultiSlider';

const Home=()=>{


    return (
        <div >
             <HomeSearchBar />
             <Banner/>
             <Headings name="NEW ARRIVALS"/>
             <Cards/>
             <Headings name="TOP PRODUCTS"/>
             <MultiSlider/>
             <Headings name="TOP SELLERS"/>
             <Cards/>

        </div>
          
        
        

    );

}
export default Home;