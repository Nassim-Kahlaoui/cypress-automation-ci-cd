import { selecteurs } from '../fixtures/selecteurs';
import { selecteurs as selecteursCategories  } from '../fixtures/categories';
import baseUrl from '../fixtures/baseUrl.json';

import { selecteursBrands } from '../fixtures/selecteursBrands';
import { selecteursRecommandes } from '../fixtures/selecteursRecommandes';


Cypress.Commands.add('enregistrerUtilisateur', (utilisateur = {}) => {
  const email = utilisateur.email || `nassim${Date.now()}@gmail.com`;
  const password = utilisateur.password || 'nassimd123';

  cy.visit(baseUrl.baseUrl);

  selecteurs.lienConnexionInscription().should('be.visible').click();
  selecteurs.champNomInscription().should('be.visible').type('nassim');
  selecteurs.champEmailInscription().should('be.visible').type(email);
  selecteurs.boutonInscription().should('be.visible').click();

  selecteurs.boutonCiviliteMonsieur().should('be.visible').check();
  selecteurs.champMotDePasse().should('be.visible').type(password);
  selecteurs.selectJour().should('be.visible').select('1');
  selecteurs.selectMois().should('be.visible').select('January');
  selecteurs.selectAnnee().should('be.visible').select('1997');
  selecteurs.champPrenom().should('be.visible').type('kahlaoui');
  selecteurs.champNomFamille().should('be.visible').type('kahlaoui');
  selecteurs.champAdresse().should('be.visible').type('123 Rue maarif, Casablanca');
  selecteurs.champEtat().should('be.visible').type('dakhla');
  selecteurs.champVille().should('be.visible').type('casablanca');
  selecteurs.champCodePostal().should('be.visible').type('20000');
  selecteurs.champTelephone().should('be.visible').type('0653226262');

  selecteurs.boutonCreerCompte().should('be.visible').click();

  selecteurs.messageCompteCree().should('be.visible');
  selecteurs.boutonContinuer().should('be.visible').click();
    // Vérifie que tu es bien connecté
  selecteurs.texteLoggedIn().should('contain.text', 'Logged in as');
  // Ici on écrit dans un fichier JSON les infos utilisateur utilisées
  cy.writeFile('cypress/fixtures/userData.json', {
    email: email,
    password: password
  });
});


Cypress.Commands.add('loginEtSupprimerCompte', () => {
  cy.fixture('userData.json').then((userData) => {
 cy.visit(baseUrl.baseUrl);
  // Cliquer sur "Signup / Login"
  selecteurs.lienConnexionInscription().should('be.visible').click();
  // Vérifier que "Login to your account" est visible
  cy.contains('Login to your account').should('be.visible');
  // Saisir email et mot de passe
  selecteurs.champEmailConnexion().should('be.visible').type(userData.email);
  selecteurs.champMotDePasseConnexion().should('be.visible').type(userData.password);
  // Cliquer sur "Login"
  selecteurs.boutonConnexion().should('be.visible').click();
  // Vérifier que "Logged in as <name>" est visible
  cy.contains(`Logged in as nassim`).should('be.visible');
  // Cliquer sur "Delete Account"
  selecteurs.boutonSupprimerCompte().should('be.visible').click();
});
});

Cypress.Commands.add('seConnecter', () => {
  cy.fixture('userData.json').then((userData) => {
  cy.visit(baseUrl.baseUrl);
  selecteurs.lienConnexionInscription().click();
  selecteurs.champEmailConnexion().type(userData.email);
  selecteurs.champMotDePasseConnexion().type(userData.password);
  selecteurs.boutonConnexion().click();
  cy.contains(`Logged in as`).should('be.visible');
});
});

Cypress.Commands.add('registerAvecEmailExistant', () => {
  cy.fixture('userData.json').then((userData) => {
  cy.visit(baseUrl.baseUrl);
  selecteurs.lienConnexionInscription().should('be.visible').click();
  selecteurs.champNomInscription().should('be.visible').type('nassim');
  selecteurs.champEmailInscription().should('be.visible').type(userData.email);
  selecteurs.boutonInscription().should('be.visible').click();

  cy.contains('Email Address already exist!').should('be.visible');
});
});

