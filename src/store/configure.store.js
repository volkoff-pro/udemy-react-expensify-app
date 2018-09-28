import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses.reducer';
import filtersReducer from '../reducers/filters.reducer';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    /* eslint-disable no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  /* eslint-enable */

  return store;
};
