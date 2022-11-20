let url:string = "https://www.saucedemo.com/inventory.html"

context('', () => {
    beforeEach(()=> {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Login withou custom command', () => {
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();

        cy.url().should('eq', url)
    });

    it('Login with custom command', () => {
        cy.typeLogin("standard_user", "secret_sauce")

        cy.url().should('eq', url)
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.title').should('be.visible');
        cy.get('.title').should('have.text', 'Products');
        /* ==== End Cypress Studio ==== */
    });
});