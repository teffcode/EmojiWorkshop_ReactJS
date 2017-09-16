import React, { Component } from 'react';

import Title from './components/Title';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  addToState = (event) => {  
    if (event.type === "click" || event.key === "Enter") {
      this.setState(prevState => { return {
        text: '',
        // What is the new todos state ? 
        todos: prevState.todos.concat(/* ? */)} 
      })
    }
  }

  render(){

    return(
      <div>
        <div className="containerTitle">
          <Title titleName="Emoji Todo List"/>
        </div>
        <div className="btnAfter"/>
        <TodoForm 
          inputValue={this.state.text}
          handleChange={this.handleChange}
          handleKeyPress={this.addToState}
          handleClick={this.addToState}
        />
        <TodoList todos={/* What is the todos value ? */} />
      </div>
    );
  }
}

export default App;
