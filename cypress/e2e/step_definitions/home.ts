import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "@pages/home.page";

When("I visit home page", () => {
  cy.visit("/");
});

Then("I see stubed page was successfully loaded", () => {
  cy.intercept(
    "GET",
    "/pub/static/version1678540400/frontend/Magento/luma/en_US/mage/trim-input.js",
    { statusCode: 201 }
  ).as("stab");
  cy.wait("@stab").then((stab) => {
    expect(stab.response?.statusCode).to.eq(201);
  });
});

Then("I see page was successfully loaded", () => {
  homePage.validateHomePage();
});

When("I search for {string}", (value: string) => {
  cy.search(value);
});

Then("I verify search result {string}", (value: string) => {
  homePage.verifySearchResult(value);
});

Then("I verify stubed search result", () => {
  cy.intercept("GET", "/search/ajax/suggest/**", { statusCode: 201 }).as(
    "stab"
  );
  cy.search("12345");
  cy.wait("@stab").then((stab) => {
    expect(stab.response?.statusCode).to.eq(201);
  });
});
