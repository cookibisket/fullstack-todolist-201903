import React, { Component } from 'react'
import './TodoListPage.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WriteForm from '../../components/WriteForm'
import TodoList from '../../components/TodoList'

// WriteForm에서 버튼을 눌렀을 때 인풋의 value값을 가져와서 TodoList에 뿌려주기

class TodoListPage extends Component {
  id = 0
  
  state = {
    todos: []
  }

  handleCreate = (text) => {
    const { todos } = this.state
    this.setState({
      todos: todos.concat({ id: this.id++, text: text })
    })
  }

  render () {
    const { todos } = this.state

    return (
      <div>
        <Header />
        <div className='content'>
          <WriteForm onCreate={this.handleCreate}/>
          <TodoList todos={todos} />
        </div>
        <Footer />
      </div>
    )
  }
}
export default TodoListPage