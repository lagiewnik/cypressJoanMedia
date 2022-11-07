context('cypress dom demo', () => {
   beforeEach(()=>{
        cy.visit('https://demoqa.com/accordian');
   }) 

   it('IsVisible demo', () => {
       cy.get('.collapse').eq(6).then($element => {
            cy.log(`Collapse Content as soon as I load the website: ${Cypress.dom.isVisible($element)}`)    
        
   });

       cy.get('#section1Heading').click();
       cy.get('.collapse').eq(6).then($element => {
            cy.log(`Collapse Content as soon as I click on the card: ${Cypress.dom.isVisible($element)}`)    
    
    });



   });

});