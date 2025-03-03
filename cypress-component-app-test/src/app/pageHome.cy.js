import React from 'react'
import Home from './page'

describe('<Home />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home name="EBAC_QE"/>)
    cy.get('#name').should('have.text', "Olá EBAC_QE")
  })
})