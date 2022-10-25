describe("Locators demo", ()=>{
    const username = 'standard_user'
    const password = 'secret_sauce'

    beforeEach(()=>{
        cy.visit('https://saucedemo.com')
    })
  
    it('should redirect to /inventory.html after login', () => {
        cy.get('#user-name').type(username);
        cy.get('input#password').type(password);
        cy.get('[data-test="login-button"]').click();

        cy.location('pathname').should('eq','/inventory.html')

    });

    it('EQ, FIRST, LAST method', () => {
        cy.get('input').first().type(username);
        cy.get('input').eq(1).type(password);
        cy.get('input').last().click();

    });

    it('FILTER Method', () => {
        cy.get('input').filter('[type="text"]').type(username);
        cy.get('input').filter('[type="password"]').type(password);
        cy.get('input').filter('[type="submit"]').click();

    });

    it('FIND method', () => {
        cy.get('form').find('input').eq(0).type(username);
        cy.get('form').find('input').eq(1).type(password);
        cy.get('form').find('input').eq(2).click();
    });

    it('PARENT Method', () => {
        cy.get('form').parent().should('have.class','login-box');
    });
})