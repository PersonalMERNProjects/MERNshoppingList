import { GET_ERRORS, CLEAR_ERRORS } from './types'


//RETURN ERRORS


export const returnErrors = (message, status_code, id = null) => {
    return {
        type: GET_ERRORS,
        payload: { message, status_code, id }
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS,
    };
}