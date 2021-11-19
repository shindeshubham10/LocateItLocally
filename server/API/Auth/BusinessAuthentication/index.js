import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";
import mongoose from "mongoose";
//import { Router } from "express";
const router = express.Router();

//Models
import { BusinessModel } from "../../../SchemaModels/business";
require("dotenv").config();




//Validation for fields we are entering
//import { ValidateSignup , ValidateSignin} from "../../../Validation/auth";



/*
Route         /signup
Descrip       Signup with email and password
Params        None
Access        Public
Method        POST
*/

router.post("/signup", async(req,res) => {
  try {
//await ValidateSignup(req.body.credentials);
  console.log("grr");
  await BusinessModel.findByEmailAndPhone(req.body);
  console.log("grrtttt");
  //DB
 

  //  const newBusiness = await BusinessModel.create(req.body);
  const user = req.body;
    const newBusiness = new BusinessModel(user);
    await newBusiness.save();
    console.log("After Save");
    console.log(newBusiness);
    console.log("After fdone")

   console.log("ho gaya");
   console.log(newBusiness);

   //JWT Auth Token
   //const token = newBusiness.generateJwtToken();

   return res.status(200).json({"jhal":"hjgybhj"});

  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});


/*
Route         /signin
Descrip       Signin with email and password
Params        None
Access        Public
Method        POST
*/

 router.post("/signin", async(req,res) => {
   try {
 //await ValidateSignin(req.body.credentials);
    console.log("ghvvh");
    const user = await BusinessModel.findByEmailAndPassword(req.body);
    if(user===NULL)
        res.json({ error:"Wroong passs" });
    //JWT Auth Token
    //const token = user.generateJwtToken();

     return res.json({ userExists: user });
    //return res.status(200).json({token, status: "Success"});

   } catch (error) {
     return res.status(500).json({error: error.response});
   }
 });


// /*
// Route         /google
// Descrip       Google Signin
// Params        None
// Access        Public
// Method        GET
// */

router.get("/google", passport.authenticate("google",{
 scope: [
   "https://www.googleapis.com/auth/userinfo.profile",
   "https://www.googleapis.com/auth/userinfo.email"
 ],
 })
 );

// /*
// Route         /google/callback
// Descrip       Google Signin callback
// Params        None
// Access        Public
// Method        GET
// */

 router.get("/google/callback", passport.authenticate("google",{failureRedirect: "/"}),
 (req,res) => {
   return res.json({token: req.session.passport.user.token});
 }
 );

export default router;
