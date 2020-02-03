import React from "react"
import ItemStatusButtons from '../item-status-buttons'
import './todo-item.css'

export const TodoItem = (props) =>{
    let {label,handlerOnDelete,
        handlerOnToggleImportant, handlerOnToggleDone,
        isImportant = false, done=false} = props;
    return (
        <div className='d-flex justify-content-between'>
            <span 
                className={(isImportant?'important ':'')+(done?'done':'')}
                onClick={handlerOnToggleDone}>
                    {label}
            </span>
            <ItemStatusButtons 
                handlerOnToggleImportant={handlerOnToggleImportant}
                onDelete={handlerOnDelete}/>
        </div>
    )
}
