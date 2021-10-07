import React from 'react';
import './App.css';

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Nav from './components/Nav'
import AddExpensePage from './pages/AddExpensePage'
import ExpenseDashboardPage from './pages/ExpenseDashboardPage'
import EditExpensePage from './pages/EditExpensePage'
import HelpPage from './pages/HelpPage'
import NotFoundPage from './pages/NotFoundPage'

//Playground stuff
import Redux from './playground/redux-101';
import Destructuring from './playground/destructring';


function App() {
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

          <Redux />
          <Destructuring />
      </div>
    </Router>
    
  );
}

export default App;
