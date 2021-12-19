

import  express  from 'express';
import cors from 'cors';     //Used for connecting to frontend
import helmet from 'helmet'; //Used for security
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import passport from "passport";
import googleAuthConfig from "./config/google.config.js";
import routeConfig from './config/route.config.js';
import routeBusinessConfig from './config/route.business.config.js';


// Authentication API's
import UserAuth from './API/Auth/UserAuthentication/index.js';
import BusinessAuth from "./API/Auth/BusinessAuthentication/index.js";


// Product API's
import Product from './API/Product/index.js';

//USER API's
import User from "./API/User/index.js"

import Business from "./API/Business/index.js"

//Wishlist API
import Wishlist from "./API/Wishlist/index.js"


import Job from "./API/Job/index.js"
import Review from "./API/Reviews/index.js"



require("dotenv").config();

const app=express();
const ImageKit = require('imagekit');

const imagekit = new ImageKit({
  urlEndpoint: 'https://ik.imagekit.io/ol5ujroevjc/',
  publicKey: 'public_uyc/OZswmVYeM7rvj19wIBHmFaM=',
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});





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

// User API's
app.use('/user',User);

//Business APIs
app.use('/business',Business);

// wishlist APIs
app.use('/wishlist',Wishlist);
//Review APIs

app.use('/review',Review);

app.use('/job',Job);




googleAuthConfig(passport);
routeConfig(passport);
routeBusinessConfig(passport);
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


  app.get('/imagekitAuth', function (req, res) {
    var result = imagekit.getAuthenticationParameters();
    res.send(result);
  });





// // allow cross-origin requests
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", 
//     "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });



