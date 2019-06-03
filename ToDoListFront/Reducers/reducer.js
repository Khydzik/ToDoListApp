import * as actions from '../Constants/ActionTypes';

const initialState = {
  todos: [],
  error: null
};

export default function reducer(state = initialState, action) {        
                                               
  switch (action.type) {
    case actions.GET_TASKS_BEGIN:
      return {
        ...state
      };

    case actions.GET_TASKS_SUCCESS:
      return {
        ...state,
      todos: action.tasks
      };

    case actions.GET_TASKS_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case actions.ADD_TASK_BEGIN:
      return {
        ...state
      };

    case actions.ADD_TASK_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.task]
      };

    case actions.ADD_TASK_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case actions.DELETE_TASK_BEGIN:
      return {
        ...state
      };

     case actions.DELETE_TASK_SUCCESS:
       return {
         ...state,
         todos: state.todos.filter(todo => todo.id != action.task.id)
       };

    case actions.DELETE_TASK_FAILURE:
      return {
        ...state,
        error: action.error
      };

    case actions.COMPLETE_TASK_BEGIN:
      return {
        ...state
      };

    case actions.COMPLETE_TASK_SUCCESS:
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.task.id
            ? { id: todo.id, name: todo.name, isDone: !todo.isDone }
            : todo;
        })
      };

      case actions.COMPLETE_TASK_FAILURE:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}
