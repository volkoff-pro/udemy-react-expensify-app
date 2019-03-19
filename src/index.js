import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/routes';
import configureStore from './store/configure.store';
import { startSetExpenses } from './actions/expenses.actions';
import { UserProvider } from './services/userContext';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const user = {
  userName: 'volkoff',
  firstName: 'Sergey',
  lastName: 'Volkoff'
};

const jsx = (
  <UserProvider value={user}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </UserProvider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
