import React from "react"
import TodoList from "../todo-list"
import Layout from "../layout"
import Header from "../header"

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
    render() {
        return (
            <Layout>
                <Header />
                <TodoList todos={this.state.todosData} />
            </Layout>
            )
    }
}