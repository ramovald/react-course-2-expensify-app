import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//Expenses Reducer
const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
   text: '',
   sortBy: 'date',
   startDate: undefined,
   endDate: undefined
};

const expensesRedurcer = (state = expensesReducerDefaultState, action) => {
   switch (action.type) {
      case 'ADD_EXPENSE':
         return [...state, action.expense];
      case 'REMOVE_EXPENSE':
         return state.filter(({id}) => action.id !== id);
      case 'EDIT_EXPENSE':
         return state.map((expense) => {
            if (expense.id === action.id) {
                  return {
                        ...expense,
                        ...action.updates
                  }
            } else {
                  return expense;
            }
         })

      default:
         return state;
   }
}

//Filters Reducer
const filtersReducer = (state = filtersReducerDefaultState, action) => {
   switch (action.type) {
      case 'SET_TEXT_FILTER':
         return {
            ...state,
            text: action.text
         };
      case 'SORT_BY_AMOUNT':
         return {
            ...state,
            sortBy: 'amount'
         };
      case 'SORT_BY_DATE':
         return {
            ...state,
            sortBy: 'date'
         };
      case 'SET_START_DATE':
         return {
            ...state,
            startDate: action.startDate
         };
      case 'SET_END_DATE':
         return {
            ...state,
            endDate: action.endDate
         };
      default:
         return state;
   }
};

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
      return expenses.filter((expense) => {
         const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
         const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
         const textMatch = text == undefined || expense.description.toLowerCase().includes(text.toLowerCase());

         return startDateMatch && endDateMatch && textMatch;
      }).sort((a,b) => {
            if (sortBy === 'date') {
                  return a.createdAt < b.createdAt ? 1 : -1;
            } else if (sortBy === 'amount') {
                  return a.amount < b.amount ? 1 : -1;
            }
      });

};

//Store creation
const store = createStore(
   combineReducers({
      expenses: expensesRedurcer,
      filters: filtersReducer
   })
);

//Store subscription
store.subscribe(() => {
   const state = store.getState();
   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
   console.log(visibleExpenses);
})

//Expenses Actions
const addExpense = ({description='', note='', amount=0, createdAt=0} = {}) => ({
   type: 'ADD_EXPENSE',
   expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
   }
});

const removeExpense = ({id, updates} = {}) => ({
      type: 'REMOVE_EXPENSE',
      id,
      updates 
});

const editExpense = (id, updates) => ({
      type: 'EDIT_EXPENSE',      
      id,
      updates      
});

//Filters actions
const setTextFilter = (text = '') => ({
      type: 'SET_TEXT_FILTER',
      text
});
const sortByAmount = () => ({
      type: 'SORT_BY_AMOUNT'      
});
const sortByDate = () => ({
      type: 'SORT_BY_DATE'    
});
const setStartDate = (startDate) => ({
      type: 'SET_START_DATE',
      startDate
});
const setEndDate = (endDate) => ({
      type: 'SET_END_DATE',
      endDate
});

const demoState = {
   expenses: [{
      id: 'asdlskdfj',
      description: 'January Rent',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 0
   }],
   filters: {
      text: 'rent',
      sortBy: 'amount', // date or amount
      startDate: undefined,
      endDate: undefined
   }
};

const expenseOne = store.dispatch(addExpense({description:'Electricity', note:'bi-monthly payment', amount:3, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee', note:'decaf', amount:50, createdAt: -1000}));
/*store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 5 })); */

// store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter('fee'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setEndDate(125));
// store.dispatch(setStartDate(2000));

const user = {
      name: 'Jen',
      age: 24
}

console.log({ 
      age: 27,
      ...user,
      location: 'Phil',
       });