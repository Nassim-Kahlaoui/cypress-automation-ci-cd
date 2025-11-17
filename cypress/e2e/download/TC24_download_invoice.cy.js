describe('Test Case 24: Download Invoice after purchase order', () => {
  it('doit permettre de télécharger la facture après la commande', () => {
    cy.telechargerFactureCommande();
  });
});
