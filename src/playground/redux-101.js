import { createStore } from 'redux';

export const incrementCount = ({ incrementBy } = 1) => ({
  type: 'INCREMENT',
  incrementBy
});

export const decrementCount = ({ decrementBy } = 1) => ({
  type: 'DECREMENT',
  decrementBy
});

export const setCount = ({ count } = 0) => ({
  type: 'SET',
  count
});

export const resetCount = () => ({
  type: 'RESET'
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };

    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };

    case 'RESET':
      return {
        count: 0
      };

    case 'SET':
      return {
        count: action.count
      };

    default:
      return state;
  }
};

const store = createStore(countReducer);

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 3 }));

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

store.dispatch(setCount({ count: 101 }));
