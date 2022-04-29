describe('Person details', () => {
  it('Renders person info', () => {
    cy.visit('/');
    cy.findByText(/uncharted/i)
      .should('exist')
      .click();
    cy.findByText(/holland/i).click();
    cy.findByText(/biography/i).should('exist');
    cy.findByText(/appears/i).should('exist');
  });
});
