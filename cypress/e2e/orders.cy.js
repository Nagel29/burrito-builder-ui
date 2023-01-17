describe('All Orders testing', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/orders', {
      method: 'GET',
      fixture: '../fixtures/orders.json'
    })
    cy.visit('http://localhost:3000/')
  })

  it('should display the title when user visits the page', () => {
      cy.get('header').should('contain', 'Burrito Builder')
  })

  it('should display existing orders when the user visits the page', () => {
    cy.get('.order').eq(0).children().should('contain', 'Pat')
      .and('contain', 'beans')
      .and('contain', 'lettuce')
      .and('contain', 'carnitas')
      .and('contain', 'queso fresco')
      .and('contain', 'jalapeno')
    cy.get('.order').eq(1).children().should('contain', 'Sam')
      .and('contain', 'steak')
      .and('contain', 'pico de gallo')
      .and('contain', 'lettuce')
      .and('contain', 'carnitas')
      .and('contain', 'queso fresco')
      .and('contain', 'jalapeno')
  })

  it('should display the form with proper inputs', () => {
    cy.get('form').should('exist')
    cy.get('input[name="name"').should('exist')
    cy.get('button[name="beans"').should('exist')
    cy.get('button[name="steak"').should('exist')
    cy.get('button[name="carnitas"').should('exist')
    cy.get('button[name="sofritas"').should('exist')
    cy.get('button[name="lettuce"').should('exist')
    cy.get('button[name="queso fresco"').should('exist')
    cy.get('button[name="pico de gallo"').should('exist')
    cy.get('button[name="hot sauce"').should('exist')
    cy.get('button[name="guacamole"').should('exist')
    cy.get('button[name="jalapenos"').should('exist')
    cy.get('button[name="cilantro"').should('exist')
    cy.get('button[name="sour cream"').should('exist')
  })

  it('input field should reflect the user\'s input', () => {
    cy.get('input[name="name"').type('Ryan').should('have.value', 'Ryan')
  })  
})