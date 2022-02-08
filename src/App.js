import React from "react";
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

import "./App.css";
import Login from "./components/login/login";
import SignUp from "./components/signUp/signUp";
import Home from "./components/teacherPage/home";
import SelectHour from "./components/teacherPage/selectHour";
import GeneralSignUp from "./components/signUp/generalSignUp";
import SignUpTeacher from "./components/signUp/SignUpTeacher";
import SignUpPrincipal from "./components/signUp/signUpPrincipal";
import SignUpSubstitute from "./components/signUp/signUpSubstitute";
import SubtractionReport from "./components/teacherPage/subtractionReport";
import LastSuggestions from "./components/substituteTeacherPage/lastSuggestions";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
            <SignUp />
          </Route>

          <Route path="/SignUpTeacher">
            <SignUpTeacher />
          </Route>

          <Route path="/signUpPrincipal">
            <SignUpPrincipal />
          </Route>
          <Route path="/generalSignUp">
            <GeneralSignUp />
          </Route>
          <Route path="/signUpSubstitute">
            <SignUpSubstitute />
          </Route>
          <Route path="/subtractionReport">
            <SubtractionReport />
          </Route>
          <Route path="/selectHour">
            <SelectHour />
          </Route>
          <Route path="/lastSuggestions">
            <LastSuggestions />
          </Route>
          <Route path="/teacherHome">
            <Home />
          </Route>
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
