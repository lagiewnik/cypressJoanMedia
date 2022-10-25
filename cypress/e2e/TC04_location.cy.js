describe("Location demo", ()=>{
    beforeEach(()=>{
        cy.visit('https://saucedemo.com')
    })

    it('shoul have title tag with sauce', ()=>{
        cy.title().should('eq', 'Swag Labs')
    })

    it('URL should eq', () => {
        cy.url().should("eq", "https://www.saucedemo.com/")
    });

    it('Should be HTTPS protokol', () => {
        cy.location('protocol').should('contains','https')
    });

    it('hostname should  be www.saucedemo.com', () => {
        cy.location('hostname').should('eq','www.saucedemo.com')
    });

    it('should redirect to /inventory.html after login', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.location('pathname').should('eq','/inventory.html')

    });
})