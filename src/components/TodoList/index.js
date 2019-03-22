import React, { Component } from 'react'
import './TodoList.scss'

class TodoList extends Component {
  handleDelete = (id) => {
    // setState를 통해 todos 배열중 현재 배열요소를 삭제해야함.
    const { onDelete } = this.props
    onDelete(id)
  }
  
  render(){
    const { todos } = this.props
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
                  <div className='btn_area'>
                    <button type='button' className='btn' onClick={() => this.handleDelete(todo.id)}>
                      삭제
                    </button> {/* 화살표함수에 담으면 왜 해결되는거지? */}
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    )
  }
}
export default TodoList