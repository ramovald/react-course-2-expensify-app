import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import HelpExpense from '../components/HelpExpense';
import EditExpense from '../components/EditExpense';
import NotFound from '../components/NotFound';
import Header from '../components/Header';

const AppRouter = () => (
   <BrowserRouter>
   <div>
    <Header />     
    <hr />
    <Switch> 
       <Route path="/" component={ExpenseDashboard} exact={true}/>
       <Route path="/create" component={AddExpense} />
       <Route path="/edit/:id" component={EditExpense} />
       <Route path="/help" component={HelpExpense} />
       <Route component={NotFound} />
    </Switch>    
   </div>
  </BrowserRouter>
);

export default AppRouter;