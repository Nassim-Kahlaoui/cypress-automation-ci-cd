import { creerUserUnique } from './../cypress/support/utils';

describe('API 13 – Update User Account', () => {
  it('should create then update the user account', () => {
    const user = creerUserUnique();
    // Step 1 – Create the user
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/createAccount',
      form: true,
      body: {
        name: user.name,
        email: user.email,
        password: user.password,
        title: 'Mr',
        birth_date: '15',
        birth_month: 'April',
        birth_year: '1990',
        firstname: 'Nassim',
        lastname: 'Kahlaoui',
        company: 'QADev',
        address1: 'Rue du Test',
        address2: 'Résidence QA',
        country: 'Morocco',
        zipcode: '12345',
        state: 'Casa',
        city: 'Casablanca',
        mobile_number: '0600000000',
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      const body = JSON.parse(res.body);
      expect(body.message).to.eq('User created!');

      // Step 2 – Update the user
      cy.request({
        method: 'PUT',
        url: 'https://automationexercise.com/api/updateAccount',
        form: true,
        body: {
          email: user.email,
          password: user.password,
          name: 'Nassimlaila',
          address1: 'markch adresse 456',
          mobile_number: '0666938510',
        },
      }).then((res) => {
        expect(res.status).to.eq(200);
        const body = JSON.parse(res.body);
        expect(body.message).to.eq('User updated!');
      });
    });
  });
});
