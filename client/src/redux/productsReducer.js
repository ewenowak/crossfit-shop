import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getAllProducts  = ({ products }) => products;
export const getProductById = ({ products }, id) => products;


/* THUNKS */
export const fetchGetAllProducts= () => {
    return (dispatch, getState) => {
        dispatch(fetchStarted());
        axios
        .get(`${API_URL}/products`)
        .then(res => {
            dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
            dispatch(fetchError(err.message || true));
        });
    };
};

export const fetchGetProductById = (id) => {
    return (dispatch, getState) => {
      dispatch(fetchStarted());
      axios
        .get(`${API_URL}/products/${id}`)
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });
    };
  }; 

/* actions */
const createActionName = actionName => `app/products/${actionName}`;
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR'); 




/* actions creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR }); 

const productsReducer = (statePart = [], action) => {
    switch (action.type) {
        case FETCH_START: {
            return {...statePart, loading: {active: true, error: false}};
          }
        case FETCH_SUCCESS: {
            return {...statePart, loading: {active: false, error: false}, products: action.payload}
        }
        case FETCH_ERROR: {
            return {...statePart, loading: {active: false, error: action.payload}};
        }
        default:
         return statePart;
    };
};

export default productsReducer; 