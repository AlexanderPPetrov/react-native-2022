import actionTypes from "./action-types";
import axios from "axios";
import constants from "../constants";
import requestTypes from "./request-types";

export function setMovies(value) {
    return {
        type: actionTypes.SET_MOVIES,
        payload: value,
    }
}

export function setLoginDialogOpened(value) {
    return {
        type: actionTypes.SET_LOGIN_DIALOG_OPENED,
        payload: value,
    }
}

export function addActiveRequest(value) {
    return {
        type: actionTypes.ADD_ACTIVE_REQUEST,
        payload: value,
    }
}

export function removeActiveRequest(value) {
    return {
        type: actionTypes.REMOVE_ACTIVE_REQUEST,
        payload: value,
    }
}

export function getMovies(params) {
    return async (dispatch) => {
        try {
            dispatch(addActiveRequest(requestTypes.GET_MOVIES))
            axios.get('https://api.themoviedb.org/3/discover/movie', {
                params: {
                    api_key: 'ca3d69ee336e43d8099727f0d7ce3859',
                    include_adult: false,
                    page: 1,
                }
              }).then(response => {
                dispatch(setMovies(response.data.results))
              }).finally(() => {
                dispatch(removeActiveRequest(requestTypes.GET_MOVIES))
              })
        } catch (error) {
            console.log(error);
        }
    }
}