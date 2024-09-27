describe('My App', () => {
  it('displays the correct text', () => {
    cy.visit('/')
    cy.contains('Hello, World!')
  })
})