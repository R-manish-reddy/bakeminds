import React from 'react';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
//import './App.css';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'

const  store = configureStore();


store.dispatch(addExpense({description: 'water bill',amount:4500}))
store.dispatch(addExpense({description: 'gas bill',createdAt:1000}))
store.dispatch(addExpense({description: 'Rent',amount:10902}))



console.log(store.getState())
const state = store.getState();
const visibleExpenses =getVisibleExpenses(state.expenses,state.filters)


console.log(visibleExpenses)



const App =()=>{

  return(
    <Provider store={store}>
    <AppRouter />
    </Provider>
  )
}




export default App;
