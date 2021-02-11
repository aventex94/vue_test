import axios from 'axios';

axios.interceptors.request.use((config)=>{
    const token = localStorage.getItem('auth_token');
    if(token){
        config.headers.common = {
            "Authorization": `Basic ${token}`,
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
        };
    }
    return config;
},(err)=>{
    return Promise.reject(err);
})