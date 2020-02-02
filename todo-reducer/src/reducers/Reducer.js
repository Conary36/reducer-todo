import React, {useReducer} from 'react'

export const  initialState = {
    listOfTodo: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 1
        },
        {
            item: 'Go to gym',
            completed: false,
            id: 2
        },
        {
            item: 'Buy Groceries',
            completed: false,
            id: 3
        },
        {
            item: 'Go for walk',
            completed: false,
            id: 4
        },
    ],

};

export const reducer = (state, action) => {
    if(action.type === 'add'){
        return{ ...state, listOfTodo: [...state.listOfTodo, {item: action.payload, completed: false, id: Date.now()}]
    };
    }else if (action.type === 'remove'){
        console.log(state.listOfTodo)
        return {listOfTodo: state.listOfTodo.filter(clear => {
              return  clear.completed === false})
        }
    
    }else if(action.type === 'toggle'){
        return{listOfTodo: state.listOfTodo.map(choice => {
            if(choice.id === action.payload){
               
                return{
                    ...choice,completed: !choice.completed
                }
            }else{
                return choice;
            }
        })}
    }
}



reducer(initialState, {type: 'add'});
reducer(initialState, {type: 'remove', payload: ''});

//  function todoCounter(){
    
//     const [state, dispatch] = useReducer(reducer, initialState)

//     return(
//         <>

//         </>
//     )
// }
