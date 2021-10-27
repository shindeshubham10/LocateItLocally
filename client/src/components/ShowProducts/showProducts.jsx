import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Box, Grid, Typography,OutlinedInput,InputLabel,MenuItem,FormControl,Select,Chip,Divider } from '@material-ui/core';

import { productDetails } from '../../constants/data'; 
import ProductCard from '../home/ProductCard';
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
        marginBottom:40,
    },
}));



const ShowProducts = () => {

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
            <Box className={classes.mainBoxForFiltersandProducts}>

          {/** Following Box is for Filters UI - filterBox */}

          <Grid container spacing={2} className={classes.filterBox}>
            
            
            <Grid item lg={12} xs={12} md={12}>
            <Typography component="div" style={{ fontSize: '1.5rem',color: '#323232',fontFamily: ['Montserrat', 'sans-serif'],fontweight: 'medium',marginBottom:20,}} >Filters</Typography> 
            <Divider style={{marginBottom:30}}/>
            </Grid>

            {/** First Filter  */}
            <Grid item lg={12} xs={6}>
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
        </Grid>



            {/** Second Filter */}
            <Grid item lg={12} xs={6}>
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
            </Grid>


            {/** Third Filter */}
            <Grid item lg={12} xs={6}>
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
            </Grid>


          </Grid> 
          
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
          <Grid container className={classes.productContainer}>
            <Grid container >
            <Grid item lg={12} xs={12} md={12}>
                        <Typography className={classes.mainHeading} component="div" >Sound and Accessories</Typography>
                        <Divider style={{marginBottom:30,}}/>
                    </Grid>
            </Grid>
                    
                    
                    {
                       productDetails.map( details => (
                        
                        <Grid item lg={3}>
                             <ProductCard
                                  image={details.imageUrl}
                                  category={details.productCategory}
                                  productname={details.productName}
                                  productprice={details.productPrice}
           
                                  
                           />
                           <Divider style={{marginTop:40,marginBottom:40}}/>
                       </Grid>
                        
                        
                      ) ) 
                    }
                    {/* <Grid item lg={3}>Category 2</Grid>
                    <Grid item lg={3}>Category 3</Grid>
                    <Grid item lg={3}>Category 4</Grid> */}
                </Grid>
                {/** ProductContainer - END */}
            </Box>
           
        </>
    )
}

export default ShowProducts;
