import React from 'react';
import SimpleFormExample from './components/login'
import './App.css';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
   <div>
     <Router>
        <Switch>
          <Route path='/login'>
            <SimpleFormExample/>
          </Route>
        </Switch>
     </Router>
  
   </div>
  );
}

export default App;
