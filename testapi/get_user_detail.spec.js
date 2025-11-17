import { creerUserUnique } from './../cypress/support/utils';

describe('API 14 – Get User Detail by Email', () => {
    it('should create a user then retrieve its details', () => {
          const user = creerUserUnique();
    // 🔹 Étape 1 – Créer l’utilisateur
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/createAccount',
      form: true,
      body: {
        name: user.name,
        email: user.email,
        password: user.password,
        title: 'Mr',
        birth_date: '02',
        birth_month: 'February',
        birth_year: '2000',
        firstname: 'Laila',
        lastname: 'Chadli',
        company: 'TestCorp',
        address1: '2 Mars',
        address2: 'Immeuble B',
        country: 'Morocco',
        zipcode: '20000',
        state: 'Casa-Settat',
        city: 'Casablanca',
        mobile_number: '0600000000',
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      const body = JSON.parse(res.body);
      expect(body.message).to.eq('User created!');

      // 🔹 Étape 2 – Rechercher l’utilisateur par email
      cy.request({
        method: 'GET',
        url: `https://automationexercise.com/api/getUserDetailByEmail?email=${user.email}`,
      }).then((res) => {
        expect(res.status).to.eq(200);
        const body = JSON.parse(res.body);
        expect(body).to.have.property('user');
        expect(body.user).to.have.property('email', user.email);
        expect(body.user).to.have.property('name', user.name);
      });
    });
  });
});
