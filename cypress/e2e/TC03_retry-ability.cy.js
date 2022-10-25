
describe('Retry-Ability Session', function(){
    beforeEach(function () {
        cy.visit("https://todomvc.com/examples/vue/");
    
        cy.get('.new-todo')
            .type("todo A{enter}")
            .type("todo B{enter}")
    })

    it('Should have 2 list elements', function(){
        cy.get('.todo-list li').should('have.length',2)
    })

})