import axios from "axios";
import runtimeEnv from '@mars/heroku-js-runtime-env';
const env = runtimeEnv();

const axiosInstance = axios.create({
    baseURL: env.REACT_APP_BE_ADDRESS ,
    withCredentials: true
})

export default axiosInstance;