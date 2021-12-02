import express from "express"
import passport from "passport"
import {ProductModel} from "../../SchemaModels/products"
import {ReviewModel} from "../../SchemaModels/review"

const Router=express.Router()

/*
Route     /
Des       Get all review of product
Params    resid
BODY      none
Access    Public
Method    GET  
*/
Router.get("/product/:productId", async (req, res) => {
  try {
    const reviews = await ReviewModel.find({ product: req.params.productId });
    return res.json({ reviews });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get("/business/:businessId", async (req, res) => {
  try {
    console.log("In API");
    console.log(req.params.businessId );
    const reviews = await ReviewModel.find({ business: req.params.businessId });
    return res.json({ reviews });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.post("/new", passport.authenticate("user"), async (req, res) => {
  try {

    console.log("In the Review API");
   
    console.log(req.session.passport.user._doc);
    console.log(req.body);
    const { _id } = req.session.passport.user._doc;
    const { reviewData } = req.body;
    if(reviewData.isProductReview===true)
    {
      const review = await ReviewModel.find({ user:_id ,isProductReview:true });
      console.log(review);
      if(review.length!==0)
      {
        throw new Error("Product already reviewed");
      }

    }
    else
    {
      const reviewB = await ReviewModel.find({ user:_id ,isBusinessReview:true });
      console.log(reviewB);
      if(reviewB.length!==0)
      {
        throw new Error("Business already reviewed");
      }

    }

    

    
  
    
    await ReviewModel.create({ ...reviewData, user: _id });

    

    // if(!review)
    // {
    //     await ReviewModel.create({ ...reviewData, user: _id });
    // }
    // else
    // {
    //   throw error("Already Reviewed")
    // }

    return res.json({ review: "Sucessfully Created Review." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router