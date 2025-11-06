
describe('Negative Test - empty spaces entry to list', () => {
  it('attempts to add empty spaces to list but fails', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')


    // Add one valid item first
    cy.get('.new-todo').type(`DummyVal{enter}`)
     
    // Try to add an empty input
    cy.get('.new-todo').type('   {enter}')

    // Verify the item count didn't increase
    cy.get('.todo-list li')
      .should('have.length', 1)
      
      // Verify footer note also shows 1 item on list
    cy.get('.todo-count')
      .should('contain.text', '1 item left!')
    })




  })
