context('API Plugin Test', () => {

    before(() => {
        cy.resetTodosDb()
    });
    
    const endpoint = '/todos'

    const todoObject = {
        "title": "Adding new todos",
        "completed": false
    }
    it('Create a new todo by request', () => {
        cy.visit('/');
        cy.api('POST', endpoint, todoObject);
        cy.reload();
        cy.contains(todoObject.title)
    });
});