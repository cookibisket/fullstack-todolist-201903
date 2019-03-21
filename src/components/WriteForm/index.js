import React, { Component } from 'react'
import './WriteForm.scss'

class WriteForm extends Component {
  inputRef = React.createRef()

  handleSubmit = () => {
    const { onCreate } = this.props
    const text = this.inputRef.current.value
    onCreate(text)
  }

  render () {
    
    return (
      <div className='write_form_area'>
        <label htmlFor='todoText' className='blind'>할 일</label>
        <input 
          type='text' 
          className='input_text' 
          placeholder='할 일을 적어주세요' 
          ref={this.inputRef}
        />
        <button type='button' className='btn' onClick={this.handleSubmit}>등록</button>
      </div>
    )
  }
}
export default WriteForm