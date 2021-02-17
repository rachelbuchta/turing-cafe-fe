import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../../util'
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
      .then(response => {
        return response.json()
      })
      .then(reservations => {
        allReservations = reservations.map(reservation => reservation)
        this.setState({
          reservations: allReservations
      })
      console.log(this.state.reservations)
      })
      .catch(error => {
        console.log('Reservations Request Failed', error)
      })
}

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          < Form />
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}
  

export default App;
