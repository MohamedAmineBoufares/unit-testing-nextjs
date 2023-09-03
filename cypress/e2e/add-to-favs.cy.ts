describe("Add to favs", () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 1080p monitor
    cy.viewport(1920, 1080);

    // Start from the index page
    cy.visit("http://localhost:3000");
  });

  it("Add 2 items to favs", () => {
    // login
    cy.get('[data-cy="email-input"]').type("john.doe@email.com");
    cy.get('[data-cy="password-input"]').type("Some$trongp@ssword1");

    cy.get('[data-cy="sign-in-button"]').click();

    // The new url should include "/marketplace"
    cy.url().should("include", "/marketplace");

    // Get the navbar links and check if the marketplace link is active
    cy.get('[data-cy="navbar-link-Marketplace"]')
      .contains("Marketplace")
      .should("class", "text-yellow-300");
    cy.get('[data-cy="navbar-link-Features"]').contains("Features");
    cy.get('[data-cy="navbar-link-Company"]').contains("Company");

    // Get the badge and check if it is yellow and contains 0 items
    cy.get('[data-cy="badge"]').should("class", "bg-yellow-300");
    cy.get('[data-cy="favs-count"]').contains("0");

    // Get the first item and click on the image to show the price
    cy.get('[data-cy="img-btn-Headphones"]').click();
    cy.get('[data-cy="price-container-Headphones"]').contains("$ 100");

    // Hide the price
    cy.get('[data-cy="img-btn-Headphones"]').click();
    cy.get('[data-cy="price-container-Headphones"]').should("not.exist");

    // Add the Headphones, Sneakers and the PS5 to favs
    cy.get('[data-cy="fav-btn-Headphones"]').click();
    cy.get('[data-cy="fav-btn-Sneakers"]').click();
    cy.get('[data-cy="fav-btn-Playstation 5"]').click();

    // Check if the favs badge contains 3 items
    cy.get('[data-cy="favs-count"]').contains("3");

    // Removes the Sneakers from favs
    cy.get('[data-cy="fav-btn-Sneakers"]')
      .should("class", "bg-yellow-300")
      .click();
    cy.get('[data-cy="favs-count"]').contains("2");

    // Sign out
    cy.get('[data-cy="navbar-link-sign-out"]').click();
    cy.url().should("include", "/bye");
    cy.contains("Thank you");
  });
});
