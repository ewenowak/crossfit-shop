
/* action name creator */
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SEND_ORDER = createActionName('ORDER');


/* action creators */
export const sendOrder = payload => ({ payload, type: SEND_ORDER});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SEND_ORDER: {
        return [...statePart, {...action.payload}]
    }
    
    default:
      return statePart;
  }
}
