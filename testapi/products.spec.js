describe('API 1 – Get All Products List', () => {
  it('should return 200 and a list of products', () => {
    cy.request('https://automationexercise.com/api/productsList').then((res) => {
      expect(res.status).to.eq(200);

      // ✅ Parse the string body to real JSON
      const body = JSON.parse(res.body);

      expect(body).to.have.property('products');
      expect(body.products).to.be.an('array');
      expect(body.products.length).to.be.greaterThan(0);
    });
  });
});
