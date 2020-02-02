import React from 'react';
import Todo from './Todo'

const TodoList = ({listOfTodo,taskComplete,clearTask }) => {
    

    return (
        <ol className="things-todo">

            {listOfTodo.map(item => (
                <li><Todo
                    key={item.id}
                    item={item}
                    taskComplete={taskComplete}

                /></li>
            ))}
            <button className='clear-btn' onClick={clearTask}>
                Clear Task
            </button>
        </ol>
    );
};
export default TodoList;