import {
  ADD_TODOS_FAILURE,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,

  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "./actionTypes";

const todosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};

const todosSuccess = (payload) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload,
  };
};

const todosFailure = () => {
  return {
    type: GET_TODOS_FAILURE,
  };
};

//adding

const addTodosRequest = () => {
  return {
    type: ADD_TODOS_REQUEST,
  };
};

const addTodosSuccess = () => {
  return {
    type: ADD_TODOS_SUCCESS,
  };
};

const addTodosFailure = () => {
  return {
    type: ADD_TODOS_FAILURE,
  };
};

export {
  todosRequest,
  todosSuccess,
  todosFailure,
  
  addTodosRequest,
  addTodosSuccess,
  addTodosFailure,
};
