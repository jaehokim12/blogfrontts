import axios, { AxiosError, isAxiosError, AxiosResponse } from 'axios';

import { logout } from '../shared/utils/auth';

interface IUserDetails {
    mail: string;
    password: string;
    username: string;
    token?: string;
}
const apiClient = axios.create({
    baseURL: 'http://localhost:4000/api',
    timeout: 1000,
});

apiClient.interceptors.request.use(
    function (config) {
        const userDetails = localStorage.getItem('user');
        // if (userDetails) {
        //     const token = JSON.parse(userDetails).userDetails.token;

        //     config.headers = {
        //         Authorization: `Bearer ${token}`,
        //     };
        //     return config;
        // }
        return config;
    },
    function (error) {
        console.log('requesterror', error);
        // when request error reject request
        return Promise.reject(error);
    },
);
apiClient.interceptors.response.use(
    function (response) {
        // console.log('response', response);
        if (response) {
            // console.log('response', response);
            return response;
        }
        return response;
    },
    function (error) {
        // console.log('error', error);
        return Promise.reject(error);
    },
);

export const login = async (useDetails: IUserDetails) => {
    try {
        const { data } = await apiClient.post('/login', useDetails);
        return data;
    } catch (exception) {
        checkResponseCode(exception);
        return {
            error: true,
            exception,
        };
    }
};

export const register = async (useDetails: IUserDetails) => {
    try {
        const { data } = await apiClient.post('/register', useDetails);
        // console.log('data after register api :::', data);
        return data;
    } catch (exception) {
        checkResponseCode(exception);
        return {
            error: true,
            exception,
        };
    }
};

const checkResponseCode = (exception: any) => {
    const responseCode = exception?.response?.status;
    // console.log('responsecode', responseCode);

    if (responseCode) {
        responseCode === 401 || (responseCode === 403 && logout());
    }
};
