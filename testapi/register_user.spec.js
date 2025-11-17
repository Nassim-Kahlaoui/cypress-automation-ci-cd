import { creerUserUnique } from './../cypress/support/utils';

describe('API 11 – Create/Register User Account', () => {
  it('should return 201 and confirmation message', () => {
    const user = creerUserUnique();

    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/createAccount',
      form: true,
      body: {
        name: user.name,
        email: user.email,
        password: user.password,
        title: 'Mr',
        birth_date: '10',
        birth_month: 'May',
        birth_year: '1997',
        firstname: 'Nassim',
        lastname: 'Kahlaoui',
        company: 'FreelanceDeveloper',
        address1: '122 rue sidi moman',
        address2: 'Appt 5 Résidence laila',
        country: 'Casablanca',
        zipcode: '10000',
        state: 'casablanca_settat',
        city: 'Casablanca',
        mobile_number: '0653226262',
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      const body = JSON.parse(res.body);
      expect(body).to.have.property('message');
      expect(body.message).to.eq('User created!');
    });
  });
});
