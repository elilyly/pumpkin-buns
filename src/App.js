import React, { Component } from 'react';
// import logo from './logo.svg';
import { Switch, Route, withRouter } from 'react-router-dom'
import './App.css';
import QuestionsContainer from './QuestionsContainer';
import Costumes from './Costumes';

class App extends Component {
  render() {
    return (
      <div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="centered"></h1>
        <Route
          path='/your-costume'
          component={Costumes}
        />
        <QuestionsContainer />
      </div>
    );
  };
};

export default App
