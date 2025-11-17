describe('API 10 – Login with invalid credentials', () => {
  it('should return 404 with error message', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/verifyLogin',
      failOnStatusCode: false,
        form: true,
        body: {
            email: 'nassim_kahlaoui@test.com',
            password: 'kahlaoui123',
        },
    }).then((res) => {
      expect(res.status).to.eq(200);
      const body = JSON.parse(res.body);
      expect(body).to.have.property('message');
        expect(body.message).to.eq('User not found!');
    });
  });
});
