import * as types from '../Constants/ActionTypes';

const BASE_URL = 'http://localhost:5000/api';

export const addTodo = item => ({ type: types.ADD_TODO, payload: item });
export const deleteTodo = id => ({ type: types.DELETE_TODO, id });
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id });

export function fetchTasks() {
  return dispatch => {
    dispatch(getToDos());

    return fetch(`${BASE_URL}/GetAllTasks`)
      .then(json => dispatch(getToDosSuccess(json)))
      .catch(err => {
        const arr = Object.keys(err);
        alert(err.status);
        // dispatch(getToDosFailure(err))
      });
  };
}

function getToDos() {
  return {
    type: types.FETCH_TASKS_BEGIN
  };
}

function getToDosSuccess(data) {
  return {
    type: types.FETCH_TODOS_SUCCESS,
    data
  };
}

function getToDosFailure(err) {
  return {
    type: types.FETCH_TODOS_FAILURE,
    err
  };
}
