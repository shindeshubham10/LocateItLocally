import express from 'express'
import cors from 'cors'     //Used for connecting to frontend
import helmet from 'helmet' //Used for security
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import passport from "passport";


import googleAuthConfig from "./config/google.config.js";

import Auth from "./API/Auth"
const app=express();






app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.use(passport.initialize())
app.use(passport.session())
app.use('/auth',Auth);

googleAuthConfig(passport);



dotenv.config();
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



app.get("/",(req,res)=>res.json({message:"Setup Success"}))


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });