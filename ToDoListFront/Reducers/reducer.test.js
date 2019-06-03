import * as types from '../Constants/ActionTypes';
import reducer from './reducer';

describe('Test reducers', () => {
  it('GET_TASKS_BEGIN', () => {
    let state = [];
    const startAction = { type: types.GET_TASKS_BEGIN };
    expect(reducer(state, startAction)).toEqual({});
  });

  it('GET_TASKS_SUCCESS', () => {
    let state = {};
    state = reducer(state, {type: types.GET_TASKS_SUCCESS, tasks: [
      {id:'9fb85bf9-2180-4614-bf7b-2065a0cf6da1', name:'Learn', isDone:false},
      {id:'9fb85bf9-2180-4614-bf7b-2065a0cf6da2', name:'Learn2', isDone:true},
    ]})
    expect(state).toEqual({todos: [
      {id:'9fb85bf9-2180-4614-bf7b-2065a0cf6da1', name:'Learn', isDone:false},
      {id:'9fb85bf9-2180-4614-bf7b-2065a0cf6da2', name:'Learn2', isDone:true},
    ]});
  });

  it('GET_TASKS_FAILURE', () => {
    let state = { error: '' }    
    state = reducer(state, {type: types.GET_TASKS_FAILURE, error: 'Some problems'})
    expect(state).toEqual({error: 'Some problems'});
  });

  it('DELETE_TASK_BEGIN', () => {
    let state = [];
    const startAction = { type: types.DELETE_TASK_BEGIN };
    expect(reducer(state, startAction)).toEqual({});
  });

  it('DELETE_TASK_SUCCESS', () => {
    let state = {todos:[{id:'9fb85bf9-2180-4614-bf7b-2065a0cf6da2', name:'Learn2', isDone:true},
    {id:'9fb85bf9-2180-4614-bf7b-2065a0cf6da43', name:'Learn2', isDone:true}]};
    state = reducer(state, {type: types.DELETE_TASK_SUCCESS, task:{id:'9fb85bf9-2180-4614-bf7b-2065a0cf6da2', name:'Learn2', isDone:true}})
    expect(state).toEqual({todos:[{id:'9fb85bf9-2180-4614-bf7b-2065a0cf6da43', name:'Learn2', isDone:true}
    ]});
  });

  it('DELETE_TASK_FAILURE', () => {
    let state = { error: '' }    
    state = reducer(state, {type: types.DELETE_TASK_FAILURE, error: 'Some problems'})
    expect(state).toEqual({error: 'Some problems'});
  });

  it('COMPLETE_TASK_BEGIN', () => {
    let state = [];
    const startAction = { type: types.COMPLETE_TASK_BEGIN };
    expect(reducer(state, startAction)).toEqual({});
  });  

  it('COMPLETE_TASK_SUCCESS', () => {
    let state = {todos:[{id:'9fb85bf9-2180-4614-bf7b-2065a0cf6da2', name:'Learn2', isDone:true}]};
    state = reducer(state, {type: types.COMPLETE_TASK_SUCCESS, task:{id:'9fb85bf9-2180-4614-bf7b-2065a0cf6da2', name:'Learn2', isDone:true}})
    expect(state).toEqual({todos:[{id:'9fb85bf9-2180-4614-bf7b-2065a0cf6da2', name:'Learn2', isDone:false}
    ]});
  });

  it('COMPLETE_TASK_FAILURE', () => {
    let state = { error: '' }    
    state = reducer(state, {type: types.COMPLETE_TASK_FAILURE, error: 'Some problems'})
    expect(state).toEqual({error: 'Some problems'});
  });

  it('ADD_TASK_BEGIN', () => {
    let state = [];
    const startAction = { type: types.ADD_TASK_BEGIN };
    expect(reducer(state, startAction)).toEqual({});
  });

  it('ADD_TASK_SUCCESS', () => {
    let state = {todos:[{id:'9fb85bf9-2180-4614-bf7b-2065a0cf6da2', name:'Learn2', isDone:true}]};
    state = reducer(state, {type: types.ADD_TASK_SUCCESS, task:{id:'9fb85bf9-2180-4614-bf7b-2065a0cf6da1', name:'Learn', isDone:false}
    })
    expect(state).toEqual({todos:[{id:'9fb85bf9-2180-4614-bf7b-2065a0cf6da2', name:'Learn2', isDone:true}, {id:'9fb85bf9-2180-4614-bf7b-2065a0cf6da1', name:'Learn', isDone:false}
    ]});
  });

  it('ADD_TASK_FAILURE', () => {
    let state = { error: '' }    
    state = reducer(state, {type: types.ADD_TASK_FAILURE, error: 'Some problems'})
    expect(state).toEqual({error: 'Some problems'});
  });

});
