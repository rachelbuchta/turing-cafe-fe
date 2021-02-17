import React from 'react'
import './ReservationCard.css'

const ReservationCard = ({id, name, date, time, number, cancelReservation}) => {

  return (
    <article className='resCard'>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button className='cancelButton' onClick={()=>cancelReservation(id)}>Cancel</button>
    </article>
  )
}





export default ReservationCard