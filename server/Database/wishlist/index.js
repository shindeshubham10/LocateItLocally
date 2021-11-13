import  mongoose  from "mongoose";
import  products from "../products/index"

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
          products
      ]
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Wishlist", wishlistSchema);