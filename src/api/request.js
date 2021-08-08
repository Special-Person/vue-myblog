import axios from "axios";

const instance = axios.create({
    timeout: 5000
});

// 请求前拦截
instance.interceptors.request.use(config => {
    // console.log(config);
    return config;
}, err => Promise.reject(err));

// 返回结果拦截
instance.interceptors.response.use(result => {
    // console.log(result);
    return result.data;
}, err => Promise.reject(err));

export default instance;

