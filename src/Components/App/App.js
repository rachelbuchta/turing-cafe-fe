import React, { Component } from 'react';
import './App.css';
import { getReservations, updateData, deleteData } from '../../util'
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = () => {
    let allReservations
    getReservations()
      .then(response => response.json())
      .then(reservations => {
        allReservations = reservations.map(reservation => reservation)
        this.setState({reservations: allReservations})
      })
      .catch(error => {
        console.log('Reservations Request Failed', error)
      })
}

  addReservation = ({id, name, time, date, number}) => {
    let formattedNumber = Number(number)
    updateData(id, name, time, date, formattedNumber)
      .then(()=>this.getData())
  }

  cancelReservation = (id) => {
    deleteData(id)
      .then(()=>this.getData())
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          < Form addReservation={this.addReservation} />
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} cancelReservation={this.cancelReservation}/>
        </div>
      </div>
    )
  }
}
  

export default App;
