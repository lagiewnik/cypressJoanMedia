
// Dummy aplication
let add = (a, b)=> a+ b
let subtract = (a, b)=> a - b
let divide = (a, b)=> a / b
let multiply = (a, b)=> a * b


//Cypress tests
//Describe - Context - Group text
describe('Unit testing of our dummy application', () => {

    context('Math with POSITIVE numbers', () => {

        it('should add positive numvbers', ()=>{
            expect(add(14,3)).to.eq(17)
        })

        it('should substract positive numvbers', ()=>{
            expect(subtract(15,3)).to.eq(12)
        })

        it('should multiply positive numvbers', ()=>{
            expect(multiply(10,3)).to.eq(30)
        })

        it('should divide positive numvbers', ()=>{
            expect(divide(10,2)).to.eq(5)
        })
    })

    describe('Math with DECIMAL numbers', () => {

        it('should add DECIMAL numvbers', ()=>{
            expect(add(14.2,3.3)).to.eq(17.5)
        })

        it('should substract DECIMAL numvbers', ()=>{
            expect(subtract(15.2,3.1)).to.eq(12.1)
        })

        it('should multiply DECIMAL numvbers', ()=>{
            expect(multiply(10.1,3.0)).to.eq(30.3)
        })

        it('should divide DECIMAL numvbers', ()=>{
            expect(divide(10.4,2)).to.eq(5.2)
        })
    })

})