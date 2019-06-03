import * as types from '../Constants/ActionTypes';

const BASE_URL = 'http://192.168.103.66:5000/api';

export const addTaskBegin = () => ({ type: types.ADD_TASK_BEGIN });
export const addTaskSuccess = task => ({ type: types.ADD_TASK_SUCCESS, task });

export const deleteTaskBegin = () => ({ type: types.DELETE_TASK_BEGIN });
export const completeTaskBegin = () => ({ type: types.COMPLETE_TASK_BEGIN });
export const getTasksBegin = () => ({ type: types.GET_TASKS_BEGIN });

export const deleteTaskSuccess = task => ({
  type: types.DELETE_TASK_SUCCESS,
  task
});
export const completeTaskSuccess = task => ({
  type: types.COMPLETE_TASK_SUCCESS,
  task
});
export const getTasksSuccess = tasks => ({
  type: types.GET_TASKS_SUCCESS,
  tasks
});

export const addTaskFailure = error => ({
  type: types.ADD_TASK_FAILURE,
  error
});
// export const deleteTaskFailure = error => ({
//   type: types.DELETE_TASK_FAILURE,
//   error
// });

export const completeTaskFailure = error => ({
  type: types.COMPLETE_TASK_FAILURE,
  error
});

export const getTasksFailure = error => ({
  type: types.GET_TASKS_FAILURE,
  error
});

export function deleteTask(id) {
  return dispatch => {
    dispatch(deleteTaskBegin());
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
        dispatch(deleteTaskSuccess(responseJson.result));
      })
      .catch(err => {
        dispatch(deleteTaskFailure(err.result));
      });
  };
}

export function getTasks() {
  return dispatch => {
    dispatch(getTasksBegin());
    fetch(`${BASE_URL}/GetAllTasks`)
      .then(response =>
        // if (!response.ok) {
        //   throw response;
        // }
        response.json()
      )
      .then(responseJson => {
        dispatch(getTasksSuccess(responseJson.result));
      })
      .catch(err => {
        dispatch(getTasksFailure(err));
      });
  };
}

export function addTask(task) {
  return dispatch => {
    dispatch(addTaskBegin());

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
        dispatch(addTaskSuccess(responseJson.result));
      })
      .catch(err => {
        dispatch(addTaskFailure(err.result));
      });
  };
}

export function updateTask(id) {
  return dispatch => {
    dispatch(completeTaskBegin());
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
        console.log(responseJson.result);
        dispatch(completeTaskSuccess(responseJson.result));
      })
      .catch(err => {
        dispatch(completeTaskFailure(err.result));
      });
  };
}
