import logo from './logo.svg';
import './App.css';
import './index.css'

import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom"
import Nav from './components/nav';
import Home from './components/home';
import Countdown from './components/countdown';
import About from './components/about';
import More from './components/more';
import Footer from './components/footer';
import Ideas from './components/ideas';

function App() {
  return (
    <div className="App">
        <Router>
            <Nav/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/more' component={More}/>
                <Route path='/ideas' component={Ideas}/>
            </Switch>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
