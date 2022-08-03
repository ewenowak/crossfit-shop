import { combineReducers, compose, applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';



const subreducers = {
    products: productsReducer,
    cart: cartReducer,
    orders: orderReducer,
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);


export default store; 

