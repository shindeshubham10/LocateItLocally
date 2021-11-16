import { BusinessModel } from "../../SchemaModels/business";

import express from "express"


const Router=express.Router()

Router.get(

    "/",(req,res)=>{

        try {
            //await ValidateRestaurantCity(req.query);
            
            const owners = await BusinessModel.find();
        
            return res.json({ owners });
          } catch (error) {
            return res.status(500).json({ error: error.message });
          }

    }
)

Router.get(

    "/:_id",(req,res)=>{

        try {
            //await ValidateRestaurantId(req.params);
        
            const { _id } = req.params;
            const owner = await BusinessModel.findById(_id);
            if (!owner)
              return res.status(404).json({ error: "Owner Not Found" });
        
            return res.json({ owner });
          } catch (error) {
            return res.status(500).json({ error: error.message });
          }
        }

    
)

