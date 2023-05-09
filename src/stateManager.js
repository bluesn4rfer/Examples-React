import { createStore } from 'redux';

const initialState = {
    App: {
        page: 'HELLO WORLD'
    }
};

// Define the action type
const UPDATE_STATE = 'UPDATE_STATE';

// Define the reducer map
const reducerMap = {
    [UPDATE_STATE]: (state, action) => {
        const { component, payload } = action;
        return {
        ...state,
        [component]: payload
        };
    },
};

// Define the reducer function
const reducer = (state = initialState, action) => {
  const reducerFunc = reducerMap[action.type];
  if (reducerFunc) {
    return reducerFunc(state, action);
  }
  return state;
};

export const stateManager = createStore(reducer);