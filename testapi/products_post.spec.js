describe('API 2 – POST to /productsList should fail', () => {
  it('should return 405 Method Not Allowed', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/productsList',
      failOnStatusCode: false, 
    }).then((res) => {
      expect(res.status).to.eq(200);

      const body = JSON.parse(res.body);

      expect(body).to.have.property('message');
      expect(body.message).to.eq('This request method is not supported.');
    });
  });
});
