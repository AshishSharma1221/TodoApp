import { ADD_TODO, TOGGLE_TODO, DELETE_ALL_TODOS } from './actionTypes';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteAllTodos = () => ({
  type: DELETE_ALL_TODOS,
});
