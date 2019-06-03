import * as action from './action';
import * as types from '../Constants/ActionTypes';

describe('Test actions', () => {
  it('addTodoBegin', () => {
    const add = action.addTaskBegin();
    expect(add).toEqual({ type: types.ADD_TASK_BEGIN });
  });

  it('addTodoSuccess', () => {
    const task = {
      id: '103750b0-a633-4861-9840-9096f264ee33',
      isDone: false,
      name: 'Learn'
    };
    const expectedAction = { type: types.ADD_TASK_SUCCESS, task };
    expect(action.addTaskSuccess(task)).toEqual(expectedAction);
  });

  it('addTaskFailure', () => {
    const error = { id: 1, message: 'Such task is already added!!!!' };
    const expectedAction = { type: types.ADD_TASK_FAILURE, error };
    expect(action.addTaskFailure(error)).toEqual(expectedAction);
  });

  it('getTasksBegin', () => {
    const get = action.getTasksBegin();
    expect(get).toEqual({ type: types.GET_TASKS_BEGIN });
  });

  it('getTasksSuccess', () => {
    const tasks = [
      {
        id: '103750b0-a633-4861-9840-9096f264ee33',
        isDone: false,
        name: 'Learn'
      },
      {
        id: '103750b0-a654-4861-9840-9096f264ey63',
        isDone: false,
        name: 'Learn land'
      }
    ];
    const expectedAction = { type: types.GET_TASKS_SUCCESS, tasks };
    expect(action.getTasksSuccess(tasks)).toEqual(expectedAction);
  });

  it('getTasksFailure', () => {
    const error = { id: 1, message: 'There are no created tasks!!!!' };
    const expectedAction = { type: types.GET_TASKS_FAILURE, error };
    expect(action.getTasksFailure(error)).toEqual(expectedAction);
  });

  it('completeTaskBegin', () => {
    const complete = action.completeTaskBegin();
    expect(complete).toEqual({ type: types.COMPLETE_TASK_BEGIN });
  });

  it('completeTaskSuccess', () => {
    const task = {
      id: '103750b0-a633-4861-9840-9096f264ee33',
      isDone: true,
      name: 'Learn'
    };
    const expectedAction = { type: types.COMPLETE_TASK_SUCCESS, task };
    expect(action.completeTaskSuccess(task)).toEqual(expectedAction);
  });

  it('completeTaskFailure', () => {
    const error = { id: 1, message: 'This task is not update!!!!' };
    const expectedAction = { type: types.COMPLETE_TASK_FAILURE, error };
    expect(action.completeTaskFailure(error)).toEqual(expectedAction);
  });

  it('deleteTaskBegin', () => {
    const deleteTask = action.deleteTaskBegin();
    expect(deleteTask).toEqual({ type: types.DELETE_TASK_BEGIN });
  });

  it('deleteTaskSuccess', () => {
    const task = {
      id: '103750b0-a633-4861-9840-9096f264ee33',
      isDone: false,
      name: 'Learn'
    };
    const expectedAction = { type: types.DELETE_TASK_SUCCESS, task };
    expect(action.deleteTaskSuccess(task)).toEqual(expectedAction);
  });

  it('deleteTaskFailure', () => {
    const error = { id: 1, message: 'This task is not update!!!!' };
    const expectedAction = { type: types.DELETE_TASK_FAILURE, error };
    expect(action.deleteTaskFailure(error)).toEqual(expectedAction);
  });
});
