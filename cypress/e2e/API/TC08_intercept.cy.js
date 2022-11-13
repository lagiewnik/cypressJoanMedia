
describe("Intercept DEMO", ()=> {
    
    beforeEach(() => {
        cy.resetTodosDb()
    });
    it('Initial validation', () => {
       
        cy.visit("/")
        cy.get('.todo-list li')
            .should('have.length', 2)
            .and('contain','pizza cooking')
            .and('contain', 'bicycle repair')
    });

    it("Mocked API response", function(){
        cy.intercept('GET', '/todos', {fixture: 'intercept/todos.json'}).as('getTodos-Fixture')
        cy.visit("/");
        cy.get('.todo-list li')
            .should('have.length', 3)
            .and('contain','test')
            .and('contain', 'email')
            .and('contain', 'poker')
    });

    it('MOcked a ready todolist', () => {
        const stubSample = [
            {
                "title": "cypress",
                "completed":true,
                "id":2342345
            }
        ];
        cy.intercept('GET', '/todos',{
            body: stubSample
        }).as('getTodos-StubBody')

        cy.visit("/")
        cy.get('[data-cy="item"] label').should('have.css', 'text-decoration', 'line-through solid rgb(136, 136, 136)')

    });
})