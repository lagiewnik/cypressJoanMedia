describe("Locators demo", ()=>{
    const username = 'standard_user'
    const password = 'secret_sauce'

    beforeEach(()=>{
        cy.visit('https://saucedemo.com')
    })
  
    it('should redirect to /inventory.html after login', () => {
        cy.get('#user-name').type(username);
        cy.get('[data-test="password"]').type(password);
        cy.get('[data-test="login-button"]').click();

        cy.location('pathname').should('eq','/inventory.html')

    });
})