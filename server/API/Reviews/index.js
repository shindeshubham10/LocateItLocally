import express from "express"

import {ProductModel} from "../../Database/products"

const Router=express.Router()


Router.get(
    ":_id/reviews",(req,res)=>{

        try {
            
            
            const product = await ProductModel.find({_id});
            const reviews=product.reviews;
            return res.json({ reviews });
          } catch (error) {
            return res.status(500).json({ error: error.message });
          }

        
    }
)

export default Router