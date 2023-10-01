import axios from 'axios';
export default axios.create({
    baseURL:'http://localhost:4000',
    headers:{
        "ngrok-skip-browser-warning":"true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
});