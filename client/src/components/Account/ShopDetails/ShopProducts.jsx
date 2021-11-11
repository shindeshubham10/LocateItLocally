import React from 'react';
import '../../ShowProducts/pagination_Style.css';
import { useState,useEffect} from 'react';
import { IconButton, makeStyles} from '@material-ui/core';
import { Box, Grid, Divider,TextField } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';

import { productDetails } from '../../../constants/data'; 
//import { productDetails } from '../../constants/data'; 
import ProductCard from '../../home/ProductCard';
import { useTheme } from '@emotion/react';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    'JBL',
    'BOAT',
    'ScullCandy',
    'BOAT Wireless',
    'BOAT Airpods',
    'INTEX',
    'BOAT Wireless',
    'BOAT Wireless',
    'BOAT Wireless',
    'BOAT Wireless',
];
  
function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? 400
          : 500
    };
}
  
const useStyle = makeStyles(theme => ({
   
  mainBoxForFiltersandProducts: {
        display: 'flex',
        flexDirection: 'row',
        //backgroundColor: 'pink',
        marginTop: 100,
        marginLeft:20,
        marginRight: 20,
        
    [theme.breakpoints.down('sm')]: {
      //display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      marginTop: 40,
      
    }
        
    },
    filterBox: {
        width: 350,
        height: '100%',
        //backgroundColor: 'red',
        marginTop: 100,
        marginLeft: 20,
        padding: 10,
        
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginLeft: 0,
      }
        
        
    },
    productContainer: {
        //backgroundColor: 'green',
        width: '100%',
        height: '100%',
        marginTop: 40,
        marginLeft: 30,
        marginRight: 20,
      paddingLeft: 20,
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        justifyContent: 'center',
        border: '1px solid #A1B3BA',
        borderRadius:8,
        }
  },
  forProductCards: {
    //backgroundColor: 'orange',
    width: '100%',

    [theme.breakpoints.down('sm')]: {
      justifyContent:'center',
    }
    
  },
    mainHeading: {
        fontSize: '2.4rem',
        color: '#323232',
        fontFamily: ['Montserrat', 'sans-serif'],
        fontweight: 'bold',
      marginBottom: 20,
        
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.7rem',
      }
    },
    filterBody: {
        width: '100%',
      marginBottom: 40,
        
    },
}));



const ShopProducts = () => {

  const classes = useStyle();
  const theme = useTheme();

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <>
      

        {/** Following Box is for Filters UI - filterBox */}

        
          
        {/* <Box className={classes.filterBox} style={{display:'flex',flexDirection:'row',overflowX:'scroll',width:'400px'}}>
            <Typography component="div" style={{ fontSize: '1.5rem',color: '#323232',fontFamily: ['Montserrat', 'sans-serif'],fontweight: 'medium',marginBottom:20,}} >Filters</Typography>       
            <Divider style={{marginBottom:30}}/> 
                    
                     <FormControl sx={{ m: 1, width: '100%' }} className={classes.filterBody} >
        <InputLabel id="Filter-Heading">Price</InputLabel>
        <Select
          labelId="Filter-Heading"
          id="filter-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-filter-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl> 
                    



       
         <FormControl sx={{ m: 1, width: '100%' }} className={classes.filterBody} >
        <InputLabel id="Filter-Heading">Brand</InputLabel>
        <Select
          labelId="Filter-Heading"
          id="filter-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-filter-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4}}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl> 


       
        <FormControl sx={{ m: 1, width: '100%' }} className={classes.filterBody} >
        <InputLabel id="Filter-Heading">Filter 3</InputLabel>
        <Select
          labelId="Filter-Heading"
          id="filter-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-filter-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4}}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
            </FormControl>



         <FormControl sx={{ m: 1, width: '100%' }} className={classes.filterBody} >
        <InputLabel id="Filter-Heading">Price</InputLabel>
        <Select
          labelId="Filter-Heading"
          id="filter-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-filter-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
            </FormControl>



         <FormControl sx={{ m: 1, width: '100%' }} className={classes.filterBody} >
        <InputLabel id="Filter-Heading">Price</InputLabel>
        <Select
          labelId="Filter-Heading"
          id="filter-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-filter-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>     
        </Box>  */}
        {/** filterBox - END */}
                
           
        {/** Following Box is for Product View - ProductContainer */}
       <>
          <Grid item lg={12} xs={12} md={12}>
          <Grid container >
            <Grid item lg={12} xs={12} md={12}>
              <Box style={{display:'flex'}}>
                <Box>
                  <TextField>

                  </TextField>
                </Box>
                <Box>
                  <IconButton>
                   <SearchIcon/>
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid> 
          </Grid>

         {/** Pagination Component is built below. */}
          <Pagination
            data={productDetails}
            RenderComponent={IndividualProductCard} // here whole component is returned
            // flow of the component are - 
            // 1. IndividualProductCard is rendered
            // 2. Then in Pagination Function this whole component is Rendered in Map() container name = forProductCard
            pageLimit={5}
            dataLimit={8}
          />
        </>
        {/** ProductContainer - END */}
        
      
           
    </>
  )
};

// So this function is used to provide ProductCard that we built previously. It will return that ProductCard with data on it
function IndividualProductCard(props) {
  const { imageUrl, productCategory, productName, productPrice } = props.data;
  return (
    <>
      <ProductCard
                  image={imageUrl}
                  category={productCategory}
                  productname={productName}
                  productprice={productPrice}
                            
        />    
        <Divider style={{ marginTop: 40, marginBottom: 40 }} />
      </>
  );
}

// So this function is used for whole pagination purpose. Our component to be rendered is used in this function. Also Functionality for changing pages is also added..
function Pagination({ data,RenderComponent, pageLimit, dataLimit }) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [currentPage]);

  function goToNextPage() {
     // For Next Page
     setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
     // For Previous Page
     setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
     // Change Page Using Page Number
     const pageNumber = Number(event.target.textContent);
     setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
   
     const startIndex = currentPage * dataLimit - dataLimit;
     const endIndex = startIndex + dataLimit;
     return productDetails.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    
     let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
     return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  const classes = useStyle();

  return (
    <>
      {/* show the posts, 10 posts at a time */}
      {/** This is the actual data we want to show.  */}
      <Grid container className={classes.forProductCards}>
          {getPaginatedData().map((d, idx) => (
           
              <Grid item lg={3}> 
              <RenderComponent key={idx} data={d} />
              </Grid> 
          ))}
         </Grid>
       
      
      <Grid container justifyContent='center'>
         {/* show the pagiantion it consists of next and previous buttons along with page numbers, in our case, 5 page numbers at a time*/}
    <div className='pagination'>
      {/* previous button */}
      <button
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
      >
        Prev
      </button>

      {/* show page numbers */}
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`paginationItem ${currentPage === item ? 'active' : null}`}
        >
          <span>{item}</span>
        </button>
      ))}

      {/* next button */}
      <button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? 'disabled' : ''}`}
      >
        Next
      </button>
        </div>
        </Grid>
      {/* <div className="holdPagination">
        
      </div> */}


    
    </>
  );
}

export default ShopProducts;