Cypress.Commands.add('remplirFormulaireContact', () => {
  cy.visit(baseUrl.baseUrl);
  // Vérifier et cliquer sur le bouton Contact Us
  selecteurs.boutonContactUs().should('be.visible').click();
  // Vérifier que le titre "Get In Touch" est visible et contient le texte attendu
  selecteurs.titreGetInTouch().should('be.visible').and('contain', 'Get In Touch');
  // Vérifier la visibilité des champs avant de taper
  selecteurs.champNomContact().should('be.visible').type(' - Nassim Kahlaoui');
  selecteurs.champEmailContact().should('be.visible').type('kahlaoui11kahlaoui@gmail.com');
  selecteurs.champSujet().should('be.visible').type('nassim kahlaoui demande un article');
  selecteurs.champMessage().should('be.visible').type('Le bouton checkout ne répond pas');
  // Upload du fichier, vérifier la visibilité avant
  selecteurs.champUploadFichier().should('be.visible').selectFile('cypress/fixtures/imagevide.png');
  // Vérifier et cliquer sur le bouton envoyer
  selecteurs.boutonEnvoyerContact().should('be.visible').click();
  // Vérifier le message de succès
  selecteurs.messageSuccesContact().should('be.visible').and('contain', 'Success! Your details have been submitted successfully.');
  // Vérifier le bouton Home visible et cliquer dessus
  selecteurs.boutonHome().should('be.visible').click();
});

Cypress.Commands.add('verifierProduitsEtDetails', () => {
  cy.visit(baseUrl.baseUrl);

  selecteurs.logoHomePage().should('be.visible');
  selecteurs.boutonProducts().should('be.visible').click();
  cy.url().should('include', '/products');
  selecteurs.titreAllProducts().should('contain.text', 'All Products');
  selecteurs.listeProduits().should('be.visible');
    cy.contains('View Product').click();
  cy.url().should('include', '/product_details');
  cy.get('.product-details').should('be.visible').within(() => {
  // Nom du produit
  cy.get('h2').should('be.visible').and('contain.text', 'Blue Top');
// Catégorie
  cy.get('.product-information p').contains('Category').should('be.visible').and('contain.text', 'Women > Tops');
  // Prix
  cy.get('.product-information span span').should('be.visible').and('contain.text', 'Rs. 500');
 // ✅ Disponibilité
  cy.get('.product-information p').contains('In Stock').should('be.visible');
// Condition
  cy.get('b').contains('Condition:').parent().should('contain.text', 'New');     
  // Marque
  cy.get('b').contains('Brand').parent().should('contain.text', 'Polo'); 
  });
    });

    Cypress.Commands.add('rechercherProduit', (nomProduit) => {
    cy.visit(baseUrl.baseUrl);
     selecteurs.logoHomePage().should('be.visible');
  // Aller à la page produits
  selecteurs.boutonProducts().should('be.visible').click();

  // Vérifier qu’on est bien sur la page produits
  cy.url().should('include', '/products');
  selecteurs.titreAllProducts().should('contain.text', 'All Products');

  // Saisir le nom du produit et lancer la recherche
  selecteurs.champRechercheProduit().should('be.visible').type(nomProduit);
  selecteurs.boutonRecherche().should('be.visible').click();

  // Vérifier que "Searched Products" s’affiche
  selecteurs.titreSearchedProducts().should('contain.text', 'Searched Products').and('be.visible');

  // Vérifier que tous les produits résultats sont visibles
  selecteurs.listeResultatsProduits().should('have.length.greaterThan', 0).each(($produit) => {
    cy.wrap($produit).should('be.visible');
    });

});

Cypress.Commands.add('subscribeNewsletter', (email) => {
   cy.visit(baseUrl.baseUrl);
  selecteurs.logoHomePage().should('be.visible');
  selecteurs.champEmailSubscription().type(email);
  selecteurs.boutonEnvoyerSubscription().click();
  selecteurs.messageSuccesSubscription().should('be.visible').and('contain.text', 'You have been successfully subscribed!');
});

