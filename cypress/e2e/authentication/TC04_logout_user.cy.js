
import { creerUserUnique } from '../../support/utils';
import { selecteurs } from '../../fixtures/selecteurs';
describe('Test Case 4: Logout User', () => {
  it.only('doit se connecter puis se déconnecter avec succès', () => {
    const user = creerUserUnique();
     cy.enregistrerUtilisateur();
     cy.wait(5000); // Attendre que l'utilisateur soit enregistré
     selecteurs.boutonLogout().should('be.visible').click();
     cy.wait(2000); // Attendre que la déconnexion soit effectuée
    cy.seConnecter(user); // Assurez-vous que l'utilisateur est connecté
  });
});
