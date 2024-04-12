import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import thunk from 'redux-thunk';



//  Multiple Reducers





// TODO: Product Reducer


const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";


const initialProductState = {
    products: ["Sugar", "Salt"],
    numberOfProducts: 2

};


// Action

const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
}



 const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
 }

const productReducer = (state=initialProductState, action) => {
    switch (action.type) {
        case getProducts().type:
            return {
                ...state,

            }
        case addProduct().type:
            return{
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }

    
        default:
            return state;
            break;
    }
}

// cart Reducer




// Store
const middleware = applyMiddleware(thunk, logger);

const store = createStore(productReducer,middleware)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getProducts());
store.dispatch(addProduct("Milk"));
