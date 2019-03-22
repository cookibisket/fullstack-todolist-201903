import React from 'react'
import './TodoList.scss'

const TodoList = ({ todos }) => {
  return (
    <div className='todolist_area'>
      <ul className='list_todolist'>
        <li className='list_item'>
          <div className='title'>{todos}</div>
        </li>
      </ul>
    </div>
  )
}
export default TodoList