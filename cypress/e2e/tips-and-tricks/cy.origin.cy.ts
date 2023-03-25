describe("Origin problem", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit("https://demoqa.com/login");
    cy.get("#userName").should("have.class", "form-control");
  });
  it("other origin", () => {
    cy.get("#userName").should("have.class", "form-control");
    cy.visit("https://google.com");
    cy.get("#W0wltc").click();
    cy.get(".gLFyf").type("feeder fishing{enter}");
  });
});
