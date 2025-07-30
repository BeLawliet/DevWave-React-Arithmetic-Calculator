import { httpApi } from '../utils/http.api';
import { API_ROUTES } from '../config/api.config';

export class OperationService {
    static getOperationHistory = async ({ pageParam = 0, queryKey }) => {
        try {
            const [ , filters ] = queryKey;

            const params = new URLSearchParams({
                page: pageParam,
                size: 5,
                field: filters.field || 'timestamp',
                direction: filters.direction || 'asc',
            });

            if (filters.operation) params.append('operation', filters.operation);
            
            if (filters.startDate) {
                params.append('startDate', `${filters.startDate}T00:00:00`);
            }

            if (filters.endDate) {
                params.append('endDate', `${filters.endDate}T23:59:59`);
            }

            const { data } = await httpApi.get(`${ API_ROUTES.OPERATIONS_HISTORY }?${ params.toString() }`);
            
            return data;
        } catch {
            throw new Error("Something's wrong, please contact to Admin");
        }
    }

    static calculateOperation = async (calculation) => {
        try {
            const { data } = await httpApi.post(API_ROUTES.OPERATIONS_CALCULATE, calculation);
            return data;
        } catch {
            throw new Error("Something's wrong, please contact to Admin");
        }
    }

    static deleteOperation = async (operationId) => {
        try {
            await httpApi.delete(`${ API_ROUTES.OPERATIONS_HISTORY }/${ operationId }`);
        } catch {
            throw new Error("Something's wrong, please contact to Admin");
        }
    }
}
