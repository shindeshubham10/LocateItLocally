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
Router.get("/:productId", async (req, res) => {
  try {
    const reviews = await ReviewModel.find({ product: req.params.productId });
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

    await ReviewModel.create({ ...reviewData, user: _id });

    return res.json({ review: "Sucessfully Created Review." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router