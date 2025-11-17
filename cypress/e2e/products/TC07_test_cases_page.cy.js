import baseUel from '../../fixtures/baseUrl';

describe('Navigation vers la page Test Cases', () => {
  it('devrait lancer le navigateur, accéder à la page d\'accueil, cliquer sur Test Cases et vérifier la navigation', () => {
    // 1 et 2. Lancer le navigateur et aller sur la page d’accueil
    cy.visit(baseUel.baseUrl);

    // 3. Vérifier que la page d’accueil est visible (exemple : vérifier logo ou un élément clé visible)
    cy.get('header').should('be.visible'); // ou un autre sélecteur représentatif de la home page

    // 4. Cliquer sur le bouton 'Test Cases'
    cy.contains('Test Cases').should('be.visible').click();

    // 5. Vérifier que l’URL contient '/test_cases' (ou ce qui correspond à la page Test Cases)
    cy.url().should('include', '/test_cases');

    // Et aussi vérifier un élément spécifique de la page Test Cases
    cy.get('h2.title.text-center').should('contain.text', 'Test Cases');
  });
});