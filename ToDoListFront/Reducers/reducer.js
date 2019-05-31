import * as actions from '../Constants/ActionTypes';

const initialState = {
  todos: [],
  error:null,
  loading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      };
      case actions.FETCH_TASKS_BEGIN:
        return {
          ...state,
          loading: true
        };
  
      case actions.FETCH_TASKS_SUCCESS:
        return {
          ...state,
          items: action.data,
          loading: false
        };
  
      case actions.FETCH_TASKS_FAILURE:
        return {
          ...state,
          error: action.err,
          loading: false
        };
    case actions.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    case actions.COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.id ? { id: todo.id, text: todo.text, completed: !todo.completed } : todo;
        })
      }
    default:
      return state;
  }
}
