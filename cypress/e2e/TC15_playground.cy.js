context('Playground demo', () => {
    beforeEach(()=>{
        cy.visit('https://duckduckgo.com/');
    })

    it('Executable in chrome only', {browser:"chrome"},() => {
        cy.log(cy.url())
    });

    it('Executable in FF only', {browser:"firefox"},() => {
        cy.log(cy.url())
    });
});

context('Viewport demo', ()=>{
    beforeEach(()=>{
        cy.visit('https://duckduckgo.com/');
    })

    it("Viewport -#1 - ipad-mini portrait ", ()=> {
        cy.viewport('ipad-mini','portrait')
    })

    it("Viewport -#1 - samsung note 9-mini portrait ", ()=> {
        cy.viewport('samsung-note9','portrait')
    })

    it("Viewport -#1 - 480x960 portrait ", ()=> {
        cy.viewport(480, 960,'portrait')
    })
})