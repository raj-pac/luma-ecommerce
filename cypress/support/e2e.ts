import "./commands";

before("Check if Admin is ready for testing and login", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

beforeEach(() => {
  cy.intercept(`/`, cy.spy().as("homePageRequest")).as("homePage");
});
