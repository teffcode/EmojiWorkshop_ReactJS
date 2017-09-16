import React from 'react';

import '../styles/Todo.css';

const Todo = ({ originalText, todoText, handleRemove }) => (
    <li
      onClick={handleRemove}
      data-text={originalText}>
      {todoText}
    </li>
)
export default Todo;