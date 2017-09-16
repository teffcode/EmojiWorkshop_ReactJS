import React, { Component } from 'react';

import Title from './components/Title';
import TodoForm from './components/TodoForm';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // text state for input
    }
  }

  handleChange = (e) => {
    this.setState({
      // How to change the text state ?
    })
  }

  render() {
    return (
      <div>
        <div className="containerTitle">
          <Title titleName="Emoji Todo List"/>
        </div>
        <div className="btnAfter"/>
        <TodoForm 
          inputValue={this.state.text}
          handleChange={this.handleChange}
          handleClick={this.addToState}
        />
      </div>
    );
  }
}

export default App;
