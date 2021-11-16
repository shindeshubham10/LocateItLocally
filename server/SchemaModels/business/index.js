import mongoose from "mongoose";
import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";


const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

const BusinessSchema = new mongoose.Schema({

  businessName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required:true,
  },
  hash_password: {
    type: String,
    required:true
  },
  ownerFirstName:{
    type: String,
  },
  ownerlastName: {
    type:String,
  },
  ownerContact:{
    type:String,
  },
  address:{
    type:String,
  },
  description:{
    type:String,
  },
  maplocation: {
    type:String,
  },
  images:{
    type: mongoose.Types.ObjectId,
    ref: "Images"
  },
  socialMediaLinks: [
    {
      type:String,
    }
  ],
  reviews: [
    reviewSchema
  ]
});


BusinessSchema.methods.generateJwtToken = function() {
  return jwt.sign({Business: this._id.toString()}, "ZomatoApp");
};



 // Function used for Signup Purpose
 BusinessSchema.statics.findByEmailAndPhone = async ({ email,  ownerContact }) => {
   
  //check whether the email exists
   const checkBusinessByEmail = await BusinessModel.findOne({email});

   //check whether the phoneNumber Exists
   const checkBusinessByPhone = await BusinessModel.findOne({ownerContact});
   if(checkBusinessByEmail || checkBusinessByPhone) {
     throw new Error("Business already exist");
   }
   return false;
 };

 // Function Used for SignIn Purpose
BusinessSchema.statics.findByEmailAndPassword = async ({ email, hash_password }) => {
  //check whether the email exists
  const Business = await BusinessModel.findOne({email});
  if (!Business) throw new Error("Business doesnot exist");

  //compare password
  const doesPasswordMatch = await bcrypt.compare(hash_password, Business.hash_password);

  if(!doesPasswordMatch) {
    throw new Error("Invalid password");
  }
  return Business;
};

BusinessSchema.pre("save",function(next){
  const Business = this;

//password isnot modified
  if(!Business.isModified("hash_password")) return next();

//generating bcrypt salt
  bcrypt.genSalt(8,(error,salt)=> {
    if(error) return next(error);

    //hashing the password
    bcrypt.hash(Business.hash_password, salt, (error,hash)=>{
      if(error) return next(error);

      //assigning hashed password
      Business.hash_password = hash;
      return next();
    });
  });
});

  BusinessSchema.methods.generateJwtToken = function() {
    return jwt.sign({Business: this._id.toString()}, "ZomatoApp");
  };
  
  
  BusinessSchema.pre("save",function(next){
    const Business = this;
  
  //password isnot modified
    if(!Business.isModified("password")) return next();
  
  //generating bcrypt salt
    bcrypt.genSalt(8,(error,salt)=> {
      if(error) return next(error);
  
      //hashing the password
      bcrypt.hash(Business.password, salt, (error,hash)=>{
        if(error) return next(error);
  
        //assigning hashed password
        Business.password = hash;
        return next();
      });
    });
  });




export const BusinessModel = mongoose.model("Businesses", BusinessSchema);
  
/**
 * 
 * Name 
 * Business Name
 * useremail
 * contact num
 * password
 * 
 * 
 * Business Profile
 * 
 * Business Name
 * First name last name
 * email phone
 * business website addresss
 * business description
 * twitter insta facebook
 */