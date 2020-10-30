import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './scss/main.scss';

// Pages
import BodyLayout from './layout/layout';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import CandidateHome from './pages/Candidate/candidHome';
import AdminHome from './pages/Admin/adminHome';
import MySQL from './pages/MySQL/mysql';
import AWS from './pages/AWS/aws';
import Python from './pages/PYTHON/python';

function App() {
  return (
    <div className="App">
      <Router>
        <BodyLayout>
          <Switch>
            <Route exact={true} path="/">
              <Login />
            </Route>
            <Route exact={true} path="/register">
              <Register />
            </Route>
            <Route exact={true} path="/candidate_login">
              <Login />
            </Route>
            <Route exact={true} path="/admin_login">
              <Login />
            </Route>
            <Route exact={true} path="/home">
              <CandidateHome />
            </Route>
            <Route exact={true} path='/admin_home'>
              <AdminHome />
            </Route>
            <Route exact={true} path="/questions/mysql">
              <MySQL />
            </Route>
            <Route exact={true} path="/questions/aws">
              <AWS />
            </Route>
            <Route exact={true} path="/questions/python">
              <Python />
            </Route>
          </Switch>
        </BodyLayout>
      </Router>
    </div>
  );
}

export default App;
