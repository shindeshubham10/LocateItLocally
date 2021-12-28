 import express from "express";
 import passport from "passport";

 
import { JobModel } from "../../SchemaModels/job";


  const Router = express.Router();



Router.post("/add",passport.authenticate("business"), async(req,res)=>{

        try {


          console.log(req.body);
          
          const { _id }=req.session.passport.user._doc;
          const {jobData}=req.body;
          console.log(_id);
          console.log(jobData);
          await JobModel.create({ ...jobData, recruiter: _id });
          console.log("Jhala ka");
          console.log(jobData);

          return res.status(200).json('Job saved successfully');
      } catch (error) {
          return res.status(500).json(error);
      }


})


Router.put("/update/:id",passport.authenticate("business"), async (req, res) => {
  try {
    
    const { _id } = req.session.passport.user._doc;
    const  jobData  = req.body.jobUpdatedata;
    console.log(_id);
    console.log("Hurray");
    console.log(jobData);
    const {id}=req.params;
    console.log(id);
    const updateJobData = await JobModel.findByIdAndUpdate(
      id,
      {
        $set: jobData,
      },
      { new: true }
    );

    return res.json({ job: updateJobData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get("/business/getJobsofbusiness",passport.authenticate("business"), async(req,res)=>{

  try {
    console.log("jdbehjbfchhfcb");
    console.log("IN GET PROD");
    
    const {_id}=req.session.passport.user._doc;
    console.log(_id);
    const jobs = await JobModel.find({recruiter:_id});
    console.log(jobs);
    

    return res.status(200).json({jobs});
  } catch (error) {
    return res.status(500).json(error);
}


})

//delete products of a business
Router.delete("/business/deleteJobsofbusiness",passport.authenticate("business"), async(req,res)=>{

  try {
    console.log("jdbehjbfchhfcb");
    console.log("IN DELETE PROD");
    
    const {_id}=req.session.passport.user._doc;
    console.log(_id);
    console.log(req.body.job_id_list);


    // const products = await ProductModel.find({seller:_id});
    // console.log(products);
    await JobModel.deleteMany({_id:{$in:req.body.job_id_list}})
    

    return res.status(200).json("Deleted SucessFully");
  } catch (error) {
    return res.status(500).json(error);
}


})

//Show Jobs to users

Router.get("/business/getJobsofbusinessbyId/:id", async(req,res)=>{

  try {
    console.log("jdbehjbfchhfcb");
    console.log("IN GET JOB");
    const {id}=req.params;
    
    const jobs = await JobModel.find({recruiter:id});
    console.log(jobs);
    

    return res.status(200).json({jobs});
  } catch (error) {
    return res.status(500).json(error);
}


})



  export default Router;