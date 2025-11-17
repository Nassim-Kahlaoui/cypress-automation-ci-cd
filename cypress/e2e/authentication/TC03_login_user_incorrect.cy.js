import { selecteurs } from '../../fixtures/selecteurs';
import baseUrl from '../../fixtures/baseUrl.json';
import userData from '../../fixtures/userData.json';


describe('Test Case: Login with incorrect email and password', () => {
  it.only('doit afficher un message d\'erreur pour email ou mot de passe incorrect', () => {
    // 1 & 2. Ouvrir le navigateur et naviguer vers l'url
    cy.visit(baseUrl.baseUrl);

    // 3. Vérifier que la page d'accueil est visible (exemple avec titre)
    cy.title().should('include', 'Automation Exercise');

    // 4. Cliquer sur "Signup / Login"
    selecteurs.lienConnexionInscription().should('be.visible').click();

    // 5. Vérifier que "Login to your account" est visible
    cy.contains('Login to your account').should('be.visible');

    // 6. Saisir un email et mot de passe incorrects
    selecteurs.champEmailConnexion().should('be.visible').type(userData.email);
    selecteurs.champMotDePasseConnexion().should('be.visible').type(userData.password);

    // 7. Cliquer sur le bouton login
    selecteurs.boutonConnexion().should('be.visible').click();

    // 8. Vérifier que le message d'erreur est visible
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });
});
