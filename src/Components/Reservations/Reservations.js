import React from 'react'
import './Reservations.css'
import ReservationCard from '../ReservationCard/ReservationCard'

const Reservations = ({reservations, cancelReservation}) => {
console.log(reservations)
const reservationCard = reservations.map(res => {
  return (
  <ReservationCard 
    id={res.id}
    key={res.id}
    name={res.name}
    date={res.date}
    time={res.time}
    number={res.number}
    cancelReservation={cancelReservation}
  />
  )
})

  return (
    <section className='cardsContainer'>
      {reservationCard}
    </section>
  )
}


export default Reservations