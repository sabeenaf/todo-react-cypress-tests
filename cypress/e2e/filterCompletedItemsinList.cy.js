import { shoppingListPopulationHelper } from '../support/shoppingListHelper'

describe('Shopping List - Completed Filters', () => {
  it('filters completed items in list by selecting Active button', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')

    // Load data from fixture
    shoppingListPopulationHelper('shoppinglist.json')  

    
  
    // Mark first two items as completed
      cy.get('.todo-list li').eq(0).find('.toggle').check()

      cy.get('.todo-list li').eq(1).find('.toggle').check()

      // expected values
      const completedCount = 2;

      cy.fixture('shoppinglist.json').then((items) => {
        const activeCount = items.length - completedCount;

      //  Click Completed filter
      cy.contains('Completed').click();

      // Expect only completed items visible
      cy.get('.todo-list li:visible')
        .should('have.length', completedCount)
        .and(($items) => {
          expect($items[0]).to.have.class('completed');
        })

        })
    })
  })
