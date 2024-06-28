import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Questions from './pages/questions';
import Destinations from './pages/destinations';
import Inspiration from './pages/inspiration';
import About from './pages/about';
import Header from './pages/header';
import { redirect } from "react-router";


export default class App extends Component {
  render() {

    return (
      <div className='app'>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/questions" component={Questions} />
            <Route path="/destinations" component={Destinations} />
            <Route path="/inspiration" component={Inspiration} />
            <Route path="/about" component={About} />
          </Switch>
      </div>
    );
  }
}
