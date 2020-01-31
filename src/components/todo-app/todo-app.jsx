import React from "react"
import TodoList from "../todo-list"
import Layout from "../layout"
import Header from "../header"
import TopPanel from '../top-panel'
import BottomPanel from '../bottom-panel'

export default class TodoApp extends React.Component {
    constructor() {
        super();
        let maxId = 100;
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
        this.handlerOnDeleteItem = (id) => {
            let {todosData} = this.state,
                i = todosData.findIndex((todoItem)=>(todoItem.id===id)),
                head = todosData.slice(0,i),
                tall = todosData.slice(i+1),
                newTodosData=[...head,...tall];
            this.setState({
                todosData:newTodosData
            });
            console.log(this.state.todosData);
        }
        this.handlerOnAddItem = (text)=> {
            let newTodo={
                id:maxId++,
                label:text
            }
            this.setState(({todosData})=>({
                todosData:[...todosData,newTodo]
            }));
        }
    }

    render() {
        return (
            <Layout>
                <Header todo={1} 
                        done={2}/>
                <TopPanel/>
                <TodoList 
                    todos={this.state.todosData}
                    handlerOnDeleteItem={this.handlerOnDeleteItem} />
                <BottomPanel handlerOnAddItem={this.handlerOnAddItem}/>
            </Layout>
            )
    }
}