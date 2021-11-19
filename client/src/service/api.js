import axios from 'axios';

const backendUrl = 'http://localhost:2000';

export const UserSignUp =  (userInformation) => {
    try {
        console.log("asdasdadasd");
        console.log(userInformation);
        return axios.post(`${backendUrl}/userAuth/signup`,  userInformation );
        // return await axios({
        //     method: "POST",
        //     url: `http://localhost:2000/userAuth/signup`,
        //     data: { credentials: userInformation },
        //   });
        
        
    } catch (error) {
        console.log(error.response.data);
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

export const BusinessSignUp =  (businessInformation) => {
    try {
        console.log("asdasdadasd");
        console.log(businessInformation);
        return axios.post(`${backendUrl}/businessAuth/signup`,  businessInformation );
        
        
    } catch (error) {
        console.log("Error while signup business");
    }
};
//default UserSignUp;

export const BusinessSignIn = (businessInformation) => {
    try {
        console.log("asdasdadasd");
        console.log(businessInformation);
        return axios.post(`${backendUrl}/businessAuth/signin`,  businessInformation );
        
        
    } catch (error) {
        console.log("Error while signin business");
    }
};


// for product data
export const ShowProducts = (productInformation) => {
    try {
        console.log("Enter into product");
        console.log(productInformation);
        return axios.get(`${backendUrl}/newProduct/getProducts`);

    } catch (error) {
        console.log("Error while Fetching Product Information")
    }
}