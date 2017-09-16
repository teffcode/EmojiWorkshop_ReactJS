import React from 'react';

import '../styles/Todo.css';

const Todo = ({ originalText, todoText }) => (
    <li
      data-text={originalText}>
      {todoText}
    </li>
)
export default Todo;