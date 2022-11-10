context('Buttons action', {tags: '@regressionTag'},() => {
    beforeEach(()=> {
        cy.visit('https://demoqa.com/buttons');
    })

    it('Double click', ()=>{
        cy.get("#doubleClickBtn").dblclick();
        cy.get("#doubleClickMessage").should('have.text',"You have done a double click")
    })

    it('Right click', () => {
        cy.get('#rightClickBtn').rightclick();
        cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
    });
});