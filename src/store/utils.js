import Swal from "sweetalert2";

export const AUTHENTICATION_LOGIN = 'AUTHENTICATION LOGIN';
export const AUTHENTICATION_LOGOUT = 'AUTHENTICATION LOGOUT';
export const AUTHENTICATION_REGISTER = 'AUTHENTICATION REGISTER';

export const OPERATION_CALCULATE = 'OPERATION CALCULATE';
export const OPERATION_HISTORY = 'OPERATION HISTORY';
export const OPERATION_HISTORY_DELETE = 'OPERATION HISTORY DELETE';
export const OPERATION_HISTORY_EDIT = 'OPERATION DELETE EDIT';

export const validateFields = (...args) => {
    let valid = true;
    
    args.forEach(element => {
        if (element.trim() === '') valid = false;
    });

    return valid;
}

export const showMessage = (type, title, message) => {
    Swal.fire({
        icon: type,
        title: title,
        text: message,
    });
}

export const formatDate = timestamp => {
    const date = new Date(timestamp);

    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    }

    return date.toLocaleDateString('es-CO', options);
}
