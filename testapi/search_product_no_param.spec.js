describe('API 6 – Search product by name', () => {
  it('should return 200 and products array', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/searchProduct',
      form: true,
    }).then((res) => {
      expect(res.status).to.eq(200);
      const body = JSON.parse(res.body);
      expect(body).to.have.property('message');
      expect(body.message).to.eq('Bad request, search_product parameter is missing in POST request.');
        expect(body).to.not.have.property('products');
      
    });
  });
});
