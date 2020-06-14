import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BE_ADDRESS ,
    withCredentials: true
})

export default axiosInstance;