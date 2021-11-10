import mongoose from "mongoose"

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

const OwnerSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    companyname:{type:String,required:true},
    email: {type: String, required: true},
    password: {type: String},
    shopaddress: {type: String},
    phoneNumber: [{type: Number}],
    maplocation:{type:String,required:true},
    images:{
      type:mongoose.Types.ObjectId,ref:"Images"
    },
    reviews:[reviewSchema]
  },
  {
    timestamps: true
  });

  export const OwnerModel = mongoose.model("Owners", OwnerSchema);