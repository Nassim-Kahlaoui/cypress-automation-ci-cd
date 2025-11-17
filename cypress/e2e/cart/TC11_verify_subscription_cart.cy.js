describe('Test Case 11: Verify Subscription in Cart page', () => {
  it('doit s’abonner avec succès via le footer de la page Cart', () => {
    // Ouvre la page d’accueil, clique sur Cart, scroll jusqu’au footer et fait l’abonnement
    cy.subscribeFromCartPage('nassim13kahlaoui@gmail.com');
  });
});
