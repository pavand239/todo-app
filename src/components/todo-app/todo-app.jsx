import React from "react"
import TodoList from "../todo-list"
import Layout from "../layout"
import Header from "../header"
import TopPanel from '../top-panel'
import BottomPanel from '../bottom-panel'

export default class TodoApp extends React.Component {

    maxId = 100;
    state={
        todosData:[
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make awesome React App')
        ],
        searchTerm:'',
        filter:'all'
    };
    onSearchChange = (e) =>{
        this.setState({
            searchTerm:e.target.value
        });
    }
    onClickFilterButton = (e) => {
        this.setState({
            filter:e.target.value
        });
    }
    createTodoItem(text){
        return {
            id:this.maxId++,
            label:text,
            isImportant:false,
            done:false
        }
    }
    handlerOnDeleteItem = (id) => {
        this.setState(({todosData})=>{
            let i = todosData.findIndex((todoItem)=>(todoItem.id===id)),
                head = todosData.slice(0,i),
                tall = todosData.slice(i+1),
                newTodosData=[...head,...tall];
            return ({todosData:newTodosData})
        });
    }
    handlerOnAddItem = (text)=> {
        let newTodo=this.createTodoItem(text);
        this.setState(({todosData})=>({
            todosData:[...todosData,newTodo]
        }));
    }
    toggleProperty(arr,id,propertyName) {
        let i = arr.findIndex((item)=>(item.id===id)),
            newItem={...arr[i],[propertyName]:!arr[i][propertyName]},
            head = arr.slice(0,i),
            tall = arr.slice(i+1);
        return [...head, newItem, ...tall]
    }
    handlerOnToggleImportant = (id) => {
        this.setState(({todosData}) => {
                return {todosData:this.toggleProperty(todosData,id,'isImportant')}
        });
    }
    handlerOnToggleDone = (id) => {
        this.setState(({todosData}) => {
            return {todosData:this.toggleProperty(todosData,id,'done')}
    });
    }
    searchItems(items,term){
        if (term===''){
            return items;
        }
        return items.filter((item) => (item.label.toLowerCase().indexOf(term.toLowerCase())>-1))

    }
    filterItems(items,filter){
        if (filter==='active'){
            return items.filter((item) => (!item.done));
        } else if (filter==='done') {
            return items.filter((item) => (item.done));
        } else {
            return items;
        }
    }
    render() {
        let doneCount = this.state.todosData.filter((el)=>(el.done)).length,
            todoCount = this.state.todosData.filter((el)=>(!el.done)).length,
            {todosData,searchTerm,filter} = this.state;
        return (
            <Layout>
                <Header todo={todoCount} 
                        done={doneCount}/>
                <TopPanel
                    onSearchChange={this.onSearchChange}
                    onClickFilterButton={this.onClickFilterButton}
                    filter={filter} />
                <TodoList 
                    todos={this.filterItems(this.searchItems(todosData,searchTerm),filter)}
                    handlerOnDeleteItem={this.handlerOnDeleteItem}
                    handlerOnToggleImportant={this.handlerOnToggleImportant}
                    handlerOnToggleDone={this.handlerOnToggleDone} />
                <BottomPanel handlerOnAddItem={this.handlerOnAddItem}/>
            </Layout>
            )
    }
}