import React from 'react';
import Login from './components/login/login'
import './App.css';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
   <div>
     <Router>
        <Switch>
          <Route path='/login'>
            <Login/>
          </Route>
        </Switch>
     </Router>
  
   </div>
  );
}

export default App;
