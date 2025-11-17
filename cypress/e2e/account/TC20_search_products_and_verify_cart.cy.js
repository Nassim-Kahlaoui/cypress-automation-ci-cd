import { creerUserUnique } from '../../support/utils';
import { selecteurs } from '../../fixtures/selecteurs';
describe('Test Case 20: Search Products and Verify Cart After Login', () => {
  it('doit rechercher un produit, l’ajouter au panier, se connecter et vérifier que le panier est conservé', () => {
     const user = creerUserUnique();
    // Étapes 1 à 7 : Recherche et ajout au panier
    cy.rechercherProduit('Top');
    cy.enregistrerUtilisateur(user);
    cy.wait(1000); // Attendre que l'utilisateur soit enregistré
    selecteurs.boutonLogout().should('be.visible').click();
    cy.verifierPanierAvantEtApresConnexion(); 
  });
});
