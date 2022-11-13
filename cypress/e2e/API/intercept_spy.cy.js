context('API Intercept spy demo', () => {
    beforeEach(()=>{
        cy.resetTodosDb();
        cy.visit('/');
    })

    it('New todo by UI', function() {
        const todo = "Make some noise"
        cy.intercept('POST', '/todos').as('new-todo');
        cy.get('input[data-cy="input"]').type(todo +'{enter}');
        // cy.wait('@new-todo').should($response=>{
        //     cy.log($response)
        // })
        cy.wait('@new-todo').its('response.statusCode').should('eq',201);

        cy.get('@new-todo').should(newTodo => {
            expect(newTodo.response.body.title).to.eql(todo);
            const todoId = newTodo.response.body.id;
            cy.wrap(todoId).as('todoIdtoDelete')
        })
    });
   
    after(function() {
        cy.request('DELETE',`http://localhost:3000/todos/${this.todoIdtoDelete}` )
        cy.reload();
    });
});

