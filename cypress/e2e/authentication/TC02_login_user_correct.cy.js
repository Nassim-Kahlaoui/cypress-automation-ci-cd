describe('Test Case 2: Login and Delete Account', () => {
  it.only('doit se connecter et supprimer le compte avec succès', () => {
    cy.loginEtSupprimerCompte();
  });
});
