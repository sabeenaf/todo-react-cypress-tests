import { shoppingListPopulationHelper } from '../support/shoppingListHelper'

describe('Shopping List - Add Items', () => {
  it('adds an item to the list', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    
    // Add Items from JSON to list
    
    shoppingListPopulationHelper('shoppinglist.json')      
  
    // Verify number of items matches fixture length
    cy.fixture('shoppinglist.json').then((items) => {
    cy.get('.todo-list li').should('have.length', items.length)
    })
    
  })  
    
  
})