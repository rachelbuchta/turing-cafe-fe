import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)
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

  submitReservation = (event) => {
    event.preventDefault()
    let newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation)
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
          type='text'
          name='date'
          placeholder='Date (mm/dd)'
          value={this.state.date}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='time'
          placeholder='Time'
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
        <button onClick={(event)=>this.submitReservation(event)} className='resButton'>Make Reservation</button>
      </form>
    )
  }
}

export default Form

