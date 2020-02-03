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
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.handlerOnAddItem(this.state.inputValue);
        this.setState({
            inputValue:''
        });
    }
    render() {
        let {inputValue} = this.state;
        return (
            <form className='d-flex bottom-panel'
                  onSubmit={this.onSubmit} >
                <input 
                    className='bottom-panel-input form-control' 
                    type='text' onChange={this.onInputChange} 
                    value={inputValue} 
                    placeholder='Add new item...' />
                <button className="btn btn-primary">
                    Add
                </button>
            </form>
        )
    }
}
