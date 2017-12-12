import { createStore } from 'redux';

// Reducers
// 1. Reducers are pure functions. Not allow external data
// 2. Never change state or action
const countReducer = (state = {count:0}, action) => {
      switch(action.type) {
            case 'INCREMENT': 
                  //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
                  return {count: state.count + action.incrementBy};       
            case 'DECREMENT': 
                  return {count: state.count - action.decrementBy};
            case 'SET': 
                  return {count: action.count};
            case 'RESET': 
                  return {count: 0};
            default:
                  return state;   
      }
};

const store = createStore(countReducer);

const add = ({a, b}, c) => {
      return a + b + c;
}
console.log(add({a: 1, b:2}, 100));

const unsubscribe = store.subscribe(() => {
   console.log(store.getState());
});

const incrementCount = ({ incrementBy = 1} = {}) => ({
      type: 'INCREMENT',
      incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
      type: 'DECREMENT',
      decrementBy: decrementBy
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});


/* store.dispatch({
   type: 'INCREMENT',
   incrementBy: 3
}); */


store.dispatch(incrementCount({ incrementBy: 3 }));
store.dispatch(incrementCount());

store.dispatch(setCount({ count: 101 }));

/* store.dispatch({
   type: 'DECREMENT'
}); */
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10}));
//unsubscribe();
store.dispatch(resetCount());
