export const selecteursBrands = {
 boutonProduits: () => cy.get('a[href="/products"]'),
 sidebarBrands: () => cy.get('.brands_products'),
 lienMarque: (nom) => cy.get('.brands-name a').contains(nom),
};
