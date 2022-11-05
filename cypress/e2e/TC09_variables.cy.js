context('VAriables & aliases DEMO', () => {
    beforeEach(() =>{
        cy.visit('https://demoqa.com/modal-dialogs');
    })

    // it('Return variabless misconcept', () =>{
    //     const smallModalText = cy.get('#showSmallModal').text();
    //     cy.log(smallModalText)
    // })

    it('Closures & variables', () => {
        cy.get('#showSmallModal').then($modalButton=>{
            const smallModalText = $modalButton.text();
            cy.log(smallModalText)

            $modalButton.click();
            cy.get("#example-modal-sizes-title-sm").contains(smallModalText,{matchCase: false})
        })
    });

    it('Alias demo', function() {
        cy.get('#showSmallModal').invoke('text').as('invokedTextAlias')

        cy.get('#showSmallModal').then(modalButton => {
            const modalTExt = modalButton.text();
            cy.wrap(modalTExt).as('wrapText')
        })
    });

    it('SHARING CONTEXT by Alias to other it', function() {
        cy.log(this.invokedTextAlias);
        cy.log(this.wrapText);
    });
});