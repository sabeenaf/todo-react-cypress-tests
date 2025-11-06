import { shoppingListPopulationHelper } from '../support/shoppingListHelper'

describe('Shopping List - Active Filters', () => {
  it('filters active items in list by selecting Active button', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')

    // Load data from fixture
    shoppingListPopulationHelper('shoppinglist.json')  

    
  
    // Mark first two items as completed
      cy.get('.todo-list li').eq(0).find('.toggle').check()

      cy.get('.todo-list li').eq(1).find('.toggle').check()

      // expected values
      const completedCount = 2

      cy.fixture('shoppinglist.json').then((items) => {
        const activeCount = items.length - completedCount


      //  Click Active filter
      cy.contains('Active').click()

      // Expect only active items visible
      cy.get('.todo-list li:visible')
        .should('have.length', activeCount)
        .and(($items) => {
          // No item should have completed class
          $items.each((i, el) => {
            expect(el).to.not.have.class('completed')
          })
        })
    })
  })
})
