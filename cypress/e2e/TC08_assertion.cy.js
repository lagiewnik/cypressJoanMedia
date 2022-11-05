context('Assertion DEmo', () => {
    beforeEach(() => {
        cy.visit("https://demoqa.com/radio-button")
    })

    it('TDD Assertion', () => {
        cy.log("Length check");
        cy.get('input[type="radio"]').should('have.length', 3);

        cy.log("Class check for 3rd element");
        cy.get('input[type="radio"]').eq(2).should('have.class', "disabled");

        cy.log("Exist element verify");
        cy.get('.mt-3').should("not.exist");

        cy.log("Text element verify");
        cy.get('input[type="radio"]').eq(0).click({ force: true })
        cy.get('.mt-3')
            .should("have.text", "You have selected Yes")
            .and('contain.html', 'span')
            .and('not.contain', "TEST")

        cy.log("CSS color element verify");
        cy.get('.text-success').should('have.css', 'color', 'rgb(40, 167, 69)')
    });

    it.only('BDD Assertion', () => {
        cy.log("Length check + check class");
        cy.get('input[type="radio"]').should($element => {
            expect($element).have.length(3);
            expect($element).to.have.class("disabled")
        })

        cy.log("Text element verify");
        cy.get('input[type="radio"]').eq(0).click({ force: true })
        cy.get('.mt-3')
            .should(element => {
                expect(element).to.have.text("You have selected Yes");
                expect(element).contain.html('span');
                expect(element).not.contain("TTEST");
            })

        cy.log("CSS color element verify");
        cy.get('.text-success').should(element => {
            expect(element).to.have.css('color', 'rgb(40, 167, 69)');

        })
    });
});