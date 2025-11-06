export function shoppingListPopulationHelper(InputFile) {
      cy.fixture(InputFile).then((items) => {
      items.forEach((item) => {
      cy.get('.new-todo').type(`${item.name}{enter}`)
      })     
  })
}
