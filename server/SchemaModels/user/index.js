import mongoose from "mongoose"
import jwt from "jsonwebtoken";

import bcrypt from "bcryptjs";



const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 20,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 20,
  },
  username: {
    type: String,
    
    trim: true,
    unique: true,
    index: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  hash_password: {
    type: String,
    
  },
  contactNumber: { type: String },
  profilePicture: { type: String },
},
{ timestamps: true }
);


UserSchema.methods.generateJwtToken = function() {
  return jwt.sign({user: this._id.toString()}, "LocateItLocallyUser");
};



 // Function used for Signup Purpose
 UserSchema.statics.findByEmailAndPhone = async ({ email, contactNumber }) => {
   
  //check whether the email exists
   const checkUserByEmail = await UserModel.findOne({email});

   //check whether the phoneNumber Exists
   const checkUserByPhone = await UserModel.findOne({contactNumber});
   if(checkUserByEmail || checkUserByPhone) {
     throw new Error("User already exist");
     //return true;
   }
   return false;
 };

 // Function Used for SignIn Purpose
UserSchema.statics.findByEmailAndPassword = async ({ email, hash_password }) => {
  // //check whether the email exists
  // const user = await UserModel.findOne({email});
  // if (!user) return null;

  // //compare password
  // //const doesPasswordMatch = await bcrypt.compare(hash_password, user.hash_password);

  //     console.log(user);

  // if(hash_password!==user.hash_password) {
  //   //throw new Error("Invalid password");

  //   return null;
  // }
  // return user;

  // check whether email exist
  const user = await UserModel.findOne({ email });
  if (!user) throw new Error("User does no exist!!!");

  // Compare password
  const doesPasswordMatch = await bcrypt.compare(hash_password, user.hash_password);

  if (!doesPasswordMatch) throw new Error("invalid Password!!!");

  return user;
};

UserSchema.pre("save",function(next){
 const user = this;

 //password isnot modified
   if(!user.isModified("hash_password")) return next();

 //generating bcrypt salt
   bcrypt.genSalt(8,(error,salt)=> {
     if(error) return next(error);

     //hashing the password
     bcrypt.hash(user.hash_password, salt, (error,hash)=>{
       if(error) return next(error);

       //assigning hashed password
       user.hash_password = hash;
       return next();
     });
   });
 });

  
  export const UserModel = mongoose.model("Users", UserSchema);