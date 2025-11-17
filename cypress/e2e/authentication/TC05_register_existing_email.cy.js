describe('Test Case 5: Register avec un email déjà existant', () => {
  it.only('doit afficher une erreur si email déjà utilisé', () => {
    cy.registerAvecEmailExistant();
  });
});
