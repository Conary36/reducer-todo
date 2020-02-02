import React from 'react';


const Todo = ({ item, taskComplete }) => {


    return (

        <div onClick={() => taskComplete(item.id)}
            className={`item ${item.completed ? "completed" : ""}`}
        >
            <p>{item.item}</p>
        </div>
    );

};

export default Todo;