import React from 'react'
import './ReservationCard.css'

const ReservationCard = ({id, name, date, time, number}) => {




  return (
    <article className='resCard'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>{number}</p>
    </article>
  )
}





export default ReservationCard