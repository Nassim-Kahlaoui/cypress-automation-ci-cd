describe('Test Case 21: Add review on product', () => {
  it('doit permettre d’ajouter un avis sur un produit avec succès', () => {
    cy.ajouterAvisProduit(
      'Nassim Kahlaoui',
      'nassim11kahlaoui@gmail.com',
      'Excellent produit, je recommande vivement !'
    );
  });
});
