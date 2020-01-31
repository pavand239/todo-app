import React from "react"
import './todo-item.css'

export const TodoItem = ({label, isImportant=false}) => (
    <span className={(isImportant?'important':'')}>{label}</span>
)