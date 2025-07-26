import { AxiosError } from 'axios';
import { httpApi } from '../utils/http.api';
import { API_ROUTES } from '../config/api.config';

export class OperationService {
    static getOperationHistory = async () => {
        try {
            const { data } = await httpApi.get(API_ROUTES.OPERATIONS_ALL_HISTORY);

            return data;
        } catch (error) {
            if (error instanceof AxiosError) {
                return error.response?.data;
            }

            throw new Error("Something's wrong, please contact to Admin");
        }
    }

    static calculateOperation = async (calculation) => {
        try {
            const { data } = await httpApi.post(API_ROUTES.OPERATIONS_CALCULATE, calculation);

            return data;
        } catch (error) {
            if (error instanceof AxiosError) {
                return error.response?.data;
            }

            throw new Error("Something's wrong, please contact to Admin");
        }
    }

    static deleteOperation = async (operationId) => {
        try {
            await httpApi.delete(`${ API_ROUTES.OPERATIONS_HISTORY }/${ operationId }`);
        } catch (error) {
            if (error instanceof AxiosError) {
                return error.response?.data;
            }

            throw new Error("Something's wrong, please contact to Admin");
        }
    }
}
