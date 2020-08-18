import React, { Component } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';

import './App.css';




class App extends Component{
  state = {

  }
  render() {
  return (
    <div className="App">
    <Header/>
    <Navbar/>
    </div>
  );
 }
}

export default App;
