import 'whatwg-fetch';
import config from "config";


export const GET_IDEAS = 'GET_IDEAS';
export const GET_NEW_IDEA = 'GET_NEW_IDEA';
export const UPDATE_NEW_IDEA = 'UPDATE_NEW_IDEA';
export const DELETE_IDEA = 'DELETE_IDEA';

const api = config.herokuApi;

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

export function getNewIdea() {
  return async (dispatch) => {
    let endpoint = `${api}/ideas/new`;
    return fetch(endpoint).then((response) => {
      return response.json();
    })
    .then((json) => {
      dispatch({
        type: GET_NEW_IDEA,
        json: json,
      });
    });
  };
}

export function updateIdea(id, title, body) {
  return async (dispatch) => {
    const endpoint = `${api}/ideas/update`;
    return fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        title: title,
        body: body
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        dispatch({
          type: UPDATE_NEW_IDEA,
          json: json,
        });
      });
  };
}

export function deleteIdea(id) {
  return async (dispatch) => {
    const endpoint = `${api}/ideas/delete`;
    return fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({
        id: id
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        dispatch({
          type: DELETE_IDEA,
          json: json,
        });
      });
  }; 
}
