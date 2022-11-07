context('', () => {
    beforeEach(() => {
        cy.visit('https://saucedemo.com')
    });

    it('Cypress keyboard - slow', { keystrokeDelay: 300 }, () => {
        cy.get('#user-name').type("Demo 123");
    });

    it('Cypress keyboard - fastest', { keystrokeDelay: 0 }, () => {
        cy.get('#user-name').type("Demo 123");
    });
});