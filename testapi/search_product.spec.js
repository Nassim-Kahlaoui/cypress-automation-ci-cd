describe('API 5 – Search product by name', () => {
  it('should return 200 and products array', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/searchProduct',
      form: true,
      body: {
        search_product: 'top'
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      const body = JSON.parse(res.body);
      expect(body).to.have.property('products');
      expect(body.products).to.be.an('array');
      expect(body.products.length).to.be.greaterThan(0);
    });
  });
});
