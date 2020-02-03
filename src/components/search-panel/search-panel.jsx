import React from 'react'
import './search-panel.css'

export const SearchPanel =(props) =>  (
    <input className='form-control search-input' type='text'
        onChange={props.onSearchChange} placeholder='Search...' />
)