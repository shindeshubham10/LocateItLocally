
import axios from "axios"

import * as actions from '../constants/jobconstants';

const backendUrl = 'http://localhost:2000';


export const addJobDetails = (jobData) => async (dispatch)=>{
    try {
       
        //const { data } = await axios.post(`${backendUrl}/newProduct/add`, productData);
        console.log(jobData);
        const Job= await axios({
            method: "POST",
            url: `${backendUrl}/job/add`,
            data: { jobData },
          });
       
        return dispatch({ type: actions.ADD_JOB_SUCCESS, payload: Job.data });
    } catch (error) {
        console.log("Error while addJob");
        return dispatch({ type: actions.ADD_JOB_FAILURE, payload: error});
    }
}

export const getJobsofbusiness = () => async (dispatch) => {

    try {
        console.log("Enter getJobs in axios ");
        const jobs = await axios.get(`${backendUrl}/job/business/getJobsofbusiness`);
        console.log("Response in Job Actions ");
        console.log(jobs);
       return dispatch({ type: actions.GET_JOBS_OF_BUSINESS_SUCCESS, payload: jobs.data });
      

    } catch (error) {
        console.log("Error while getJobs");
        return dispatch({ type: actions.GET_JOBS_OF_BUSINESS_FAILURE, payload: error.response });
    }
};

export const getJobsofbusinessbyID = (id) => async (dispatch) => {

  try {
      console.log("Enter getJobs in axios ");
      const jobs = await axios.get(`${backendUrl}/job/business/getJobsofbusinessbyId/${id}`);
      console.log("Response in Job Actions ");
      console.log(jobs);
     return dispatch({ type: actions.GET_JOBS_OF_BUSINESS_BYID_SUCCESS, payload: jobs.data });
    

  } catch (error) {
      console.log("Error while getJobs");
      return dispatch({ type: actions.GET_JOBS_OF_BUSINESS_BYID_FAILURE, payload: error.response });
  }
};

export const deleteJobsofbusiness = (jobIDs) => async (dispatch) => {

    try {
        console.log(jobIDs);
        var payloaddata = {
            job_id_list:jobIDs
        };
        console.log("Enter deleteJobs in axios ");
        const jobs = await axios({
            method: "DELETE",
            url: `${backendUrl}/job/business/deleteJobsofbusiness`,
            data: payloaddata,
          });
        console.log("Response in Job Actions ");
        console.log(jobs);
       return dispatch({ type: actions.DELETE_JOBS_OF_BUSINESS_SUCCESS, payload: jobs.data });
      

    } catch (error) {
        console.log("Error while getJobs");
        return dispatch({ type: actions.DELETE_JOBS_OF_BUSINESS_FAILURE, payload: error.response });
    }
};

export const updateJob = (jobData,id) => async (dispatch) => {
    try {
      const Job = await axios({
        method: "PUT",
        url: `http://localhost:2000/job/update/${id}`,
        data:{ jobUpdatedata:jobData},
      });
  
      return dispatch({ type: actions.UPDATE_JOB_SUCCESS, payload: Job.data });
    } catch (error) {
      return dispatch({ type: actions.UPDATE_JOB_FAILURE, payload: error });
    }
  };
