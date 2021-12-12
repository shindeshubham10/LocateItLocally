import { BusinessModel } from "../../SchemaModels/business";

import express from "express"
import passport from "passport";


const Router=express.Router()

// 
Router.get("/", passport.authenticate("business"), async (req, res) => {
  try {
    console.log(req);
   console.log(req.session.passport.user._doc);
   const { email, firstName, contactNumber, lastName,_id,description,address,website,twitter,instagram,facebook,name} =
      req.session.passport.user._doc;
     
    return res.json({ business: {  email, firstName, contactNumber, lastName,_id,description,address,website,twitter,instagram,facebook,name} });
  } catch (error) {     return res.status(500).json({ error: error.message });
  }
});


Router.get("/:_id", async (req, res) => {
  try {

    
    const business = await BusinessModel.findById(req.params._id);
    

    return res.json({ business });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.put("/update", passport.authenticate("business"), async (req, res) => {
  try {
    // console.log(req.params);
    const { _id } = req.session.passport.user._doc;
    const  businessData  = req.body.businessUpdatedata;
    console.log(_id);
    console.log("Hurray");
    console.log(businessData);
    const updateBusinessData = await BusinessModel.findByIdAndUpdate(
      _id,
      {
        $set: businessData,
      },
      { new: true }
    );

    return res.json({ business: updateBusinessData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


export default Router;