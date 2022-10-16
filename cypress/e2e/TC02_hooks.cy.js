//Hooks are from mocha

/*
Order of execution:
-before - once executed
-beforeEach - before each test script like it
-tests
-afterEach - after each test script like it
-after - once executed
*/

describe('Hook demo', () => {
    before(()=>{
        cy.log('Before')
    })

    beforeEach(()=>{
        cy.log('BeforeEach')
    })
    it('TC #1', function(){
        console.log("TC #1")
    })

    it('TC #2', function(){
        console.log("TC #2")
    })

    it('TC #3', function(){
        console.log("TC #3")
    })

    after(()=>{
        cy.log('After')
    })

    afterEach(()=>{
        cy.log('AfterEach')
    })
})