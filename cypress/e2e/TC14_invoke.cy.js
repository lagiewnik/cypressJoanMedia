context('Invoke demo', () => {
    beforeEach(()=>{
        cy.visit("https://demoqa.com/links")
    })

    it('Invoke to remove target attribute ', () => {
        //to avoid opening the link in a new tab/window (which cypress does not support)
        cy.get("#simpleLink").invoke('removeAttr','target')
        cy.get("#simpleLink").click()
    });


    it('Invoke to get target attribute ', () => {
        //to avoid opening the link in a new tab/window (which cypress does not support)
        cy.get("#simpleLink").invoke('attr','target').then(target=>{
            cy.log(target)
        })
        cy.get("#simpleLink").should('have.attr','target','_blank')
        cy.get("#simpleLink").invoke('removeAttr','target')

        
    });

    it('Invoke to get target attribute ', () => {
        
        cy.get("#simpleLink").invoke('text').then(text=>{
            cy.log(text)
        })       
    });
});