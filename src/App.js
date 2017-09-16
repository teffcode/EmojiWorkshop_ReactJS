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
        todos: prevState.todos.concat(this.state.text)} 
      })
    }
  }

  removeFromState = (event) => {
    const todoText = event.target.dataset.text;

    this.setState(prevState => { return {
      todos: prevState.todos.filter(todo => todo !== todoText)} 
    })
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
        <TodoList todos={this.state.todos} handleRemove={this.removeFromState} />
        </div>
    );
  }
}

export default App;