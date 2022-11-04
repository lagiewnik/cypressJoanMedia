context('Read Write demo', () => {
    const fileName  = 'cypress/fixtures/read-write/accounts.json'
   
    it('Write an API response to a fixturefile', () => {
        cy.request("GET","http://localhost:3000/accounts")
            .then(response => {
                cy.log(response.body);
                cy.writeFile(fileName,response.body)
            })     
    });

    it('Adding more object to array response', () => {
        cy.request("GET","http://localhost:3000/todos")
            .its('body')
            .each($object => {
                cy.readFile(fileName).then(array=>{
                    array.push($object);
                    cy.writeFile(fileName,array)
                })
            })
    });
});