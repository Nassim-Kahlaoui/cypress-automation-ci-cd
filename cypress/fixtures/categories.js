
export const selecteurs = {
  sidebar: () => cy.get('.left-sidebar'),
  titreCategorie: (nom) => cy.contains('.panel-title a', nom),
  lienSousCategorie: (nom) => cy.contains('.panel-body a', nom),
  titrePageCategorie: () => cy.get('.features_items h2.title.text-center'),
};
