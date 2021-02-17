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

  submitReservation = (event, props) => {
    event.preventDefault()
    let newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({name: '', date: '', time: '', number: ''})
  }

  render() {
    return (
      <form>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={this.state.name}
          onChange={(event)=>this.handleChange(event)}
        />
        <input
          type='text'
          name='date'
          placeholder='Date (mm/dd)'
          value={this.state.date}
          onChange={(event)=>this.handleChange(event)}
        />
        <input
          type='text'
          name='time'
          placeholder='Time'
          value={this.state.time}
          onChange={(event)=>this.handleChange(event)}
        />
        <input
          type='number'
          name='number'
          placeholder='Number Of Guests'
          value={this.state.number}
          onChange={(event)=>this.handleChange(event)}
        />
        <button 
          onClick={(event)=>this.submitReservation(event)} 
          className='resButton'>Make Reservation
        </button>
      </form>
    )
  }
}

export default Form

