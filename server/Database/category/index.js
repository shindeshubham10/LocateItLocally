import mongoose  from "mongoose";



const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    
    categoryImage: { type: String },

    //owner
    createdBY:{
        type: mongoose.Types.ObjectId,
        ref: "owner"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);