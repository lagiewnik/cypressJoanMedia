describe("Test isolation", () => {
  //We have to turn on test-isolation in config file
  it("go to google", () => {
    cy.visit("https://google.pl");
  });

  it("Search in google depend on first test", () => {
    cy.get(".gLFyf").type("feeder fishing{enter}");
  });
});
