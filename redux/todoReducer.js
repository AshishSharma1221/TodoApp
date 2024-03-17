import { ADD_TODO, TOGGLE_TODO, DELETE_ALL_TODOS } from './actionTypes';

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );

    case DELETE_ALL_TODOS:
      return [];

    default:
      return state;
  }
};

export default todoReducer;