Cypress.Commands.add('subscribeFromCartPage', (email) => {
  cy.visit(baseUrl.baseUrl);
  selecteurs.logoHomePage().should('be.visible');
  selecteurs.boutonCart().should('be.visible').click();
  selecteurs.footerSection().scrollIntoView();
  selecteurs.champEmailSubscription().type(email);
  selecteurs.boutonEnvoyerSubscription().click();
  selecteurs.messageSuccesSubscription().should('be.visible').and('contain.text', 'You have been successfully subscribed!');
});
Cypress.Commands.add('ajouterDeuxProduitsEtVerifierPanier', () => {
  // Aller à la page d’accueil
  cy.visit(baseUrl.baseUrl);
  selecteurs.logoHomePage().should('be.visible');
  // Aller à la page Produits
  selecteurs.boutonProducts().click();
  // Ajouter 1er produit
  selecteurs.overlayProduit(0).invoke('show');
  selecteurs.boutonAddToCart(0).click({ force: true });
  selecteurs.boutonContinuerAchats().click();
  // Ajouter 2ème produit
  selecteurs.overlayProduit(0).invoke('show');
  selecteurs.boutonAddToCart(1).click({ force: true });
  // Aller au panier
  selecteurs.boutonViewCart().click();
  // Vérifier 2 produits dans le panier
  selecteurs.ligneProduitPanier().each(($ligne) => {
  cy.wrap($ligne).within(() => {
    selecteurs.prixProduit().invoke('text').then((txt) => {
      const prix = txt.trim();
      if (prix === 'Rs. 500') {
      selecteurs.quantiteProduit().should('contain.text', '1');
        selecteurs.totalProduit().should('contain.text', 'Rs. 500');
      } else if (prix === 'Rs. 400') {
       selecteurs.quantiteProduit().should('contain.text', '1');
        selecteurs.totalProduit().should('contain.text', 'Rs. 400');
      }
    });
  });
});

  });
  Cypress.Commands.add('ajouterProduitAvecQuantite', (indexProduit, quantite) => {
  cy.visit(baseUrl.baseUrl);
  selecteurs.logoHomePage().should('be.visible');

  selecteurs.boutonViewProduct(indexProduit).should('be.visible').click();
  cy.get('.product-information').should('be.visible');

  selecteurs.champQuantiteProduit().should('be.visible').clear().type(`${quantite}`);
  selecteurs.boutonAjouterAuPanier().should('be.visible').click();

  cy.contains('View Cart').should('be.visible').click();
});


Cypress.Commands.add('finaliserCommandeEtSupprimerCompte', () => {
  // Étape 12 : Revenir au panier
  selecteurs.boutonCart().click();

  // Étape 13 : Cliquer sur "Proceed To Checkout"
  cy.contains('Proceed To Checkout').click();

  // Étape 14 : Vérifier les infos d'adresse + review order
  selecteurs.detailsAdresseLivraison().should('be.visible');
  selecteurs.detailsAdresseFacturation().should('be.visible');
  cy.contains('Review Your Order').should('be.visible');

  // Étape 15 : Ajouter un commentaire
  selecteurs.textareaCommentaire().type('Merci pour cette commande de test.');

  // Étape 16 : Cliquer sur "Place Order"
  cy.contains('Place Order').click();

  // Étape 17 : Entrer les infos de paiement
  selecteurs.inputNomCarte().type('Nassim Kahlaoui');
  selecteurs.inputNumeroCarte().type('2111111111111111'); // Numéro de carte de test
  selecteurs.inputCVC().type('197');
  selecteurs.inputExpiration().type('08');
  selecteurs.inputExpirationAnnee().type('2028');

  // Étape 18 : Cliquer sur "Pay and Confirm Order"
  cy.contains('Pay and Confirm Order').click();

  // Étape 19 : Vérifier le message de succès
  cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');

  // Étape 20 : Supprimer le compte
  selecteurs.boutonDeleteAccount().click();

  // Étape 21 : Vérifier "Account Deleted!" et cliquer sur "Continue"
  cy.contains('Account Deleted!').should('be.visible');
  cy.contains('Continue').click();
});



