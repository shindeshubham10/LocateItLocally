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
        jobLocation:
        {
            type:mongoose.Types.ObjectId,ref:"Business"
        },
        recruiter:
        {
            type:mongoose.Types.ObjectId,ref:"Business"
        },
        applicant:
        {
            type:mongoose.Types.ObjectId,ref:"Users"
        },
        numberOfVacancy:
        {
            type:Number
        },
        annualPackage:
        {
            type:Number,
            required:true
        },
        interviewDate:
        {
            type:Date
        },
        department:
        {
            type:Text
        },
        location:
        {
            type:Text
        }

    }
);

export const JobModel = mongoose.model('Job',jobSchema);