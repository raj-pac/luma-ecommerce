/* eslint-disable @typescript-eslint/no-namespace */
import { loginPage } from "@pages/login.page";
import { homePage } from "@pages/home.page";

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<JQuery<HTMLElement>>;
      search(value: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add("login", (email, password) => {
  loginPage.elements.email_field().clear().type(email);
  loginPage.elements.password_field().clear().type(password);
  loginPage.elements.sign_in_button().first().click();
});

Cypress.Commands.add("search", (value) => {
  homePage.elements.search_field().clear().type(value);
  homePage.elements.search_button().click();
});
