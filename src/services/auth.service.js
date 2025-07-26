import { AxiosError } from 'axios';
import { httpApi } from '../utils/http.api';
import { API_ROUTES } from '../config/api.config';

export class AuthService {
    static loginUser = async (credentials) => {
        try {
            const { data } = await httpApi.post(API_ROUTES.AUTH_LOGIN, credentials);

            return data;
        } catch (error) {
            if (error instanceof AxiosError) {
                return error.response?.data;
            }

            throw new Error("Something's wrong, please contact to Admin");
        }
    }

    static registerUser = async (userInfo) => {
        try {
            const { data } = await httpApi.post(API_ROUTES.AUTH_REGISTER, userInfo);

            return data;
        } catch (error) {
            if (error instanceof AxiosError) {
                return error.response?.data;
            }

            throw new Error("Something's wrong, please contact to Admin");
        }
    }
}
