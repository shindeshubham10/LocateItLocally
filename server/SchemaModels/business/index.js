import mongoose from "mongoose";
// import  {categorySchema}  from "../category/index";
//import { CategoryModel } from "../category/index";


import jwt from "jsonwebtoken";

import bcrypt from "bcryptjs";


const BusinessSchema = new mongoose.Schema({

    email:{
      type: String,
      required: true

    },

    name: {
      type: String,
      required: true
    },
    
    firstName:{

      type: String,
      required: true
    },
    lastName:{

      type: String,
      required: true
    },
    contactNumber:{

      type: String,
      required: true

    },

    password:{

      type: String,
      required: true

    },

    address:{
      type:String,
    },
    description:{
      type:String,
    },
    website:{
      type:String,
    },
    twitter:{
      type:String,
    },
    instagram:{
      type:String,
    },
    facebook:{
      type:String,
    },
    maplocation: {
      type:String,
    },
    images:{
      type: mongoose.Types.ObjectId,
      ref: "Images"
    },
    
    reviews: {
      type: mongoose.Types.ObjectId,
      ref: "Reviews",
    },
  
  
  
  
  });

  BusinessSchema.methods.generateJwtToken = function() {
    return jwt.sign({business: this._id.toString()}, "LocateItLocallyBusiness");
  };
  
  
  
   // Function used for Signup Purpose
   BusinessSchema.statics.findByEmailAndPhone = async ({ email, contactNumber }) => {
     
    //check whether the email exists
     const checkUserByEmail = await BusinessModel.findOne({email});
  
     //check whether the phoneNumber Exists
     const checkUserByPhone = await BusinessModel.findOne({contactNumber});

     if(checkUserByEmail || checkUserByPhone) {
      throw new Error("Business already exist");
      //return true;
    }
    return false;
     
   };
  
   // Function Used for SignIn Purpose
  BusinessSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
    //check whether the email exists
    const business = await BusinessModel.findOne({email});
    if (!business) throw new Error("User does no exist!!!");

      // Compare password
      const doesPasswordMatch = await bcrypt.compare(password, business.password);

      if (!doesPasswordMatch) throw new Error("invalid Password!!!");

      return business;

   
  };
  
  BusinessSchema.pre("save",function(next){

    console.log("frfrfbn");
     const business = this;
      
   //password isnot modified
     if(!business.isModified("password")) return next();

     console.log("frfrfbn");
  
   //generating bcrypt salt
     bcrypt.genSalt(8,(error,salt)=> {
       if(error) return next(error);

       //hashing the password
       bcrypt.hash(business.password, salt, (error,hash)=>{
         if(error) return next(error);
  
         //assigning hashed password
         console.log(business.password);
         business.password = hash;
         return next();
       });
     });
   });
  
   
  
  export const BusinessModel = mongoose.model("Business", BusinessSchema);