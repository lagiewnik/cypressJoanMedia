context('Read Write demo', () => {
    beforeEach(() => {
        cy.resetTodosDb()
    });
    
    const fileName  = 'cypress/fixtures/read-write/accounts.json'
   
    it('Write an API response to a fixturefile', () => {
        cy.request("GET","/accounts")
            .then(response => {
                cy.log(response.body);
                cy.writeFile(fileName,response.body)
            })     
    });

    it('Adding more object to array response', () => {
        cy.request("GET","/todos")
            .its('body')
            .each($object => {
                cy.readFile(fileName).then(array=>{
                    array.push($object);
                    cy.writeFile(fileName,array)
                })
            })
    });
});