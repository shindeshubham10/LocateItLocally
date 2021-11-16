import express from "express";
import passport from "passport";

// Database modal
import {ProductModel} from "../../Database/products";
import { BusinessModel } from "../../Database/owner";
// validation
// import {
//   ValidateRestaurantCity,
//   ValidateRestaurantSearchString,
// } from "../../validation/restaurant";
// import { ValidateRestaurantId } from "../../validation/food";

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
Router.get("/:_id", async (req, res) => {
  try {
    //await ValidateRestaurantId(req.params);

    const { _id } = req.params;
    const product = await ProductModel.findById(_id);
    if (!product)
      return res.status(404).json({ error: "Product Not Found" });

    return res.json({ product });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /search
Des       Get restaurant details based on search string
Params    none
Body      searchSting  
Access    Public
Method    GET  
*/
Router.get("/search", async (req, res) => {
  try {
    //await ValidateRestaurantSearchString(req.body);

    const { searchString } = req.body;

    const products = await ProductModel.find({
      name: { $regex: searchString, $options: "i" },
    });
    if (!products)
      return res
        .status(404)
        .json({ error: `No Product matched with ${searchString}` });

    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get("/owner/:_id", async (req, res) => {
  try {
    //await ValidateRestaurantId(req.params);

    const { _id } = req.params;
    const products = await ProductModel.find({ seller: _id });

    return res.json({ products });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


Router.get("/:category", async (req, res) => {
  try {
    //await ValidateRestaurantId(req.params);

    const { category } = req.params;
    const products = await ProductModel.find({
      category: { $regex: category, $options: "i" },
    });

    return res.json({ products });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get("/:location", async (req, res) => {
  try {
    //await ValidateRestaurantId(req.params);

    const { location } = req.params;
    
    const shops=await BusinessModel.find(
      {
        maplocation: { $regex: location, $options: "i" },
      }

     
      

    )

    const products=shops.map(
      shop=>await ProductModel.find(

        {
          seller:shop.name
        }

      )

    )

    return res.json({ products });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});






export default Router;