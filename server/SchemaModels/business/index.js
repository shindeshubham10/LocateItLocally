import mongoose from "mongoose";
import category from "../category/index"

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

    name: {
      type: String,
      required: true
    },
    
    owner: { 
        firstname:
        {
          type:String,
          required:true
        },
        lastname:
        {
          type:String,
          required:true
        }
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
    categories:[
        category
    ],
    reviews: [
      reviewSchema
    ]
  
  
  
  
  });
  
  export const BusinessModel = mongoose.model("Business", BusinessSchema);