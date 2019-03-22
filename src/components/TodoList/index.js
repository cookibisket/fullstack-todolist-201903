import React from 'react'
import './TodoList.scss'

const TodoList = ({ todos }) => {
  return (
    <div className='todolist_area'>
      {todos.length === 0 ? (
        <div className="nodata_area">등록된 할 일이 없습니다.</div>
      ) : (
        <ul className='list_todolist'>
          {todos.map(todo => {
            return (
              <li className='list_item' key={todo.id}>
                <div className='title'>{todo.text}</div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
export default TodoList