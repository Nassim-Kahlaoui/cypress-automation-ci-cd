import { creerUserUnique } from './../cypress/support/utils';

describe('API 12 – Delete User Account', () => {
 

  it('should create then delete the user account', () => {
     const user = creerUserUnique();
    // 🔹 Step 1: Create User
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
        birth_month: 'March',
        birth_year: '2001',
        firstname: 'Laila',
        lastname: 'Chadli',
        company: 'DevGirls',
        address1: 'Rue 2 Mars',
        address2: 'Appartement 2',
        country: 'Morocco',
        zipcode: '20000',
        state: 'Casablanca-Settat',
        city: 'Casablanca',
        mobile_number: '0684070858',
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      const body = JSON.parse(res.body);
      expect(body.message).to.eq('User created!');

      // 🔹 Step 2: Delete User
      cy.request({
        method: 'DELETE',
        url: 'https://automationexercise.com/api/deleteAccount',
        form: true,
        body: {
          email: user.email,
          password: user.password,
        },
      }).then((res) => {
        expect(res.status).to.eq(200);
        const body = JSON.parse(res.body);
        expect(body.message).to.eq('Account deleted!');
      });
    });
  });
});
