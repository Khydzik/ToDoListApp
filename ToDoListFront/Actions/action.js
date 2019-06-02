import * as types from '../Constants/ActionTypes';

const BASE_URL = 'http://192.168.0.101:5000/api';

export const addTaskBegin = () => ({ type: types.ADD_TASK_BEGIN });
export const deleteTaskBegin = () => ({ type: types.DELETE_TASK_BEGIN });
export const completeTaskBegin = () => ({ type: types.COMPLETE_TASK_BEGIN });
export const getTasksBegin = () => ({ type: types.GET_TASKS_BEGIN });

export const addTaskSuccess = task => ({ type: types.ADD_TASK_SUCCESS, task });
export const deleteTaskSuccess = () => ({ type: types.DELETE_TASK_SUCCESS });
export const completeTaskSuccess = task => ({
  type: types.COMPLETE_TASK_SUCCESS,
  task
});
export const getTasksSuccess = tasks => ({
  type: types.GET_TASKS_SUCCESS,
  task
});

export const addTaskFailure = error => ({
  type: types.ADD_TASK_FAILURE,
  error
});
export const deleteTaskFailure = error => ({
  type: types.DELETE_TASK_FAILURE,
  error
});
export const completeTaskFailure = error => ({
  type: types.COMPLETE_TASK_FAILURE,
  error
});
export const getTasksFailure = error => ({
  type: types.GET_TASKS_SUCCESS,
  error
});

export function deleteTask(id) {
  return dispatch => {
    dispatch(deleteTaskB);
    fetch(`${BASE_URL}/DeleteTask`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        IdTask: id
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch(deleteTaskS(responseJson));
      })
      .catch(err => {
        dispatch(deleteTaskF(err.result));
      });
  };
}

export function getTasks() {
  return dispatch => {
    dispatch(getTasksB());
     fetch(`${BASE_URL}/GetAllTasks`)
      .then(responce => responce.json())
      .then(responseJson => {    
        dispatch(getTasksS(responseJson));
      })
      .catch(err => {
        console.log("sdfsdf");
        dispatch(getTasksF(err.result));
      });
  };
}

export function addTask(task) {

  return dispatch => {
    dispatch(addTaskB);

    fetch(`${BASE_URL}/AddTask`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        Name: task.name,
        isDone: task.isDone
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch(addTaskS(responseJson));
      })
      .catch(err => {
        dispatch(addTaskF(err.result));
      });
  };
}

export function updateTask(id) {
  return dispatch => {
    dispatch(updateTaskB);
    fetch(`${BASE_URL}/UpdateTask`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        IdTask: id
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch(updateTaskS(responseJson));
      })
      .catch(err => {
        dispatch(updateTaskF(err.result));
      });
  };
}

function getTasksB() {
  return {
    type: types.GET_TASKS_BEGIN
  };
}

function getTasksS(tasks) {
  return {
    type: types.GET_TASKS_SUCCESS,
    tasks
  };
}

function getTasksF(error) {
  return {
    type: types.GET_TASKS_FAILURE,
    error
  };
}

function addTaskB() {
  return {
    type: types.ADD_TASK_BEGIN
  };
}

function addTaskS(task) {
  return {
    type: types.ADD_TASK_SUCCESS,
    task
  };
}

function addTaskF(error) {
  return {
    type: types.ADD_TASK_FAILURE,
    error
  };
}

function deleteTaskB() {
  return {
    type: types.DELETE_TASK_BEGIN
  };
}

function deleteTaskS(task) {
  return {
    type: types.DELETE_TASK_SUCCESS,
    task
  };
}

function deleteTaskF(error) {
  return {
    type: types.DELETE_TASK_FAILURE,
    error
  };
}

function updateTaskB() {
  return {
    type: types.COMPLETE_TASK_BEGIN
  };
}

function updateTaskS(task) {
  return {
    type: types.COMPLETE_TASK_SUCCESS,
    task
  };
}

function updateTaskF(error) {
  return {
    type: types.completeTaskFailure,
    error
  };
}
