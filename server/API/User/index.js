import express from "express";
import passport from "passport";

// Database modal

import {UserModel} from "../../SchemaModels/user" 
const Router = express.Router();

/*
Route     /
Des       Get user data
Params    _id
BODY      none
Access    Public
Method    GET  
*/
Router.get("/", passport.authenticate("user"), async (req, res) => {
   try {
    console.log(req.session.passport.user._doc);
    const { email, firstName, contactNumber, lastName,_id,address,gender,twitter,facebook,instagram,birthdate} =
       req.session.passport.user._doc;
      
     return res.json({ user: {  email, firstName, contactNumber, lastName,_id,address,gender,twitter,facebook,instagram,birthdate} });
   } catch (error) {     return res.status(500).json({ error: error.message });
   }
 });

/*
Route     /:_id
Des       Get user data
Params    _id
BODY      none
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params._id);
    const { firstName } = user;

    return res.json({ user: { firstName } });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route     /update
Des       update user id
Params    _id
BODY      user data
Access    Public
Method    PUT  
*/
Router.put("/update",passport.authenticate("user"), async (req, res) => {
  try {
    
    const { _id } = req.session.passport.user._doc;
    const  userData  = req.body.userUpdatedata;
    console.log(_id);
    console.log("Hurray");
    console.log(userData);
    const updateUserData = await UserModel.findByIdAndUpdate(
      _id,
      {
        $set: userData,
      },
      { new: true }
    );

    return res.json({ user: updateUserData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;