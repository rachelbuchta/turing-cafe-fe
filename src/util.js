export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
}

export const updateData = (id, name, time, date, number) => {
  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ id: id, name: name, time: time, date: date, number: number})
  })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        throw new Error('We apologize, we are having issues loading this page...Please try again later!')
      }
    })
}