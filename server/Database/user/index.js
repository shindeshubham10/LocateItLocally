import mongoose from "mongoose"
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 20,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 20,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  hash_password: {
    type: String,
    required: true,
  },
  contactNumber: { type: String },
  pofilePicture: { type: String },
},
{ timestamps: true }
);


UserSchema.methods.generateJwtToken = function() {
  return jwt.sign({user: this._id.toString()}, "ZomatoApp");
};

UserSchema.statics.findEmailAndPhone = async ({ email, contactNumber }) => {
  //check whether the email exists
  const checkUserByEmail = await UserModel.findOne({email});

  //check whether the phoneNumber Exists
  const checkUserByPhone = await UserModel.findOne({contactNumber});
  if(checkUserByEmail || checkUserByPhone) {
    throw new Error("User already exist");
  }
  return false;
};

UserSchema.statics.findByEmailAndPassword = async ({ email, hash_password }) => {
  //check whether the email exists
  const user = await UserModel.findOne({email});
if(!user) throw new Error("User doesnot exist");

  //compare password
  const doesPasswordMatch = await bcrypt.compare(hash_password, user.hash_password);

  if(!doesPasswordMatch) {
    throw new Error("Invalid password");
  }
  return user;
};

UserSchema.pre("save",function(next){
  const user = this;

//password isnot modified
  if(!user.isModified("hash_password")) return next();

//generating bcrypt salt
  bcrypt.genSalt(8,(error,salt)=> {
    if(error) return next(error);

    //hashing the password
    bcrypt.hash(user.hash_password, salt, (error,hash)=>{
      if(error) return next(error);

      //assigning hashed password
      user.hash_password = hash;
      return next();
    });
  });
});

  export const UserModel = mongoose.model("Users", UserSchema);