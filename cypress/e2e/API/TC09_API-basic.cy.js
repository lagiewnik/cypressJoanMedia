context('BASIC API demo', () => {
    const URL = 'http://localhost:3000/todos'

    beforeEach(function() {
        cy.request('GET',URL).as('todosResp')
    });
    it('Body lenght -test', function() {
        cy.get('@todosResp')
            .its('body')
            .should('have.length',2)
    });

    

    it('Request Status - Test', function() {
        cy.request(URL)
            .its('status')
            .should('eq',200)
    });

    it('Header contenttype- test', function() {
        cy.request(URL)
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')
            .and('include', 'charset=utf-8')
    });

    const todosItems=[
        {
          "title": "3bet learning",
          "completed": false,
          "id": "4081646897"
        },
        {
          "title": "fishing",
          "completed": false,
          "id": "0899480369"
        }
      ]
    it('Initial todos items - test', function() {
        cy.request(URL)
            .its('body')
            .should('deep.equal',todosItems)
    });

    it('JSON Schema validate- test', ()=>{
        cy.request(URL)
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

