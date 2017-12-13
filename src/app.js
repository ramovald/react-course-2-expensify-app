import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';



const store = configureStore();
// console.log(store.getState());

//Store subscription
/* store.subscribe(() => {
   const state = store.getState();
   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
   console.log(visibleExpenses);
}) */


// store.dispatch(setTextFilter('water'));
//store.dispatch(setTextFilter('water'));
// console.log(store.getState());

/* setTimeout(() => {
   store.dispatch(setTextFilter('gas'));
}, 3000); */

const jsx = (
   <Provider store={store}>
      <AppRouter />
   </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));