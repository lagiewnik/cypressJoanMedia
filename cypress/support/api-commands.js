Cypress.Commands.add('resetTodosDb', ()=>{
    cy.fixture('intercept/todosInit.json').then(body=> {
        cy.request('POST', '/reset',  body)
    });
});