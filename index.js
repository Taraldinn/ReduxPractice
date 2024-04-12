//  Multiple Reducers
import { combineReducers } from 'redux';
import { createStore } from 'redux';





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

const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";


const initialCartState = {
    cart: ["Sugar"],
    numberOfItems: 1
};

// cart actions 

const getCart = () => {
    return {
        type: GET_CART,
    }
}
const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    }

    }




// cart reducers 

const cartReducer = (state=initialCartState, action) => {
    switch (action.type) {
        case getCart().type:

            return {
                ...state,
            }
            
        case addToCart().type:
            return {
             cart : [...state.cart, action.payload],
             numberOfItems: state.numberOfItems + 1}    
    
        default:
            return state
            break;
    }
}





// Combaine Root Reducers

const rootReducers = combineReducers({

    productsR: productReducer,
    cartR: cartReducer

})









// Store

const store = createStore(rootReducers);
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getProducts());
store.dispatch(addProduct("Milk"));

store.dispatch(getCart());
store.dispatch(addToCart("Milk"));
