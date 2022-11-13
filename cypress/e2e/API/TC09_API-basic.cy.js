context('BASIC API demo', () => {
   
    const urlTodos = "/todos";

    beforeEach(function() {
        cy.resetTodosDb()
        cy.request('GET',urlTodos).as('todosResp')
    });
    it('Body lenght -test', function() {
        cy.get('@todosResp')
            .its('body')
            .should('have.length',2)
    });

    

    it('Request Status - Test', function() {
        cy.request(urlTodos)
            .its('status')
            .should('eq',200)
    });

    it('Header contenttype- test', function() {
        cy.request(urlTodos)
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')
            .and('include', 'charset=utf-8')
    });

    const todosItems=[
        {
            "title": "pizza cooking",
            "completed": false,
            "id": "4081646897"
        },
        {
            "title": "bicycle repair",
            "completed": false,
            "id": "8257640358"
        }
    ]
    it('Initial todos items - test', function() {
        cy.request(urlTodos)
            .its('body')
            .should('deep.equal',todosItems)
    });

    it('JSON Schema validate- test', ()=>{
        cy.request(urlTodos)
            .its('body')
            .each(value=>{
                expect(value).to.have.all.keys('title','completed','id')
            })
    });

    it('Response validation by alias and expect-test ', function() {
        cy.get('@todosResp').should(response=>{
            expect(response.body).to.have.length(2),
            expect(response).to.have.property('headers'),
            expect(response.duration).lt(100)
        });
    });

});

