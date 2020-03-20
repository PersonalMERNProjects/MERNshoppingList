import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types'


const initialState = {
    message: {},
    status_code: null,
    id: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return {
                message: action.payload.message,
                status_code: action.payload.status_code,
                id: action.payload.id
            }
        case CLEAR_ERRORS:
            return {
                message: {},
                status_code: null,
                id: null
            }
        default:
            return state;
    }
}