import config from './config';
import axios from 'axios';

export default axios.create({
    baseURL:config.rootpath,
    // withCredentials:true
    // "start": "react-scripts start",
})

