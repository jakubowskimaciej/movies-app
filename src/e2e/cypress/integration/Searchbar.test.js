describe('Searchbar', () => {
  it('Searching for the movies', () => {
    cy.visit('/');
    cy.findByPlaceholderText(/search/i).should('exist');
    cy.findByPlaceholderText(/search/i)
      .click()
      .type('harry potter');
    cy.findByText(/philosopher's/i).click();
    cy.findByText(/storyline/i).should('exist');
  });
});
