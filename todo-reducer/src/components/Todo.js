import React from 'react';
import { initialState, reducer } from '../reducers/Reducer'

const Todo = ({ item, completed }) => {
    const [state, dispatch] = useReducer(reducer, initialState)



    return (

        <div onClick={() => completed(item.id)}
            className={`item ${item.completed ? "completed" : ""}`}
        >
            <p>{item.task}</p>
        </div>
    );

};

export default Todo;