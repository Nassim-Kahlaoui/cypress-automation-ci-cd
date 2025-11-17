describe('Test Case 19  ', () => {
  it('doit afficher les marques sur la page Produits', () => {
    cy.ouvrirProduitsEtVerifierMarques('Polo');
  });
});
