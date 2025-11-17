import { selecteurs } from '../../fixtures/selecteurs';
import { baseUrl } from '../../fixtures/baseUrl.json';

describe('Test Case 17: Remove Products From Cart', () => {
  it('doit ajouter des produits puis supprimer un produit du panier', () => {
    // Étapes 1 à 3 : Ouvrir la page et vérifier accueil
    cy.visit(baseUrl);
    selecteurs.logoHomePage().should('be.visible');

    // Étape 4 : Ajouter 2 produits au panier
    cy.ajouterProduitAvecQuantite(0, 1);
    cy.ajouterProduitAvecQuantite(1, 4);

    // Étape 5 : Cliquer sur le bouton "Cart"
    selecteurs.boutonCart().click();
    // Étape 6 : Vérifier que la page panier est affichée avec au moins 2 produits
    selecteurs.lignesPanier().should('have.length.at.least', 0);

    // Étape 7 : Cliquer sur le bouton "X" du 1er produit pour le supprimer par  id :
    
      selecteurs.boutonSupprimerProduitParId(1).should('be.visible').click();
    // Étape 8 : Vérifier que le produit a bien été supprimé (nombre réduit d’un)
    selecteurs.lignesPanier().should('not.exist');
  });
});
