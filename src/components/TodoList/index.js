import React, { Component } from 'react'
import './TodoList.scss'

class TodoList extends Component {
  render(){
    return (
      <div className='todolist_area'>
        <ul className='list_todolist'>
          <li className='list_item'>
            <div className='title'>title1</div>
          </li>
        </ul>
      </div>
    )
  }
}
export default TodoList