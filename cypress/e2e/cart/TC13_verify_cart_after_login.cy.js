describe('Test Case 13: Vérifier quantité produit dans le panier', () => {
  it('doit afficher la bonne quantité après ajout', () => {
    cy.ajouterProduitAvecQuantite(4, 4); // Produit 0, quantité 4

  });
});
