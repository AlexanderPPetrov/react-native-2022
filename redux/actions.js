import actionTypes from "./action-types";
import axios from "axios";
import constants from "../constants";

export function setMovies(value) {
    return {
        type: actionTypes.SET_MOVIES,
        payload: value,
    }
}

export function getMovies(params) {
    return async (dispatch) => {
        try {
            axios.get('https://api.themoviedb.org/3/discover/movie', {
                params: {
                    api_key: 'ca3d69ee336e43d8099727f0d7ce3859',
                    include_adult: false,
                    page: 1,
                }
              }).then(response => {
                  console.log(response.data.results)
                  dispatch(setMovies(response.data.results))
              })
        } catch (error) {
            console.log(error);
        }
    }
}