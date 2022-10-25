describe("Fixtures demo", function() {
    

    beforeEach(function(){
        cy.visit('https://saucedemo.com')

        cy.fixture("saucedemo/sauceCredentials").then(credencials =>{
            this.credencials = credencials;
        })
    })

    it('Standard user login from fixtures', function() {
        cy.get('[data-test="username"]').type(this.credencials.standardUsername);
        cy.get('[data-test="password"]').type(this.credencials.systemPassword);
        cy.get('[data-test="login-button"]').click();

        cy.get('.title').should('contain.text','Products');
    });

    it('Incorrect  user login from fixtures', function() {
        cy.get('[data-test="username"]').type(this.credencials.dummyUsername);
        cy.get('[data-test="password"]').type(this.credencials.systemPassword);
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service');
    });
  
    it('Incorrect  password login from fixtures', function() {
        cy.get('[data-test="username"]').type(this.credencials.standardUsername);
        cy.get('[data-test="password"]').type(this.credencials.dummyPassword);
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service');
    });
    
    it('Incorrect  password login from fixtures', function() {
        cy.get('[data-test="username"]').type(this.credencials.lockedUsername);
        cy.get('[data-test="password"]').type(this.credencials.systemPassword);
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Sorry, this user has been locked out.');
    });
})