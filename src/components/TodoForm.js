import React from 'react';

import '../styles/TodoForm.css';

const TodoForm = ({ inputValue, handleChange, handleKeyPress, handleClick }) => (

    <div>
      <input 
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>
        add
      </button>
    </div>

);

export default TodoForm;