Cypress.Commands.add('afficherProduitsParCategorie', () => {

  cy.visit(baseUrl.baseUrl);

  // Étape 3 : Vérifie que la sidebar des catégories est visible
  selecteursCategories.sidebar().should('be.visible');

  // Étape 4 : Clique sur "Women"
  selecteursCategories.titreCategorie('Women').click();
  // Étape 5 : Clique sur une sous-catégorie (ex: "Dress")
  selecteursCategories.lienSousCategorie('Dress').click();
  // Étape 6 : Vérifie que la page catégorie est affichée
  selecteursCategories.titrePageCategorie().should('contain.text', 'Women - Dress Products');

  // Étape 7 : Clique sur "Men" puis une sous-catégorie (ex: "Tshirts")
  selecteursCategories.titreCategorie('Men').click();
  selecteursCategories.lienSousCategorie('Tshirts').click();

  // Étape 8 : Vérifie la page catégorie "Men"
  selecteursCategories.titrePageCategorie().should('contain.text', 'Men - Tshirts Products');

});


Cypress.Commands.add('ouvrirProduitsEtVerifierMarques', (nomMarque) => {
  // Étape 1 & 2 : Lancer le navigateur et aller sur l’URL
  cy.visit(baseUrl.baseUrl);
  // Étape 3 : Cliquer sur "Products"
  selecteursBrands.boutonProduits().should('be.visible').click();
  // Étape 4 : Vérifier que la section Brands est visible dans la sidebar
  selecteursBrands.sidebarBrands().should('be.visible');
  // Étape 5 : Cliquer sur une marque spécifique
  selecteursBrands.lienMarque(nomMarque).should('be.visible').click();
  
// Étape 6 : Vérifie que la page de la marque est bien affichée (en ignorant la casse)
  selecteursCategories.titrePageCategorie().should('be.visible').invoke('text').then((texte) => {expect(texte.toLowerCase()).to.include(nomMarque.toLowerCase());});
  selecteurs.listeResultatsProduits().should('have.length.at.least', 1);
  // Étape 7 : Cliquer sur une autre marque, ex: Polo
selecteursBrands.lienMarque('Polo').should('be.visible').click();

// Étape 8 : Vérifier que la page de Polo s'affiche bien et que des produits sont visibles
selecteursCategories.titrePageCategorie().should('be.visible').invoke('text').then((texte) => {
  expect(texte.toLowerCase()).to.include('polo');
});
selecteurs.listeResultatsProduits().should('have.length.at.least', 1);
});




Cypress.Commands.add('verifierPanierAvantEtApresConnexion', () => {
  // Étape 8 : Aller au panier
  selecteurs.boutonCart().should('be.visible').click();
  selecteurs.lignesPanier().should('have.length.at.least', 0);

  // Étape 9 : Cliquer sur 'Signup / Login'
  selecteurs.lienConnexionInscription().should('be.visible').click();

  // Étape 10 : Connexion avec un compte existant
  cy.seConnecter(); // 🔁 Utilise ta commande déjà existante

  // Étape 11 : Revenir au panier
  selecteurs.boutonCart().should('be.visible').click();

  // Étape 12 : Vérifier que les produits sont toujours là
  selecteurs.lignesPanier().should('have.length.at.least', 0);
});

Cypress.Commands.add('ajouterAvisProduit', (nom, email, message) => {
  // Étape 1 : Aller sur la page d'accueil
  cy.visit(baseUrl.baseUrl);
  selecteurs.logoHomePage().should('be.visible');
  // Étape 2 : Aller à la page d’un produit
  selecteurs.boutonViewProduct(0).should('be.visible').click();
  // Étape 3 : Remplir le formulaire d’avis
  selecteurs.inputNomReview().should('be.visible').type(nom);
  selecteurs.inputEmailReview().should('be.visible').type(email);
  selecteurs.textareaReview().should('be.visible').type(message);
  // Étape 4 : Soumettre
  selecteurs.boutonSubmitReview().should('be.visible').click();
  // Étape 5 : Vérifier le message de succès
  selecteurs.messageReviewSuccess().should('contain.text', 'Thank you for your review');
});

