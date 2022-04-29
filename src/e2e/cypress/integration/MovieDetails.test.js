describe('Movie details', () => {
  it('Renders Movie Details', () => {
    cy.visit('/');
    cy.findByText(/batman/i).should('exist');
    cy.findByText(/batman/i).click();
    cy.findByText(/storyline/i).should('exist');
    cy.findByText(/trailer/i).click();
    cy.get('body').click('bottomRight', { timeout: 10000 });
    cy.findByText(/add/i).click();
    cy.get('a').contains('watchlist').click();
  });
});
