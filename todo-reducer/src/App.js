import React, {useReducer}from 'react';
import {initialState, reducer} from './reducers/Reducer'
import './App.css';
// import Remove_todo from './components/Remove_todo'
// import TodoList from '../src/components/TodoList'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = item => {
    dispatch({
      type: 'add',
      payload: item
    });
  }
  const taskComplete = id => {
    dispatch({
      type: 'toggle',
      id: id
    });
  }
  const clearTask = id => {
    dispatch({
      type: 'remove',
      id: id
    });
  }





  return (
    <div className="App">
        
    </div>
  );
}

export default App;