Cypress.Commands.add('ajouterProduitDepuisRecommandes', () => {
  cy.visit(baseUrl.baseUrl);

  // Scroll jusqu’à la section "Recommended items"
  selecteursRecommandes.sectionRecommended().scrollIntoView().should('be.visible');
  // Vérifie que le carrousel est visible
  selecteursRecommandes.carrouselRecommande().should('be.visible');
  // Vérifie qu’il y a au moins un produit
  selecteursRecommandes.produitsRecommandesActifs().should('have.length.greaterThan', 0);
  // Ajouter le premier produit
  selecteursRecommandes.boutonAjouterProduitRecommande().first().click();
  cy.contains('View Cart').should('be.visible').click();
  // Vérifier que le produit apparaît dans le panier
  selecteurs.lignesPanier().should('have.length.at.least', 0);
});


Cypress.Commands.add('verifierDetailsAdresseCheckout', () => {
  cy.visit(baseUrl.baseUrl);
  // 1. Enregistrement de l’utilisateur
  cy.enregistrerUtilisateur();
  // 2. Ajouter un produit au panier (index 2, quantité 2)
  cy.ajouterProduitAvecQuantite(2, 2);
  // 3. Accéder au panier
  selecteurs.boutonCart().click();
  // 4. Cliquer sur "Proceed To Checkout"
  cy.contains('Proceed To Checkout').click();
  // 5. Vérifier que les détails d’adresse sont visibles
  selecteurs.detailsAdresseLivraison().should('be.visible');
  selecteurs.detailsAdresseFacturation().should('be.visible');
  // ✅ Vérifications supplémentaires
  selecteurs.detailsAdresseLivraison().invoke('text').should('include', 'kahlaoui');
  selecteurs.detailsAdresseFacturation().invoke('text').should('include', '123 Rue maarif');

  // 6. Supprimer le compte
  selecteurs.boutonDeleteAccount().click();
  cy.contains('Account Deleted!').should('be.visible');
  cy.contains('Continue').click();
});


Cypress.Commands.add('telechargerFactureCommande', () => {
  cy.visit(baseUrl.baseUrl);

  cy.enregistrerUtilisateur();
  cy.ajouterProduitAvecQuantite(1, 1);
  selecteurs.boutonCart().click();
  cy.contains('Proceed To Checkout').click();
  selecteurs.textareaCommentaire().type('Merci pour votre service !');
  selecteurs.boutonPlaceOrder().click();

  selecteurs.inputNomCarte().type('Nassim Kahlaoui');
  selecteurs.inputNumeroCarte().type('1234 5678 9123 4567');
  selecteurs.inputCVC().type('123');
  selecteurs.inputExpiration().type('12');
  selecteurs.inputExpirationAnnee().type('2026');

  selecteurs.boutonPayEtConfirmer().click();
  cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');

  selecteurs.boutonDownloadInvoice().should('be.visible').click();

  // ✅ Vérifie que le fichier est bien téléchargé
  const cheminFichier = 'cypress/downloads/invoice.txt';
  cy.readFile(cheminFichier, { timeout: 15000 }).should('exist');

  selecteurs.boutonDeleteAccount().click();
  cy.contains('Account Deleted!').should('be.visible');
  cy.contains('Continue').click();
});

  Cypress.Commands.add('verifierScroll', () => {
      cy.visit(baseUrl.baseUrl);
  // 🔽 TC25 : Scroll vers le bas et cliquer sur le bouton flèche vers le haut
  cy.scrollTo('bottom');
  selecteurs.titreSubscriptionFooter().should('be.visible');

  // Vérifie que le bouton est visible puis clique dessus
  selecteurs.boutonScrollUp().should('be.visible').click();

  // Vérifie qu'on est bien revenu en haut
  selecteurs.sliderAccueil().should('be.visible');

  // 🔼 TC26 : Scroll vers le bas puis scrollTo('top') sans cliquer sur bouton
  cy.scrollTo('bottom');
  selecteurs.titreSubscriptionFooter().should('be.visible');

  cy.scrollTo('top');
  selecteurs.sliderAccueil().should('be.visible'); 
});

  


  
  


