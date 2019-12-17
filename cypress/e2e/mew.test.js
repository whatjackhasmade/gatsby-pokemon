describe("Can We Load The Pokemon Mewtwo?", function() {
  it("clicking pokemon Mewtwo takes you to Mewtwo page", function() {
    cy.visit("/")
    cy.contains("Mewtwo").click()
    cy.url().should("include", "/mewtwo")
  })
})
