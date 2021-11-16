import mongoose  from "mongoose";



const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    
    categoryImage: { type: String },

    //business
    createdBY:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "business"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);