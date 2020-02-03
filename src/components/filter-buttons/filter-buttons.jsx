import React from "react"

export const FilterButtons = (props) => {
    const buttons = [{value:'all',label:'All'},
                    {value:'active',label:'Active'},
                    {value:'done',label:'Done'}];
    let filterButtons = buttons.map((item)=>{
        let isActive = props.filter===item.value;
        return (
            <button key={item.value} type="button"
                className={"btn " + (isActive?"btn-info":"btn-outline-secondary")} value={item.value}>{item.label}</button>
    )});
    return (
        <form className="btn-group" onClick={props.onClickFilterButton}>
            {filterButtons}
        </form>
)}