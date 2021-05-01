import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import User from './components/users/User';
import { GithubProvider } from './context/Github';
import NotFound from './components/pages/NotFound';

const App = () => {
  return (
    <GithubProvider>
      <Router>
        <div className='App'>
          <Navbar title='Github User Finder' icon='fas fa-code' />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:username' component={User} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </GithubProvider>
  );
};

export default App;
