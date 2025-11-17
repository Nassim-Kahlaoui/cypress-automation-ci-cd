describe('API 3 – Get All brands List', () => {
  it('should return 200 and a list of brands', () => {
    cy.request('https://automationexercise.com/api/brandsList').then((res) => {
      expect(res.status).to.eq(200);

      // ✅ Parse the string body to real JSON
      const body = JSON.parse(res.body);

      expect(body).to.have.property('brands');
      expect(body.brands).to.be.an('array');
      expect(body.brands.length).to.be.greaterThan(0);
    });
  });
});
