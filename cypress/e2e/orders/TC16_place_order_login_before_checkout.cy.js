import { selecteurs } from '../../fixtures/selecteurs';
import { baseUrl } from '../../fixtures/baseUrl.json';
import { creerUserUnique } from '../../support/utils';

describe('Test Case 16: Place Order - Login before Checkout', () => {

  it('doit permettre à un utilisateur connecté de passer une commande avec succès', () => {
    cy.visit(baseUrl);
    selecteurs.logoHomePage().should('be.visible');
    // Utiliser ta commande personnalisée pour se connecter
    const user = creerUserUnique();
      cy.enregistrerUtilisateur(user);
    selecteurs.boutonLogout().should('be.visible').click();
    cy.seConnecter();
    // Ajouter produits au panier
    cy.ajouterProduitAvecQuantite(1, 1);
    // Aller au panier
    selecteurs.boutonCart().click();
    cy.url().should('include', '/view_cart');
    // Finaliser commande & supprimer compte
    cy.finaliserCommandeEtSupprimerCompte();
  });
});
