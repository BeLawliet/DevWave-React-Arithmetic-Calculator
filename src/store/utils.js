import Swal from "sweetalert2";

export const AUTHENTICATION_LOGIN = 'AUTHENTICATION LOGIN';
export const AUTHENTICATION_REGISTER = 'AUTHENTICATION REGISTER';

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
