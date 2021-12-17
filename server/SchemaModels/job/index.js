import { text } from 'express';
import { date } from 'joi';
import mongoose from 'mongoose';


const jobSchema = new mongoose.Schema(
    {
        jobTitle:{
            type: String,
            required:true
        },
        description:
        {
            type: String,
            required:true
        },
        
        recruiter:
        {
            type:mongoose.Types.ObjectId,ref:"Business"
        },
        vacancy:
        {
            type:Number
        },
        monthlySalary:
        {
            type:Number,
            required:true
        },
        contactNumber:{
            type: String,
            required:true
        },
        location:
        {
            type:String
        }

    }
);

export const JobModel = mongoose.model('Job',jobSchema);