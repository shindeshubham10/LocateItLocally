import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    
    seller: { type: mongoose.Types.ObjectId, ref: 'Business' },
    image: [
      {
        type:String
      }
    ],
    
    brand: { type: String, required: true },
    category: {type: String, required: true },
    
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, },
    availibilty:{ type:String }, 
    reviews: {
      type: mongoose.Types.ObjectId,
      ref: "Reviews",
    },
  },
  {
    timestamps: true,
  }
);
export const ProductModel = mongoose.model('Product', productSchema);