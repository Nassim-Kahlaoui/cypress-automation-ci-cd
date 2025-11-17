
import { creerUserUnique } from '../../support/utils';

describe('Test d’enregistrement seul', () => {
  it.only('Inscrire un utilisateur et stopper le test ici', () => {
     const user = creerUserUnique();
    cy.enregistrerUtilisateur(user);

    // ✅ On stoppe volontairement ici
    cy.log('✅ Fin du test ici');
    return; // <--- C’est ce qui empêche Cypress d’aller plus loin
  });
});
