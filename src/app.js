import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/routes';
import configureStore from './store/configure.store';
import { addExpense } from './actions/expenses.actions';
import { setTextFilter } from './actions/filters.actions';
import getVisibleExpenses from './selectors/expenses.selectors';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(
  addExpense({
    description: 'Water bill',
    note: 'Some Water bill note',
    amount: 250
  })
);

store.dispatch(
  addExpense({
    description: 'Gas bill',
    note: 'Gas bill note',
    amount: 250
  })
);

store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
