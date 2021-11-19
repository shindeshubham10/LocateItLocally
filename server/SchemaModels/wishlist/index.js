import  mongoose  from "mongoose";
import  product from "../products/index"

const wishlistSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
      },
      //user
      createdBy: { 
          type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true 
      },
  
      discription:{
        type:String,
      },
      wishlistProducts:[
          {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'product' 
          }          
      ]
    },
    {
        timestamps: true,
    }
);

export const WishlistModel = mongoose.model("Wishlist", wishlistSchema);