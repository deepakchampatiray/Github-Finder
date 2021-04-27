import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import { GithubProvider } from './context/Github';
import { AlertProvider } from './context/Alert';

const App = () => {
  return (
    <GithubProvider>
      <Router>
        <div className='App'>
          <Navbar title='Github User Finder' icon='fas fa-code' />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <div className='container'>
                  <AlertProvider>
                    <Alert />
                    <Search />
                  </AlertProvider>
                  <Users />
                </div>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/user/:username'
              render={(props) => <User {...props} />}
            />
          </Switch>
        </div>
      </Router>
    </GithubProvider>
  );
};

export default App;
