describe('Custom Commands example', function() {
    beforeEach(function() {
        cy.visit("https://saucedemo.com")
        cy.fixture("saucedemo/sauceCredentials").then(credentials =>{
            this.credentials = credentials
        })
    })

    it('Success Login', function() {
        cy.typeLogin(this.credentials.standardUsername, this.credentials.systemPassword)
        cy.get('.title').should('contain.text','Products')
        cy.url().should('eq', "https://www.saucedemo.com/inventory.html")
        cy.logout()
    });

    it("Failed Login", function() {
        cy.typeLogin(this.credentials.dummyUsername, this.credentials.systemPassword)
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service');
    })

})