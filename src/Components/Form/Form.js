import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
        name: '',
        date: '',
        time: '',
        number: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }



  render() {
    return (
      <form>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type='date'
          name='date'
          value={this.state.date}
          onChange={this.handleChange}
        />
        <input
          type='time'
          name='time'
          value={this.state.time}
          onChange={this.handleChange}
        />
        <input
          type='number'
          name='number'
          placeholder='Number Of Guests'
          value={this.state.number}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default Form

