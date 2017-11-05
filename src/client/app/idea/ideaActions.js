import 'whatwg-fetch';
import config from "config";


export const GET_IDEAS = 'GET_IDEAS';
export const GET_NEW_IDEA = 'GET_NEW_IDEA';
export const UPDATE_NEW_IDEA = 'UPDATE_NEW_IDEA';
export const DELETE_IDEA = 'DELETE_IDEA';

const api = config.localApi;

export function getIdeas() {
  return async (dispatch) => {
    let endpoint = `${api}/ideas`;
    return fetch(endpoint).then((response) => {
      return response.json();
    })
    .then((json) => {
      dispatch({
        type: GET_IDEAS,
        json: json,
      });
    });
  };
}