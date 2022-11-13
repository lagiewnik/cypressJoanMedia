describe('External API fron env config', () => {
    
    it('', () => {
        cy.request('GET',`${Cypress.env('externalAPI')}comments`)
        .then(response=>{
            cy.log(response)
        });
    cy.log(Cypress.env('externalAPI'));
    });
    
});