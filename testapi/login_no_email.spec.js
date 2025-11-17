describe('API 8 – Login without email parameter', () => {
  it('should return 400 and products array', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/verifyLogin',
      form: true,
        body: {
            password: '123456',
        },
    }).then((res) => {
      expect(res.status).to.eq(200);
      const body = JSON.parse(res.body);
      expect(body).to.have.property('message');
        expect(body.message).to.eq('Bad request, email or password parameter is missing in POST request.');
    });
  });
});
