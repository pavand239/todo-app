import React from "react"
import ItemStatusButtons from '../item-status-buttons'
import './todo-item.css'

export class TodoItem extends React.Component{
    constructor(props){
        super();
        let {isImportant = false} = props
        this.state={
            done:false,
            isImportant:isImportant
        };
        this.handlerOnLabelClick = () => {
            this.setState((prevState)=>({done:!prevState.done}));
        };
        this.handlerOnMarkImportant = () => {
            this.setState((prevState)=>({isImportant:!prevState.isImportant}));
        }
    } 
    render(){
        let {label,handlerOnDelete} = this.props;
        let {done, isImportant} = this.state;
        return (
            <div className='d-flex justify-content-between'>
                <span 
                    className={(isImportant?'important ':'')+(done?'done':'')}
                    onClick={this.handlerOnLabelClick}>
                        {label}
                </span>
                <ItemStatusButtons 
                    onMarkImportant={this.handlerOnMarkImportant}
                    onDelete={handlerOnDelete}/>
            </div>
    )}
}
