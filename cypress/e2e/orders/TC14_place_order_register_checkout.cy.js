describe('Test Case 14: Place Order - Register while Checkout', () => {
  it('doit permettre à un utilisateur de s’inscrire pendant le checkout et de passer commande avec succès', () => {
    cy.ajouterProduitAvecQuantite(4, 4); 
    cy.contains('Proceed To Checkout').click();
    cy.contains('Register / Login').click();
    cy.enregistrerUtilisateur();
    
    // 👉 Finalisation + suppression
    cy.finaliserCommandeEtSupprimerCompte();
  });
});
