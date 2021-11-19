

import axios from 'axios';

const backendUrl = 'http://localhost:2000';

export const UserSignUp = async (userInformation) => {
    try {
        console.log("asdasdadasd");
        console.log(userInformation);
        return await axios.post(`${backendUrl}/userAuth/signup`,  userInformation );
        // return await axios({
        //     method: "POST",
        //     url: `http://localhost:2000/userAuth/signup`,
        //     data: { credentials: userInformation },
        //   });
        
        
    } catch (error) {
        console.log("Error while signup user");
    }
};
//default UserSignUp;

export const UserSignIn = async (userInformation) => {
    try {
        console.log("asdasdadasd");
        console.log(userInformation);
        return await axios.post(`${backendUrl}/userAuth/signin`,  userInformation );
        
        
    } catch (error) {
        console.log("Error while signin user");
    }
};

export const BusinessSignUp =async (businessInformation) => {
    try {
        console.log("asdasdadasd");
        console.log(businessInformation);
        return await axios.post(`${backendUrl}/businessAuth/signup`,  businessInformation );
        
        
    } catch (error) {
        console.log("Error while signup business");
    }
};
//default UserSignUp;

export const BusinessSignIn = async (businessInformation) => {
    try {
        console.log("asdasdadasd");
        console.log(businessInformation);
        return await axios.post(`${backendUrl}/businessAuth/signin`,  businessInformation );
        
        
    } catch (error) {
        console.log("Error while signin business");
    }
};

export const newProduct=async (product) =>{
    try {
        return await axios.post(`${backendUrl}/newProduct/add`, product);
    } catch (error) {
        console.log('Error while calling newProduct API ', error);
    }
}

