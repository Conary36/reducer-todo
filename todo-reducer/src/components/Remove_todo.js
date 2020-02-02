import React, {useReducer}from 'react'
import {initialState, reducer} from '../reducers/Reducer'



const Remove_todo = () => {
    const [state, dispatch] = useReducer(reducer, initialState)


    // handleChange = () =>{
    //     e.target.value
    // }


    // type: 'add', payload: item.newTodo

    return(

        <div>
            
             <h1>Hello!</h1>
             {state.listOfTodo.map(item =>{
                 return (
                 <li>
                    <p className={item.completed ? 'completed': " " }>{item.item}</p>
                    <p>{item.completed}</p>
                    <button onClick={()=> dispatch({type: 'toggle', payload: item.id})}>Toggle</button>
                 </li>
                 )
             })}

             <button onClick={()=> dispatch({type: 'remove'})}>Remove</button>
            
        
        </div>
    )
}


export default Remove_todo
