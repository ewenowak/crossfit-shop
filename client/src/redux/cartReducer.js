

export const getAllCartProducts = ({ cart }) => cart;
export const getCartSummary = ({cart}) => cart.reduce((acc, current) => {
  acc += current.totalPrice;
  return acc;
}, 0);

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT_TO_CART = createActionName('ADD_PRODUCT');
const INCREASE_CART_PRODUCT_AMOUNT = createActionName('INCREASE_CART_PRODUCT_AMOUNT');
const DECREASE_CART_PRODUCT_AMOUNT = createActionName('DECREASE_CART_PRODUCT_AMOUNT')
const REMOVE_PRODUCT_FROM_CART = createActionName('REMOVE_PRODUCT_FROM_CART ')

/* action creators */
export const addProductToCart = payload => ({ payload, type: ADD_PRODUCT_TO_CART });
export const increaseCartProductAmount = payload => ({ payload, type: INCREASE_CART_PRODUCT_AMOUNT })
export const decreaseCartProductAmount = payload => ({ payload, type: DECREASE_CART_PRODUCT_AMOUNT })
export const removeProductFromCart = payload => ({ payload, type: REMOVE_PRODUCT_FROM_CART })
/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      const productInCart = statePart.find(cart => cart.id === action.payload.id);
      if(productInCart){
        productInCart.amount = productInCart.amount + action.payload.amount;
        productInCart.totalPrice += productInCart.totalPrice
        return statePart;
      } else{
      return [...statePart, action.payload]
      }
    }
    case INCREASE_CART_PRODUCT_AMOUNT: {
            return statePart.map(cart => cart.id === action.payload.id ? {...cart, amount: cart.amount + 1, totalPrice: cart.price * cart.amount } : cart);
    }
    case DECREASE_CART_PRODUCT_AMOUNT: {
      return statePart.map(cart => cart.id === action.payload.id ? {...cart, amount: cart.amount - 1, totalPrice: cart.price * cart.amount} : cart);
    }
    case REMOVE_PRODUCT_FROM_CART: {
      return statePart.filter(cart => cart.id !== action.payload);
    }
    default:
      return statePart;
  }
}
