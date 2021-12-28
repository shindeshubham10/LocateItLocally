import * as actionsType from '../constants/jobconstants';

export const addJobDetailsReducer = (state = {job:{}},action) => {
    
    switch (action.type) {
        
        case actionsType.ADD_JOB_SUCCESS:
            return { ...state,
                job: action.payload, };
        
        case actionsType.ADD_JOB_FAILURE:
            return { Error: action.payload };

        default:
            return state;
    }
};


export const getJobsofBusinessReducer = (state = {jobs:[]},action) => {
    
    switch (action.type) {
        
        case actionsType.GET_JOBS_OF_BUSINESS_SUCCESS:
            return {...state, 
                jobs: action.payload };
        
        case actionsType.GET_JOBS_OF_BUSINESS_FAILURE:
            return { Error: action.payload };

        default:
            return state;
    }
};


export const getJobsofBusinessReducerbyID = (state = {jobs:[]},action) => {
    
    switch (action.type) {
        
        case actionsType.GET_JOBS_OF_BUSINESS_BYID_SUCCESS:
            return {...state, 
                jobs: action.payload };
        
        case actionsType.GET_JOBS_OF_BUSINESS_BYID_FAILURE:
            return { Error: action.payload };

        default:
            return state;
    }
};

export const deleteJobsofBusinessReducer = (state = {jobs:[]},action) => {
    
    switch (action.type) {
        
        case actionsType.DELETE_JOBS_OF_BUSINESS_SUCCESS:
            return {...state, 
                jobs: action.payload };
        
        case actionsType.DELETE_JOBS_OF_BUSINESS_FAILURE:
            return { Error: action.payload };

        default:
            return state;
    }
};

export const updateJobDetailsReducer = (state = {job:{}},action) => {
    
    switch (action.type) {
        
        case actionsType.ADD_JOB_SUCCESS:
            return { ...state,
                job: action.payload, };
        
        case actionsType.ADD_JOB_FAILURE:
            return { Error: action.payload };

        default:
            return state;
    }
};