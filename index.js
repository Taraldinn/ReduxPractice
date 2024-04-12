
import { createStore } from 'redux';


//  defining constants
const INCREMENT  = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';


// State
const initialCounterState = {
    count: 0,

}

const initialUserState = {
    users: [
        {
            id: 1,
            name: 'Alice'
        },
        {
            id: 2,
            name: 'Bob'
        }
    
    ]
}
 
// Action
// action means what I want to do 
// like increment, decrement, add user, remove user 



const incrementCounter = () => {
    return {
        type: INCREMENT,

    };
}



const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
}

const addUser = () => {
    return {
        type: ADD_USER,
        payload: {
            id: 3,
            name: 'John'
        }
    }

}


// create reducer for counter 
const counterReducer = (state=initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

    
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:state


    }
}



// 1. State 
// 2. Dispatch any Action
// 3. Reducer
// 4. Store


//Store => there are three store methods are [getState, dispatch, subscribe] 



const store = createStore(counterReducer);


store.subscribe(() => {
    console.log(store.getState());
})

// dispatching the action

store.dispatch(incrementCounter());