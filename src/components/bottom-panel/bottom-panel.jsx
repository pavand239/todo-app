import React from 'react'
import './bottom-panel.css'

export const BottomPanel = () => (
    <div className='d-flex bottom-panel'>
        <input className='bottom-panel-input form-control' type='text' placeholder='Add new item...' />
        <button className="btn btn-primary">Add</button>
    </div>
)