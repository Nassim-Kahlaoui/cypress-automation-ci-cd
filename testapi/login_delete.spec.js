describe('API 9 – DELETE to /verifyLogin should fail', () => {
  it('should return 400 and products array', () => {
    cy.request({
      method: 'delete',
      url: 'https://automationexercise.com/api/verifyLogin',
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(200);
      const body = JSON.parse(res.body);
      expect(body).to.have.property('message');
        expect(body.message).to.eq('This request method is not supported.');
    });
  });
});
