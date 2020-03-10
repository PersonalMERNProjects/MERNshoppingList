import { combineReducers } from 'redux'
import itemReducer from './itemReducer';


export default combineReducers({
    item: itemReducer
})

// C:\Program Files\MongoDB\Server\4.2\data\