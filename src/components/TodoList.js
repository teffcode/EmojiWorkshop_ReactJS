import React from 'react'

import emojify from '../utils/emojify';
import Todo from './Todo';

import '../styles/TodoList.css';

const TodoList = ({ todos }) => {
    return(
        <ul>{todos.map(todo => 
                /* Todo Component :) */
            )}</ul>
    )   
}

export default TodoList;