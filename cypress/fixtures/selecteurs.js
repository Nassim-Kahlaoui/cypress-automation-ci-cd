export const selecteurs = {
  // Partie inscription (déjà donnée)
  lienConnexionInscription: () => cy.get('a[href="/login"]'),
  champNomInscription: () => cy.get('input[data-qa="signup-name"]'),
  champEmailInscription: () => cy.get('input[data-qa="signup-email"]'),
  boutonInscription: () => cy.get('button[data-qa="signup-button"]'),

  boutonCiviliteMonsieur: () => cy.get('#id_gender1'),
  champMotDePasse: () => cy.get('#password'),
  selectJour: () => cy.get('#days'),
  selectMois: () => cy.get('#months'),
  selectAnnee: () => cy.get('#years'),

  champPrenom: () => cy.get('#first_name'),
  champNomFamille: () => cy.get('#last_name'),
  champAdresse: () => cy.get('#address1'),
  champEtat: () => cy.get('#state'),
  champVille: () => cy.get('#city'),
  champCodePostal: () => cy.get('#zipcode'),
  champTelephone: () => cy.get('#mobile_number'),

  boutonCreerCompte: () => cy.get('button[data-qa="create-account"]'),
  messageCompteCree: () => cy.contains('Account Created!'),
  boutonContinuer: () => cy.get('a[data-qa="continue-button"]'),
  // ==================== Authentification / Header ====================
  texteLoggedIn: () => cy.get('li a').contains('Logged in as'),
  boutonLogout: () => cy.get('a[href="/logout"]'),
  titreLogin: () => cy.get('h2').contains('Login to your account'),

  // Partie connexion/login
  champEmailConnexion: () => cy.get('input[data-qa="login-email"]'),
  champMotDePasseConnexion: () => cy.get('input[data-qa="login-password"]'),
  boutonConnexion: () => cy.get('button[data-qa="login-button"]'),

  // Message 'Logged in as username'
  messageLoggedInAs: (username) => cy.contains(`Logged in as ${username}`),

  // Bouton supprimer compte
  boutonSupprimerCompte: () => cy.contains('Delete Account'),

  // Message de confirmation suppression
  messageAccountDeleted: () => cy.contains('ACCOUNT DELETED!'),


  //==========================// Partie formulaire de contact===========================
  
boutonContactUs: () => cy.get('a[href="/contact_us"]'),
titreGetInTouch: () => cy.get('h2.title.text-center'),
champNomContact: () => cy.get('[data-qa="name"]'),
champEmailContact: () => cy.get('[data-qa="email"]'),
champSujet: () => cy.get('[data-qa="subject"]'),
champMessage: () => cy.get('[data-qa="message"]'),
champUploadFichier: () => cy.get('input[type="file"]'),
boutonEnvoyerContact: () => cy.get('[data-qa="submit-button"]'),
messageSuccesContact: () => cy.get('.status.alert.alert-success'),
boutonHome: () => cy.get('a.btn.btn-success'),


//==========================// Partie produits===========================
logoHomePage: () => cy.get('header .logo'),
  boutonProducts: () => cy.get('a[href="/products"]'),
  titreAllProducts: () => cy.get('h2.title.text-center'),
  listeProduits: () => cy.get('.features_items'),


  //============================chercher un produit===========================
  champRechercheProduit: () => cy.get('#search_product'),
  boutonRecherche: () => cy.get('#submit_search'),
  titreSearchedProducts: () => cy.get('h2.title.text-center'),
  listeResultatsProduits: () => cy.get('.features_items .product-image-wrapper'),


  //============================sebscription home ===========================
  texteSubscription: () => cy.get('footer').contains('SUBSCRIPTION'),
  champEmailSubscription: () => cy.get('#susbscribe_email'), 
  boutonEnvoyerSubscription: () => cy.get('#subscribe'),     
  messageSuccesSubscription: () => cy.get('.alert-success'), 
  // Sélecteur bouton Cart
   boutonCart : ()=> cy.contains('a[href="/view_cart"]', 'Cart'),
   footerSection: () => cy.get('footer'),

   // ==================== Page d'accueil / navigation ====================
boutonViewCart: () => cy.contains('View Cart'),
boutonContinuerAchats: () => cy.contains('Continue Shopping'),

// ==================== Produits ====================
listeProduits: () => cy.get('.features_items'),
overlayProduit: (index) => cy.get('.product-overlay').eq(index), // hover
boutonAddToCart: (index) => cy.get('.product-overlay').eq(index).find('.add-to-cart'),
boutonViewProduct: (index = 0) =>cy.get('.product-image-wrapper').eq(index).find('a[href*="/product_details"]'),
boutonSupprimerProduitParId: (idProduit) =>cy.get(`a.cart_quantity_delete[data-product-id="${idProduit}"]`),


champQuantiteProduit: () => cy.get('#quantity'),
boutonAjouterAuPanier: () => cy.contains('Add to cart'),


// ==================== Panier ====================
lignesPanier: () => cy.get('tr.cart_product'),

ligneProduitPanier: ()=> cy.get('table.table.table-condensed tbody tr'),
inputQuantiteDansPanier: () => cy.get('.cart_quantity input'),

prixProduit: () => cy.get('.cart_price'),
quantiteProduit: () => cy.get('.cart_quantity'),
totalProduit: () => cy.get('.cart_total'),


// ==================== Page Checkout / Paiement ====================
detailsAdresseLivraison: () => cy.get('#address_delivery'),
detailsAdresseFacturation: () => cy.get('#address_invoice'),
textareaCommentaire: () => cy.get('textarea[name="message"]'),
boutonDownloadInvoice: () => cy.get('.btn.btn-default.check_out'), // ← adapte ce sélecteur si besoin
inputNomCarte: () => cy.get('input[name="name_on_card"]'),
inputNumeroCarte: () => cy.get('input[name="card_number"]'),
inputCVC: () => cy.get('input[name="cvc"]'),
inputExpiration: () => cy.get('input[name="expiry_month"]'),
inputExpirationAnnee: () => cy.get('input[name="expiry_year"]'),
boutonPayEtConfirmer: () => cy.get('#submit'),
boutonPlaceOrder: () => cy.get(':nth-child(7) > .btn'),

boutonDeleteAccount: () => cy.contains('Delete Account'),


// 🧾 Sélecteurs liés au formulaire d’avis produit
inputNomReview: () => cy.get('#name'),
inputEmailReview: () => cy.get('#email'),
textareaReview: () => cy.get('#review'),
boutonSubmitReview: () => cy.get('#button-review'),
messageReviewSuccess: () => cy.get('.alert-success'),


//========================= Page de confirmation de commande ====================
  sliderAccueil: () => cy.get('#slider'), // ou autre élément du haut
  boutonScrollHaut: () => cy.get('#scrollUp'), // flèche en bas à droite
  titreSubscriptionFooter: () => cy.contains('Subscription'),
   boutonScrollUp: () => cy.get('#scrollUp'),


};

