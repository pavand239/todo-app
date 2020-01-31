import React from "react"
import ItemStatusButtons from '../item-status-buttons'
import './todo-item.css'

export const TodoItem = ({label, isImportant=false}) => (
    <div className='d-flex justify-content-between'>
        <span className={(isImportant?'important':'')}>{label}</span>
        <ItemStatusButtons />
    </div>
)