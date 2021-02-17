beforeEach(() => {
  cy.visit('http://localhost:3000/')
})

describe('Turing Cafe', () => {
  it('Should be able to visit the page and title, form and section that includes all existing reservation cards', () => {
    cy.contains('Turing Cafe Reservations')
    cy.get('.resy-form').children('form')
    cy.get('.resy-container').children('.cardsContainer').children('.resCard')
  })

  it('Should be able to fill out a name in form input', () => {
    cy.get('input[name="name"]')
      .type('Rachel')
      .should('have.value', 'Rachel')
  })

    it('Should be able to fill out a date in form input', () => {
    cy.get('input[type="date"]')
      .includes('02/20/2021')
      .should('have.value', '02/20/2021')
  })

      it('Should be able to fill out a time in form input', () => {
      cy.get('input[type="time"]')
      .includes('02/20/2021')
      .should('have.value', '02/20/2021')
  })


      it.only('Should be able to fill out a number in form input', () => {
      cy.get('input[type="number"]')
      .type(3)
      .should('have.value', 3)
  })


      it('Should be able click Make Reservation button and see the new reservation added to all reservations section', () => {
    cy.get('input[name="name"]')
      .type('Rachel')
      .should('have.value', 'Rachel')
      .get('input[type="date"]')
      .includes('02/20/2021')
      .should('have.value', '02/20/2021')
      .get('input[type="time"]')
      .includes('02/20/2021')
      .should('have.value', '02/20/2021')
      .get('input[type="number"]')
      .type(3)
      .should('have.value', 3)
    cy.get('.resButton').click()
  })
})