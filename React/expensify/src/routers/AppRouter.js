import React from 'react';
//import './App.css';



import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Nav from '../components/Nav'
import AddExpensePage from '../components/AddExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

//Playground stuff
//import ReduxExpencify from '../playground/redux-expensify';




function AppRouter() {
    return (
      <Router>
          <div className="App">
            <Nav />
            <Switch>
              <Route path='/' exact component={ExpenseDashboardPage} />
              <Route path='/Add' exact  component={AddExpensePage} />
              <Route path='/Edit/:id' exact component={EditExpensePage} />
              <Route path='/Edit' exact component={EditExpensePage} />
              <Route path='/Help' exact component={HelpPage} />
             
              <Route  exact component={NotFoundPage} />
            </Switch>
           
            {/*Playground stuff*/}
  
            {/* <Redux />
            <ReduxExpencify /> */}
        </div>
      </Router>
      
    );
  }

  export default AppRouter;