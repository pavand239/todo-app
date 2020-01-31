import React from "react"
import TodoList from "../todo-list"
import Layout from "../layout"
import Header from "../header"
import TopPanel from '../top-panel'
import BottomPanel from '../bottom-panel'

export default class TodoApp extends React.Component {
    constructor() {
        super();
        this.state={
            todosData:[{
                        id:1,
                        label:'Drink Coffee',
                    },
                    {
                        id:2,
                        label:'Make awesome React App',
                        isImportant:true
                    }]
        };
    }
    handlerAddButtonClick() {
        
    }
    render() {
        return (
            <Layout>
                <Header todo={1} 
                        done={2}/>
                <TopPanel/>
                <TodoList todos={this.state.todosData} />
                <BottomPanel />
            </Layout>
            )
    }
}