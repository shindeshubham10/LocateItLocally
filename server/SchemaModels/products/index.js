import mongoose from 'mongoose';
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);


const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    
    seller: { type: mongoose.Types.ObjectID, ref: 'Business' },
    image: { type:mongoose.Types.ObjectId,ref:"Images" },
    brand: { type: String, required: true },
    productcategory: { type:mongoose.Types.ObjectId,ref:"Category" },
    
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);
export const ProductModel = mongoose.model('Product', productSchema);