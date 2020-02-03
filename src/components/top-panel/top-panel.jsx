import React from "react"
import SearchPanel from '../search-panel'
import FilterButtons from '../filter-buttons'
import './top-panel.css'

export const TopPanel = (props) => (
    <div className='top-panel d-flex'>
        <SearchPanel onSearchChange={props.onSearchChange}/>
        <FilterButtons onClickFilterButton={props.onClickFilterButton}
                       filter={props.filter}/>
    </div>
)