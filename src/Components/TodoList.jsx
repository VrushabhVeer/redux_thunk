import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addTodosFailure, addTodosRequest, addTodosSuccess, todosFailure, todosRequest, todosSuccess } from "../Redux/action";
import TodoInput from "./TodoInput";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((store) => store.todos);
    console.log(todos)

    const getTodos = () => {
        dispatch(todosRequest());
        return axios
            .get("http://localhost:8080/todos")
            .then((res) => {
                dispatch(todosSuccess(res.data));
            })
            .catch((err) => {
                dispatch(todosFailure(err));
            });
    };

    const addTodos = (payload) => {
        dispatch(addTodosRequest())
        return axios.post("http://localhost:8080/todos", payload)
            .then((res) => {
                dispatch(addTodosSuccess())
            })
            .then(() => dispatch(getTodos()))
            .catch((err) => {
                dispatch(addTodosFailure())
            })
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div>
            <h2>Todo<span>List</span></h2>
            <TodoInput addTodos={addTodos} />
            <div className="todoList">
            {todos.map((item) => (
                <div className="todos" key={item.id}>
                    <p>{item.id}.</p>
                    <p>{item.title}</p>
                </div>
            ))}
            </div>
        </div>
    );
};

export default TodoList;
