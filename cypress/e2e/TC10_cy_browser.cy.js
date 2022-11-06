context('cypress Browser demo', () => {
   beforeEach(()=>{
        cy.visit('https://www.whatismybrowser.com/');
   }) 

   it('log web browser information', () => {
       cy.log(Cypress.browser.name);
       cy.log(Cypress.browser.family);
       cy.log(Cypress.browser.isHeaded);
       cy.log(Cypress.browser.isHeadless);
       cy.log(Cypress.browser.path);
       cy.log(Cypress.browser.version);
   });

   it('check proper browsername in header', () => {
        cy.get('#primary-browser-detection-backend').find('.string-major a')
            .contains(Cypress.browser.name,{matchCase: false})
            .and('have.contain',Cypress.browser.version.split(".",1))
        
   });
});