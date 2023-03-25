describe("Disable logs for request", () => {
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("https://demoqa.com/login");
  });

  it("Login with logs", () => {
    cy.wait(10000);
  });
});
