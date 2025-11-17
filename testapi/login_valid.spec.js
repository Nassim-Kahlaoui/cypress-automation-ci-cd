describe('API 7 – Login with valid credentials', () => {
  before(() => {
    cy.enregistrerUtilisateur(); 
  });

  it('should return 200 and "User exists" message', () => {
    cy.readFile('cypress/fixtures/userData.json').then((user) => {
      cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/verifyLogin',
        form: true,
        body: {
          email: user.email,
          password: user.password
        },
      }).then((res) => {
        expect(res.status).to.eq(200);

        const body = JSON.parse(res.body);
        expect(body).to.have.property('message');
        expect(body.message.trim()).to.eq('User exists!');
      });
    });
  });
});
