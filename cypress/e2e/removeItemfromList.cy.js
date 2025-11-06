import { shoppingListPopulationHelper } from '../support/shoppingListHelper'

describe('Shopping List - Remove Item', () => {
  it('remove an item from the list', () => {
    // test steps here
    cy.visit('https://todomvc.com/examples/react/dist/')

    // Load data from fixture
        // Load data from fixture
    shoppingListPopulationHelper('shoppinglist.json')  

      
    
    // Delete a specific item by clicking on the list on the App
    cy.get('.todo-list li')
      .contains('Milk')    // find the li with the text
      .parent()                           // get the li element itself
      .find('button.destroy')             // find delete button
      .click({ force: true });            // click it


    // Validate Item is removed from list
    cy.get('.todo-list li').should('not.contain', 'Milk');
    
    // Validate footer count
    cy.fixture('shoppinglist.json').then((items) => {
        cy.get('.todo-count')
          .should('contain.text', `${items.length - 1} items left!`)

  })
})

})
