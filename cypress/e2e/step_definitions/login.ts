import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/login.page";

When("I open login page", () => {
  loginPage.visitLoginPage();
});

Then("I sign in", () => {
  cy.login(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"));
});

Then("I stabed sign in", () => {
  cy.intercept("GET", "/customer/**", { statusCode: 203 }).as("stab");
  cy.login(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"));
  cy.wait("@stab").then((stab) => {
    expect(stab.response?.statusCode).to.eq(203);
  });
});
