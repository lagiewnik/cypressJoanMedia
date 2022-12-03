context('Task demo', () => {
    it('Cy task', () => {
        cy.task('myLog',"This will be output in the terminal").then(msg=>{
            cy.log("log inside scenario: "+ msg)
        })
    });

    it('Counting number of files in folder', () => {
        cy.task('countFiles', 'cypress/e2e').then(count=>{
            cy.log(`number of files in a folder is: ${count}`)
        })
    });

    


});

context('Href visit', () => {
    it('captures href', () => {
      cy.visit('https://example.com/')
      cy.get('a')
        .invoke('attr', 'href')
        .then((href) => {
          // href is not same-origin as current url
          // like https://www.anotherwebapp.com
          cy.task('setHref', href)
        })
    })
  
    it('visit href', () => {
      cy.task('getHref').then((href) => {
        // visit non same-origin url https://www.anotherwebapp.com
        cy.visit(href);
      })
    })
  })