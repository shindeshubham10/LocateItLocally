
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
    {
        product: { type: mongoose.Types.ObjectId, ref: "Product" },
        business: { type: mongoose.Types.ObjectId, ref: "Business" },
        user: { type: mongoose.Types.ObjectId, ref: "Users" },
        rating: { type: Number, required: true },
        reviewText: { type: String, required: true },
        isProductReview: Boolean,
        isBusinessReview: Boolean,
    },
    {
      timestamps: true,
    }
  );

  export const ReviewModel = mongoose.model('Reviews', reviewSchema);
  
  