import React from "react";
import { useState } from "react";

const TodoInput = ({ addTodos }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleAdd = () => {
        const payload = {
            title: newTodo,
            status: false,
        };
        addTodos(payload);
    };

    return (
        <div className="todoInput">
            <input
                placeholder="add something..."
                value={newTodo}
                onChange={handleChange}
            />
            <button onClick={handleAdd}>Add+</button>
        </div>
    );
};

export default TodoInput;
