class HomePage {
  elements = {
    home_element: () => cy.get('[class="info"]'),
    search_field: () => cy.get('input[id="search"]'),
    search_button: () => cy.get('[title="Search"]'),
    search_result: (value: string) => cy.get(`[alt="${value}"]`),
  };

  validateHomePage() {
    cy.get(`@homePageRequest`).should("have.been.called");
    this.elements
      .home_element()
      .should("contain.text", "New Luma Yoga Collection");
  }

  verifySearchResult(value: string) {
    this.elements.search_result(value).scrollIntoView().and("be.visible");
  }
}

export const homePage = new HomePage();
