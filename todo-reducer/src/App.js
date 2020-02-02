import React, {useReducer}from 'react';
import {initialState, reducer} from './reducers/Reducer';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = item => {
    dispatch({
      type: 'ADD_TASK',
      payload: item
    });
  }
  const taskComplete = id => {
    dispatch({
      type: 'TASK_COMPLETE',
      payload: id
    });
  }
  const clearTask = () => {
    dispatch({
      type: 'CLEAR_TASK'
    });
  }





  return (
    <div className="App">
    <TodoForm addNewTodo={addTask}/>
    <TodoList 
        listOfTodo={state.listOfTodo}
        taskComplete={taskComplete}
        clearTask={clearTask}
    />

    </div>
        
  
  );
}

export default App;
