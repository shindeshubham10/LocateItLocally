 import express from "express";
 import passport from "passport";

// // Database modal
import { ProductModel } from "../../SchemaModels/products";
import { getProductDetails, getProducts,getProductByCategory } from "../../Controllers/productController";
// import { BusinessModel } from "../../SchemaModels/business";
// // validation
// // import {
// //   ValidateRestaurantCity,
// //   ValidateRestaurantSearchString,
// // } from "../../validation/restaurant";
// // import { ValidateRestaurantId } from "../../validation/food";

 const Router = express.Router();

/*
Route     /
Des       Get all the products
Params    none
Access    Public
Method    GET
*/
Router.get("/", async (req, res) => {
  try {
    //await ValidateRestaurantCity(req.query);

    const products = await ProductModel.find();

    return res.json({ products });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /
Des       Get individual  details based on id
Params    id
Access    Public
Method    GET
*/
// Router.get("/getProducts", async (req, res) => {
//   try {
//     //await ValidateRestaurantCity(req.query);

//     const products = await ProductModel.find();
//     console.log("inside API");
//     console.log(products);
//     return res.json({ products });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// getProducts code is writteen in controller->productController file
Router.get("/getProducts", getProducts);


// /*
// Route     /
// Des       Get individual  details based on id
// Params    id
// Access    Public
// Method    GET
// */

Router.get("/:_id",getProductDetails);
  

// Get Products Related to the Category or any property 
 /*
  Route      /
   Des       Get Products based on category
   Params    id
   Access    Public
   Method    GET
   */
Router.get("/Bycategory/:category",getProductByCategory);



//Add Products
Router.post("/add",async(req,res)=>{

        try {
          const product = await new ProductModel(req.body);
          product.save();

          res.status(200).json('Product saved successfully');
      } catch (error) {
          res.status(500).json(error);
      }


})

/*
Route     /search
Des       Get restaurant details based on search string
Params    none
Body      searchSting
Access    Public
Method    GET
*/
// Router.get("/search", async (req, res) => {
//   try {
//     ///await ValidateRestaurantSearchString(req.body);

//     const { searchString } = req.body;

//     const products = await ProductModel.find({
//       name: { $regex: searchString, $options: "i" },
//     });
//     if (!products)
//       return res
//         .status(404)
//         .json({ error: `No Product matched with ${searchString}` });

//     return res.json({ products });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// Router.get("/owner/:_id", async (req, res) => {
//   try {
//     //await ValidateRestaurantId(req.params);

//     const { _id } = req.params;
//     const products = await ProductModel.find({ seller: _id });

//     return res.json({ products });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });


// // Router.get("/:category", async (req, res) => {
// //   try {
// //     //await ValidateRestaurantId(req.params);

// //     const { category } = req.params;
// //     const products = await ProductModel.find({
// //       category: { $regex: category, $options: "i" },
// //     });

// //     return res.json({ products });
// //   } catch (error) {
// //     return res.status(500).json({ error: error.message });
// //   }
// // });

// // Router.get("/:location", async (req, res) => {
// //   try {
// //     //await ValidateRestaurantId(req.params);

// //     const { location } = req.params;

// //     const shops=await BusinessModel.find(
// //       {
// //         maplocation: { $regex: location, $options: "i" },
// //       }




// //     )

// //     const products=shops.map(
// //       async (shop)=>{return await ProductModel.find(

// //         {
// //           seller:shop.name
// //         }

// //       )
// //       }

// //     )

// //     return res.json({ products });
// //   } catch (error) {
// //     return res.status(500).json({ error: error.message });
// //   }
// // });






export default Router;