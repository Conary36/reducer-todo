import React from 'react';
import {listOfTodo}{reducer}, from '.'

const TodoList = ({listOfTodo,reducer }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="things-todo">

            {listOfTodo.map(item => (
                <div><Todo
                    key={item.id}
                    item={item}
                    toggleCompleted={toggleCompleted}
                /></div>
            ))}
            <button className='clear-btn' onClick={clearCompleted}>
                Clear Task
            </button>
        </div>
    );
};
export default TodoList;