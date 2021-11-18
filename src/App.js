import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import MintHome from './components/MintHome';
import Banner from './components/Banner'
import Welcome from './components/Welcome'
import About from './components/About'
import Display from './components/Display'
import Team from './components/Team'
import Info from './components/Info'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch } from "react-router-dom";


class App extends Component {
  
  render() {
    return (
      <>
        <Router>
          <Switch />
          <Navbar />
          <Banner />
          <Welcome />
          <About />
          <Display />
          <Team />
          <Info />
          <Footer />
        </Router> 
      </>
    );
  }
}

export default App;
