import express from 'express'
import cors from 'cors'     //Used for connecting to frontend
import helmet from 'helmet' //Used for security

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());




app.get("/",(req,res)=>res.json({message:"Setup Success"}))

app.listen(3000,()=>console.log("Port listening"))