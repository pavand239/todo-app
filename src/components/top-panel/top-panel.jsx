import React from "react"
import SearchPanel from '../search-panel'
import FilterButtons from '../filter-buttons'
import './top-panel.css'

export const TopPanel = () => (
    <div className='top-panel d-flex'>
        <SearchPanel />
        <FilterButtons />
    </div>
)