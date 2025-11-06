import { shoppingListPopulationHelper } from '../support/shoppingListHelper'

describe('Shopping List - Total Active/Pending Items', () => {
  it('checks UI footer counter when items on list are checked', () => {
    // test steps here
    cy.visit('https://todomvc.com/examples/react/dist/')

    // Load data from fixture
    shoppingListPopulationHelper('shoppinglist.json')  

    cy.fixture('shoppinglist.json').then((items) => {
      cy.get('.todo-list li').should('have.length', items.length)
      const completedCount = 2

    })

    // Check off two items on list
    cy.get('.todo-list li').eq(0).find('.toggle').check()
    cy.get('.todo-list li').eq(1).find('.toggle').check()

    // Validate footer count
    cy.get('.todo-count')
      .should('contain.text', `${items.length - 2} items left!`)
  
    

  })
})