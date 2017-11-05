import 'whatwg-fetch';
import config from "config";


export const GET_IDEAS = 'GET_IDEAS';
export const GET_NEW_IDEA = 'GET_NEW_IDEA';
export const UPDATE_NEW_IDEA = 'UPDATE_NEW_IDEA';
export const DELETE_IDEA = 'DELETE_IDEA';
export const SORT = 'SORT';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

const api = config.herokuApi;


export async function fetchLocalSortType() {
  let sortType = await localStorage.getItem('sortType');
  if (sortType === null) {
    sortType = 'title';
  }
  return sortType;
}

export function initSortType() {
  return (dispatch) => {
    fetchLocalSortType().then((sortType) => {
      dispatch({
        type: SORT,
        sortType: sortType,
      });
    });
  };
}

export function changeSortType(sortType) {
  return (dispatch) => {
    dispatch({
      type: SORT,
      sortType: sortType,
    });
  };
}

export function setLocalSortType(sortType) {
  localStorage.setItem('sortType', sortType);
}

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

export function removeNotification() {
  return (dispatch) => {
    dispatch({
      type: REMOVE_NOTIFICATION,
    });
  };
}
