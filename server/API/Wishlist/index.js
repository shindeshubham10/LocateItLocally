import express from "express";

import passport from 'passport';

// model imported
import { WishlistModel } from "../../SchemaModels/wishlist";

// import controller 
import { addToWishlist,getAllWishlists,addProductToWishlist } from "../../Controllers/wishlistController";

const Router = express.Router();



/*
Route     /getAllWishlist
Des       Get all Wishlists created
Params    none
Access    Public
Method    GET
*/
//Router.get('/getAllWishlists',getAllWishlists);
Router.get("/getAllWishlists", passport.authenticate("user"),getAllWishlists);


/*
Route     /addtoWishlist
Des       Add New Wishlist
Params    none
Access    Public
Method    POST
*/
Router.post('/addtoWishlist',addToWishlist);



/*
Route     /addProductToWishlist
Des       Add Product Wishlist
Params    _id
BODY      user data
Access    Public
Method    PUT  
*/
Router.put("/update/:_id", addProductToWishlist);




/*
Route     /getProductsofWishlist
Des       Get Products of Specific Wishlist
Params    none
Access    Public
Method    GET
*/
//Router.get('/getProductofWIshlist',getProductOfWishlist);







export default Router;