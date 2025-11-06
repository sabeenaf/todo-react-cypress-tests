import { shoppingListPopulationHelper } from '../support/shoppingListHelper'

describe('Shopping List - Total Completed Items on List', () => {
  it('checks for completed item on list to validate checking items works on UI', () => {
    // test steps here
    cy.visit('https://todomvc.com/examples/react/dist/')

    // Load data from fixture
    shoppingListPopulationHelper('shoppinglist.json')  

    cy.fixture('shoppinglist.json').then((items) => {
      cy.get('.todo-list li').should('have.length', items.length)

    

    // Check off two items on list
    cy.get('.todo-list li').eq(0).find('.toggle').check()
    cy.get('.todo-list li').eq(1).find('.toggle').check()

    // Validate completed count from DOM (✔ icon checked)
    cy.get('.todo-list li.completed')
      .should('have.length', 2);  
    })

  })
})