describe("Can We Load The Pokemon Lapras?", function() {
  it("clicking pokemon Lapras takes you to Lapras page", function() {
    cy.visit("/")
    cy.contains("Lapras").click()
    cy.url().should("include", "/lapras")
  })
})
