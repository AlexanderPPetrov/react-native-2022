import actionTypes from './action-types';
import {combineReducers} from "redux";

export function movies(state = [], action) {
    switch(action.type) {
        case actionTypes.SET_MOVIES:
            return action.payload;
        default:
            return state;
    }
}

export function loginDialogOpened(state = false, action) {
    switch(action.type) {
        case actionTypes.SET_LOGIN_DIALOG_OPENED:
            return action.payload;
        default:
            return state;
    }
}

export function activeRequests(state = [], action) {
    switch(action.type) {
        case actionTypes.SET_ACTIVE_REQUESTS:
            return action.payload;
        case actionTypes.ADD_ACTIVE_REQUEST:
            console.log([...state, action.payload])
            return [...state, action.payload];
        case actionTypes.REMOVE_ACTIVE_REQUEST:
            console.log(state.filter(request => request !== action.payload))
            return state.filter(request => request !== action.payload)
        default:
            return state;
    }
}


export default combineReducers({
    movies,
    loginDialogOpened,
    activeRequests,
})