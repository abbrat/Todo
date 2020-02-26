import React, { Component } from 'react'
import TodoItem from "./TodoItem"
import todosData from "./todosData"




export class App extends Component {
  
  constructor(){
    super()
    this.state={
      todos:todosData
    }

  }
  handleChange(id) {
       this.setState(prevState=>{
         const updated=prevState.todos.map(todo=>{
           if(todo.id===id)
           {
             todo.completed=!todo.completed
           }
           return todo
         })
         return {
           todos:updated
         }
       })
  }

  render() {
    const todoitem=this.state.todos.map(item=><TodoItem key={item.id} item={item}
      handleChange={this.handleChange.bind(this)}/>)
    return (
      <div className="todo-list">
        {todoitem}
      </div>
    )
  }
}

export default App
