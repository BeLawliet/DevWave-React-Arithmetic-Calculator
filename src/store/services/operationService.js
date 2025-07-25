import config from '../services.json';

export const calculateOperation = async (data, accessToken) => {
    const endpointCalculate = config.urlDev + config.endpoints.operations.calculate;

    const httpApi = await fetch(endpointCalculate, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Authorization': `Bearer ${ accessToken }`
                                    },
                                    body: JSON.stringify(data)
    });

    const response = await httpApi.json();

    if (!httpApi.ok) throw new Error(response.message);

    return response;
}

export const getOperationHistory = async (accessToken) => {
    const endpointHistory = config.urlDev + config.endpoints.operations.history;
    
    const httpApi = await fetch(endpointHistory, {
                                    method: 'GET',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Authorization': `Bearer ${ accessToken }`
                                    }
    });

    const response = await httpApi.json();

    if (!httpApi.ok) throw new Error(response.message);

    return response;
}

export const deleteOperation = async (id, accessToken) => {
    const endpointDelete = `${ config.urlDev }${ config.endpoints.operations.history }/${ id }`;

    const httpApi = await fetch(endpointDelete, {
                                    method: 'DELETE',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Authorization': `Bearer ${ accessToken }`
                                    }
    });

    const response = await httpApi.text();

    if (!httpApi.ok) throw new Error(response.message);

    return response;
}
