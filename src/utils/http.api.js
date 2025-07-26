import axios from "axios";
import { useAuthStore } from '../store/auth.store';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const httpApi = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

httpApi.interceptors.request.use(config => {
    const accessToken = useAuthStore.getState().accessToken;

    if (accessToken) config.headers['Authorization'] = 'Bearer ' + accessToken;

    return config;
});

export {
    httpApi
}
