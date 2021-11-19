

import  express  from 'express';
import cors from 'cors';     //Used for connecting to frontend
import helmet from 'helmet'; //Used for security
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import passport from "passport";
import googleAuthConfig from "./config/google.config.js";


// Authentication API's
import UserAuth from './API/Auth/UserAuthentication/index.js';
import BusinessAuth from "./API/Auth/BusinessAuthentication/index.js";


// Product API's
import Product from './API/Product/index.js';




require("dotenv").config();

const app=express();







app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.use(passport.initialize())
app.use(passport.session());

// Two Authentications imported
app.use('/userAuth', UserAuth);
app.use('/businessAuth', BusinessAuth);



// Product API's
app.use('/newProduct', Product);

// Product API's


googleAuthConfig(passport);

/*
app.get("/",function(req,res){
    res.render(home);
});
*/

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@locate-it-locally.tunlv.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,

    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true,
        //useFindAndModify: false,
      }
)
  .then(() => {
    console.log("Database connected");
  });


