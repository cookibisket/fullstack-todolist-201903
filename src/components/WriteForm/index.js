import React, { Component } from 'react'
import './WriteForm.scss'

class WriteForm extends Component {
  render () {
    return (
      <div className='write_form_area'>
        <label htmlFor='todoText' className='blind'>할 일</label>
        <input type='text' className='input_text' placeholder='할 일을 적어주세요' />
        <button type='button' className='btn'>등록</button>
      </div>
    )
  }
}
export default WriteForm