import React from "react"

export const ItemStatusButtons = ({onMarkImportant, onDelete}) => (
    <div className='btn-group' role='group' aria-label='ToDo item buttons'>
        <button 
            className="btn btn-outline-primary fa fa-exclamation" 
            onClick={onMarkImportant}/>
        <button 
            className="btn btn-outline-danger fa fa-trash-o"
            onClick={onDelete} />
    </div>
)