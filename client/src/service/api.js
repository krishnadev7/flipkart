import axios from 'axios'

const URL = 'http://localhost:8000'

export const authSignup = async(data) => {
    try {
       return await axios.post(`${URL}/signup`,data)
    } catch (error) {
        console.log('error while creating signup api', error.message);
    }
}

export const authLogin = async(data) => {
    try {
       return await axios.post(`${URL}/login`,data)
    } catch (error) {
        console.log('error while creating login api', error.message);
        return error.response;
    }
}