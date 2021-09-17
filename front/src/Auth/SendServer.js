import axios from 'axios';

const SendAuth = function () {
    return new Promise((resolve, reject) => {
        let url = 'http://rkseksgkrns.shop:3001/users/auth';
        axios.get(url, { withCredentials:true })
        .then((param) => {
            let isSuccess = param.data.isAuthenticated;
            console.log('Auth result:', isSuccess);

            resolve(isSuccess);
        })
        .catch(reject(false));
    });
}

const SendSignup = function (params) {
    return new Promise((resolve, reject) => {
        let url = 'http://rkseksgkrns.shop:3001/users/signup';
        axios.post(url, params)
        .then((param) => {

            console.log('Auth result:', param);

            resolve(param);
        })
        .catch(reject(false));
    });
};

export { SendAuth, SendSignup };