import React from 'react'
import './bottom-panel.css'

export default class BottomPanel extends React.Component {
    constructor(props){
        super(props);
        this.state={
            inputValue:''
        }
        this.onInputChange = (e) =>{
            this.setState({
                inputValue:e.target.value
            })
        }
    }
    render() {
        let {inputValue} = this.state;
        return (
            <div className='d-flex bottom-panel'>
            <input 
                className='bottom-panel-input form-control' 
                type='text' onChange={this.onInputChange} 
                value={inputValue} 
                placeholder='Add new item...' />
            <button 
                className="btn btn-primary"
                onClick={()=>{
                    this.props.handlerOnAddItem(inputValue);
                    this.setState({
                        inputValue:''
                    })
                }}
            >
                Add
            </button>
            </div>
        )
    }
}
