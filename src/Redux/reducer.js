import {
    GET_TODOS_FAILURE,
    GET_TODOS_REQUEST,
    GET_TODOS_SUCCESS,
} from "./actionTypes";

const intialState = {
    todos: [],
    isLoading: false,
    isError: false,
};

const reducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
            };

        case GET_TODOS_SUCCESS:
            return {
                ...state,
                todos: [...payload],
                isLoading: false,
                isError: false,
            };

        case GET_TODOS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        default:
            return state;
    }
};

export { reducer };
