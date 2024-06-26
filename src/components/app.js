import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Questions from './pages/questions';  
import Destinations from './pages/destinations';


export default class App extends Component {
  render() {

    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/questions" component={Questions} />
            <Route path="/destinations" component={Destinations} />
          </Switch>
        </Router>

      </div>
    );
  }
}
