import React, { Component } from 'react'
import './WriteForm.scss'

class WriteForm extends Component {
  inputRef = React.createRef()

  handleSubmit = () => {
    const { onCreate } = this.props
    const text = this.inputRef.current.value
    if(text.trim() !== '') {
      onCreate(text)
      this.inputRef.current.value = ''
      this.inputRef.current.focus()
    } else {
      alert('할 일을 입력해주세요')
    }
  }

  handleKeyPress = (e) => {
    if (e.key ==='Enter') this.handleSubmit()
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
          onKeyPress={this.handleKeyPress}
        />
        <button type='button' className='btn' onClick={this.handleSubmit}>등록</button>
      </div>
    )
  }
}
export default WriteForm