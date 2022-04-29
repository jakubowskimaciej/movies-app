describe('Discover view', () => {
  it('Renders discover view', () => {
    cy.visit('/');
    cy.findByText(/movies/i).should('exist');
    cy.findByText(/next page/i).click();
    cy.url().should('include', '/discover/popular?page=2');
    cy.findByText(/previous page/i).click();
    cy.url().should('include', '/discover/popular?page=1');
    cy.findByText(/upcoming/i).click();
    cy.url().should('include', '/discover/upcoming');
  });
});
