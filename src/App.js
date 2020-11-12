import React, {Fragment} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from './components/layout/Landing'
import Navbar from './components/layout/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Main from './components/screen/Main'
import Questionnaire from './components/screen/Questionnaire'
import Put from './components/screen/Put'


function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route path="/" exact component={Landing} />
        <section>
          <Switch>
            <Route path="/main" exact component={Main} />
            <Route path="/questionnaire" exact component={Questionnaire} />
            <Route path="/edit/:id" exact component={Put} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />          
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
