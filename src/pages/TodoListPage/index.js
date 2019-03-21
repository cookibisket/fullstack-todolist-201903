import React, { Component } from 'react'
import './TodoListPage.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WriteForm from '../../components/WriteForm'
import TodoList from '../../components/TodoList'

class TodoListPage extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className='content'>
          <WriteForm />
          <TodoList />
        </div>
        <Footer />
      </div>
    )
  }
}
export default TodoListPage