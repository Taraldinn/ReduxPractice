// State => count:0
// action - increment, decrement, reset
// reducer
// store

import { createStore } from 'redux';


const RESET = 'RESET';
const ADD_USER = 'ADD_USER';

const initialState = {
    users : ["anis"],
    count : 1,
}

// Action

const addUserAction = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    };
}


const resetCounterAction = () => {
    return {
        type: RESET,
    };
}



//  Creating Reducer


const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users : [...state.users, action.payload],
                count: state.count + 1,
            }
        default:state
            break;
    }
}

// Store

const store = createStore(userReducer);

store.subscribe(() => {
    console.log(store.getState());  
})


store.dispatch(addUserAction("Aldinn"));
store.dispatch(addUserAction("Salma"));
store.dispatch(addUserAction("Rahman"));
store.dispatch(resetCounterAction());