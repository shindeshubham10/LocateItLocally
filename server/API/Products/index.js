import express from "express";

const router = express.Router();

// Import Product Model
import { ProductModel } from "../../SchemaModels/products";

/**
Route         /addProduct
Descrip       Add Product To the Database
Params        None
Access        Private (only owner can add the product into database)
Method        POST
*/

router.post("/addProduct", async(req,res) => {
    try {
        const newProduct = req.body.productInformation;
        console.log(newProduct);
        //console.log(req.body.productInformation)
        const addNewProduct = await ProductModel.create(newProduct);
      
        return res.json({ newProductAdded: addNewProduct, message: "New Product Added" });

  
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
});
  


/**
Route         /showallproducts
Descrip       Fetch All Products from Database
Params        None
Access        Private (only owner can add the product into database)
Method        GET
*/
router.get("/showallproducts", async(req,res) => {
    try {
       
        const allProducts = await ProductModel.find();

      
        return res.json({ allProducts, message: "All Products" });

  
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
});




export default router;
