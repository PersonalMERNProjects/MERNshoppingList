import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
import axios from 'axios';
import { tokenConfig } from './authActions';
import { returnErrors } from './errrorActions'



export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('/api/items').then(res =>
        dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
        .catch((error) => {
            dispatch(returnErrors(error.response.data, error.response.status_code))
        })

}
export const addItem = item => (dispatch, getState) => {
    axios.post('/api/items', item, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        })
        .catch((error) => {
            dispatch(returnErrors(error.response.data, error.response.status_code))
            console.log(error)

        })
}


export const deleteItem = (id) => (dispatch, getState) => {
    axios.delete(`/api/items/${id}`, tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        })
        .catch((error) => {
            dispatch(returnErrors(error.response.data, error.response.status_code))
        })
}



export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}