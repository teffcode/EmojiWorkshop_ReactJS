import React from 'react';

import '../styles/TodoForm.css';

// Create a button with prop name -> handleClick in onClick

const TodoForm = ({ inputValue, handleChange, handleClick }) => (

    <div>
      <input 
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleClick}>
        add
      </button>
    </div>

);

export default TodoForm;