import { selecteurs } from '../../fixtures/selecteurs';
import { baseUrl } from '../../fixtures/baseUrl.json';

describe('Test Case 15: Place Order - Register before Checkout', () => {
  it('doit inscrire un utilisateur avant le checkout puis finaliser la commande', () => {
    // Étapes 1 à 3 : Lancer et vérifier la home page
   cy.visit(baseUrl);
    selecteurs.logoHomePage().should('be.visible');
    // Étape 4 : Cliquer sur 'Signup / Login'
    selecteurs.lienConnexionInscription().click();
    // Étapes 5 à 6 : Créer un compte
    cy.enregistrerUtilisateur(); // ta commande existante gère déjà toute l’inscription
    // Étape 7 : Vérifier qu’on est connecté
    selecteurs.texteLoggedIn().should('contain.text', 'Logged in as');
    // Étape 8 : Ajouter produit au panier
    cy.ajouterProduitAvecQuantite(1, 1); // tu choisis l’index et la quantité que tu veux
    // Étape 9 : Aller au panier
    selecteurs.boutonCart().click();
    // Étape 10 : Vérifier que la page du panier est affichée
    cy.url().should('include', '/view_cart');
    // Étapes 11 à 18 → on utilise ta commande existante
    cy.finaliserCommandeEtSupprimerCompte();
  });
});
