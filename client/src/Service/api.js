

import axios from 'axios';

const backendUrl = 'http://localhost:2000';

export const UserSignUp = (userInformation) => {
    try {
        console.log("asdasdadasd");
        console.log(userInformation);
        return axios.post(`${backendUrl}/userAuth/signup`,  userInformation );
        
        
    } catch (error) {
        console.log("Error while signup user");
    }
};
//default UserSignUp;

export const UserSignIn = (userInformation) => {
    try {
        console.log("asdasdadasd");
        console.log(userInformation);
        return axios.post(`${backendUrl}/userAuth/signin`,  userInformation );
        
        
    } catch (error) {
        console.log("Error while signin user");
    }
};


