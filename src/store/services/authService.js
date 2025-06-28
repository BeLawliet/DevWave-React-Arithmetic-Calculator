import config from '../services.json';

export const loginUser = async (credentials) => {
    const endpointLogin = config.urlDev + config.endpoints.auth.login;

    const httpApi = await fetch(endpointLogin, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(credentials)
    });

    const response = await httpApi.json();

    if (!httpApi.ok) throw new Error(response.message);

    return response;
}

export const registerUser = async (data) => {
    const endpointRegister = config.urlDev + config.endpoints.auth.register;

    const httpApi = await fetch(endpointRegister, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(data)
    });

    const response = await httpApi.json();

    if (!httpApi.ok) throw new Error(response.message);

    return response;
}
