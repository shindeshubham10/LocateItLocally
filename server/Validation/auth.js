import joi from "joi";


// Validation For SignUp
export const ValidateSignup = (userData) => {

const Schema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    username: joi.string().required().min(5),
    email: joi.string().required().email(),
    hash_password: joi.string().required().max(50).min(5),
    contactNumber: joi.string().length(10),
  
});

return Schema.validateAsync(userData);

};


// Validation For SignIn
 export const ValidateSignin = (userData) => {

 const Schema = joi.object({
   email: joi.string().email().required(),
   password: joi.string().min(5).max(50).required()
 });

 return Schema.validateAsync(userData);

 };