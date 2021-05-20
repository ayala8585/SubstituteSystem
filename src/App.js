import React from 'react';
import Login from './components/login/login'
import SignUp from './components/signUp/signUp'
import SignUpPrincipal from './components/signUp/signUpPrincipal'
import SignUpTeacher from './components/signUp/signUpTeacher'
import SignUpSubstitute from './components/signUp/signUpSubstitute'
import AddInstitution from './components/signUp/addInstitution'
import './App.css';
import { Route, Switch, Link, BrowserRouter as Router, useHistory } from 'react-router-dom';
import signUp from './components/signUp/signUp';


function App() {
  return (
   <div>
     <Router>
        <Switch>
          <Route path='/login'>
            <Login/>
            <SignUp/>
          </Route>

          <Route path='/signUpPrincipal'>
            <SignUpPrincipal/>
          </Route>

          <Route path='/signUpTeacher'>
            <SignUpTeacher/>
          </Route>

          <Route path='/signUpSubstitute'>
            <SignUpSubstitute/>
          </Route>

          <Route path='/addInstitution'>
            <AddInstitution/>
          </Route>

          <Route path='/'>
            <Login/>
            <SignUp/>
          </Route>
        </Switch>
     </Router>
  
   </div>
  );
}

export default App;
