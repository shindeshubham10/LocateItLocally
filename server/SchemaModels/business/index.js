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




const BusinessSchema = new mongoose.Schema({

    email:{
      type: String,
      required: true

    },

    name: {
      type: String,
      required: true
    },
    
    firstName:{

      type: String,
      required: true
    },
    lastName:{

      type: String,
      required: true
    },
    contactNumber:{

      type: String,
      required: true

    },

    password:{

      type: String,
      required: true

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
    
    reviews: [
      reviewSchema
    ]
  
  
  
  
  });

  BusinessSchema.methods.generateJwtToken = function() {
    return jwt.sign({user: this._id.toString()}, "LocateItLocally");
  };
  
  
  
   // Function used for Signup Purpose
   BusinessSchema.statics.findByEmailAndPhone = async ({ email, contactNumber }) => {
     
    //check whether the email exists
     const checkUserByEmail = await BusinessModel.findOne({email});
  
     //check whether the phoneNumber Exists
     const checkUserByPhone = await BusinessModel.findOne({contactNumber});
     if(checkUserByEmail || checkUserByPhone) {
       throw new Error("Business already exist");
     }
     return false;
   };
  
   // Function Used for SignIn Purpose
  BusinessSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
    //check whether the email exists
    const user = await BusinessModel.findOne({email});
    if (!user) throw new Error("Business doesnot exist");
  
    //compare password
   // const doesPasswordMatch = await bcrypt.compare(password, user.password);
  
    if(password!==user.password) {
      return new Error("Invalid password");
    }
    return user;
  };
  
  // BusinessSchema.pre("save",function(next){
  //   const user = this;
  
  // //password isnot modified
  //   if(!user.isModified("password")) return next();
  
  // //generating bcrypt salt
  //   bcrypt.genSalt(8,(error,salt)=> {
  //     if(error) return next(error);
  
  //     //hashing the password
  //     bcrypt.hash(user.password, salt, (error,hash)=>{
  //       if(error) return next(error);
  
  //       //assigning hashed password
  //       user.password = hash;
  //       return next();
  //     });
  //   });
  // });
  
   
  
  export const BusinessModel = mongoose.model("Business", BusinessSchema);