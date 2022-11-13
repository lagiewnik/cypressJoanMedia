context('POST PUT DELETE - API demo', () => {
    before(() => {
        cy.resetTodosDb()
    });
    
    const endpoint = '/todos'

    const todoObject = {
        "title": "Adding new todos",
        "completed": false,
        "id": 999
    }

    const todoObjectPatch = {
        "title": "Adding new todos",
        "completed": true,
        "id": 999
    }

    const addTodo = todoObject => {
        cy.request("POST", endpoint, todoObject)
    }

    const updateTodo = todoObjectPatch => {
        cy.request("PATCH", `${endpoint}/${todoObjectPatch.id}`, todoObjectPatch)
    }

    const deleteTodo = todoToDelete => {
        cy.request("DELETE", `${endpoint}/${todoToDelete.id}`, todoToDelete)
    }

    it('Add a todo', function(){
        addTodo(todoObject);

        cy.request('GET',`${endpoint}/${todoObject.id}`)
            .its('body')
            .should('deep.equal',todoObject)
    
    })

    it('Update a todo', () => {
        updateTodo(todoObjectPatch)

        cy.request('GET',`${endpoint}/${todoObjectPatch.id}`)
            .its('body')
            .should('deep.equal',todoObjectPatch)

    });

    it('Delete todo', () => {
        deleteTodo(todoObject);

        cy.request('GET',endpoint)
            .its('body')
            .should('have.length',2)

    });

});

