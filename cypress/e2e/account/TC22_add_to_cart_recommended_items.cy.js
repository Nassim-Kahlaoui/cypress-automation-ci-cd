import { selecteurs } from '../../fixtures/selecteurs';

describe('Test Case 22: Add to cart from Recommended items', () => {
  it('doit ajouter un produit recommandé au panier avec succès', () => {
    // Étape 3 : Scroller vers le bas jusqu’à la section Recommended Items
    cy.ajouterProduitDepuisRecommandes();
    
  });
});
