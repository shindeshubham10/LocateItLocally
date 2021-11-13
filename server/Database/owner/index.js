import mongoose from "mongoose";

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



const OwnerSchema = new mongoose.Schema({
  
  ownerID: {
    type:String,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    max: 10,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    max: 10,
  },
  hash_password: {
    type: String
  },
  profileImage:{
    type: mongoose.Types.ObjectId,
    ref: "ProfileImage"
    },
  
  },
  {
    timestamps: true
  });

export const OwnerModel = mongoose.model("Owners", OwnerSchema);
  
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