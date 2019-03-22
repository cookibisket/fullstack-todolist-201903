import React from 'react'
import './TodoList.scss'

const TodoList = ({ todos }) => {
  return (
    <div className='todolist_area'>
      <ul className='list_todolist'>
        {todos.map(todo => {
          return (
            <li className='list_item' key={todo.id}>
              <div className='title'>{todo.text}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default TodoList