import React from 'react'
import './ReservationCard.css'

const ReservationCard = ({id, name, date, time, number, cancelReservation}) => {

  return (
    <article className='resCard'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>{number}</p>
      <button onClick={()=>cancelReservation(id)}>Cancel</button>
    </article>
  )
}





export default ReservationCard