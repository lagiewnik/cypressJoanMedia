describe("Fixtures demo", function() {
    

    beforeEach(function(){
        cy.visit('https://saucedemo.com')

        cy.fixture("saucedemo/sauceCredentials").then(credentials =>{
            this.credentials = credentials;
        })
    })

    it('Standard user login from fixtures', function() {
        cy.get('[data-test="username"]').type(this.credentials.standardUsername);
        cy.get('[data-test="password"]').type(this.credentials.systemPassword);
        cy.get('[data-test="login-button"]').click();

        cy.get('.title').should('contain.text','Products');
    });

    it('Incorrect  user login from fixtures', function() {
        cy.get('[data-test="username"]').type(this.credentials.dummyUsername);
        cy.get('[data-test="password"]').type(this.credentials.systemPassword);
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service');
    });
  
    it('Incorrect  password login from fixtures', function() {
        cy.get('[data-test="username"]').type(this.credentials.standardUsername);
        cy.get('[data-test="password"]').type(this.credentials.dummyPassword);
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service');
    });
    
    it('Incorrect  password login from fixtures', function() {
        cy.get('[data-test="username"]').type(this.credentials.lockedUsername);
        cy.get('[data-test="password"]').type(this.credentials.systemPassword);
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Sorry, this user has been locked out.');
    });
})