export const selecteursRecommandes = {
  sectionRecommended: () => cy.contains('recommended items'),
  carrouselRecommande: () => cy.get('#recommended-item-carousel'),
  produitsRecommandesActifs: () => cy.get('#recommended-item-carousel .item.active'),
  boutonAjouterProduitRecommande: () =>cy.get('#recommended-item-carousel .item.active .add-to-cart'),
   
  
};
