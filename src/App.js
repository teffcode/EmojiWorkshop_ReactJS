import React, { Component } from 'react';

import Title from './components/Title';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="containerTitle">
          <Title titleName="Emoji Todo List"/>
        </div>
      </div>
    );
  }
}

export default App;
