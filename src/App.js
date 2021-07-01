import React from 'react';
import Login from './components/login/login'
import SignUp from './components/signUp/signUp'
import SignUpPrincipal from './components/signUp/signUpPrincipal'
import GeneralSignUp from './components/signUp/generalSignUp'
import SignUpSubstitute from './components/signUp/signUpSubstitute'
import AddInstitution from './components/signUp/addInstitution'
import AddInstitutionTeacher from './components/signUp/addInstitutionTeacher'
import SubtractionReport from './components/teacherPage/subtractionReport'
import SelectHour from './components/teacherPage/selectHour'
import './App.css';
import { Route, Switch, Link, BrowserRouter as Router, useHistory } from 'react-router-dom';
import signUp from './components/signUp/signUp';
<<<<<<< HEAD
import LastSuggestions from './components/substituteTeacherPage/lastSuggestions';
=======
import Home from './components/teacherPage/home'
>>>>>>> 7541b6d55800463fc1d209b5d608f5a4823b28ae


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/login'>
            <Login />
            <SignUp />
          </Route>

          <Route path='/signUpPrincipal'>
            <SignUpPrincipal />
          </Route>

          <Route path='/generalSignUp'>
            <GeneralSignUp />
          </Route>

          <Route path='/signUpSubstitute'>
            <SignUpSubstitute />
          </Route>

          <Route path='/addInstitution'>
            <AddInstitution />
          </Route>

          <Route path='/addInstitutionTeacher'>
            <AddInstitutionTeacher />
          </Route>

          <Route path='/subtractionReport'>
            <SubtractionReport />
          </Route>

          <Route path='/selectHour'>
            <SelectHour/>
          </Route>

<<<<<<< HEAD
          <Route path='/lastSuggestions'>
            <LastSuggestions/>
=======
          <Route path='/teacherHome'>
            <Home/>
>>>>>>> 7541b6d55800463fc1d209b5d608f5a4823b28ae
          </Route>

          <Route path='/'>
            <Login />
            <SignUp />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;