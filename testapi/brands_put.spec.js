describe('API 4 – PUT to /brandsList should fail', () => {
  it('should return 200 but with error message', () => {
    cy.request({
      method: 'put',
      url: 'https://automationexercise.com/api/productsList',
      failOnStatusCode: false, 
    }).then((res) => {
      expect(res.status).to.eq(200);

      const body = JSON.parse(res.body);

      expect(body).to.have.property('message');
      expect(body.message).to.eq('This request method is not supported.');
        expect(body).to.not.have.property('brands');
    });
  });
});
