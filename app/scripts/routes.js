import React from 'react';
import { Route,Redirect } from 'react-router';

import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import Info from './pages/info.jsx';
import NotFound from './pages/notFound.jsx';
import ExpenseEdit from './pages/expenseEdit.jsx';

export default function() {
  return (
      <Route component={ App }>
          <Redirect from="/" to="/home" />
          <Route path="/home" component={ Home } />
          <Route path="/info" component={ Info } />
          <Route path="/expenses/:id" component={ExpenseEdit}/>
          <Route path="*" component={ NotFound } />

      </Route>
  );
}