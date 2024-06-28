import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Questions from './pages/questions';
import Destinations from './pages/destinations';
import Inspiration from './pages/inspiration';
import About from './pages/about';
import Header from './pages/header';

export default class App extends Component {
  render() {

    return (
      <div className='app'>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/questions" component={Questions} />
            <Route exact path="/destinations" component={Destinations} />
            <Route exact path="/inspiration" component={Inspiration} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>

      </div>
    );
  }
}
