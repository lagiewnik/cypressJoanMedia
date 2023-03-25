describe('Custom Commands example', function() {
    const allure = Cypress.Allure.reporter.getInterface()
    beforeEach(function() {
        cy.visit("https://saucedemo.com")
        cy.fixture("saucedemo/sauceCredentials").then(credentials =>{
            this.credentials = credentials
        })
        
    })

    it('Success Login', function() {
        allure.feature('Feature: Login Succesfull');
        allure.description("Scenario for successfull login");
        allure.descriptionHtml("Scenario description HTML: successful");
        cy.typeLogin(this.credentials.standardUsername, this.credentials.systemPassword)
        cy.get('.title').should('contain.text','Products')
        cy.url().should('eq', "https://www.saucedemo.com/inventory.html")
        cy.logout()
    });

    it("Failed Login", function() {
        allure.feature('Feature: Login Failed');
        allure.description("Scenario for failed login");
        allure.descriptionHtml("Scenario description HTML: failed");
        cy.typeLogin(this.credentials.dummyUsername, this.credentials.systemPassword)
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service');
    })

})