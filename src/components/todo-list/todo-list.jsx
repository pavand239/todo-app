import React from "react"
import TodoItem from '../todo-item'
import './todo-list.css'

export const TodoList = ({todos}) =>{
    let todoList = todos.map(todo => {
        let {id, ...todoProps}=todo;
        return <li key={id} className = 'list-group-item '>
                <TodoItem {...todoProps} />
            </li>
    })
    return <ul className='list-group'>{todoList}</ul>
}