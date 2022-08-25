describe('Opening web page jira angular clone', () => {
    it('Visits the landing page', () => {
      cy.visit('https://jira.trungk18.com/')
    })
    it('verifies the project title is Angular Jira Clone', () => {
      cy.get('.pl-2 > .font-medium').contains("Angular Jira Clone");
    })
  })