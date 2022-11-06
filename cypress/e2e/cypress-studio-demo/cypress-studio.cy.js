/* ==== Test Created with Cypress Studio ==== */
it('webtables-demo', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://demoqa.com/webtables');
  cy.get('#addNewRecordButton').click();
  cy.get('#firstName').clear('mi');
  cy.get('#firstName').type('mimi');
  cy.get('#lastName').clear();
  cy.get('#lastName').type('gogo');
  cy.get('#userEmail').clear();
  cy.get('#userEmail').type('test@mimi.pl');
  cy.get('#age').clear();
  cy.get('#age').type('33');
  cy.get('#salary').clear();
  cy.get('#salary').type('30988');
  cy.get('#department').clear();
  cy.get('#department').type('managment');
  cy.get('#submit').click();
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('#searchBox').clear('mi');
  cy.get('#searchBox').type('mimi');
  /* ==== End Cypress Studio ==== */
});