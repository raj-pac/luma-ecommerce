class LoginPage {
  elements = {
    sign_in: () => cy.get('li[class="authorization-link"]').first(),
    email_field: () => cy.get('input[id="email"]'),
    password_field: () => cy.get('input[name="login[password]"'),
    sign_in_button: () => cy.get('button[id="send2"]').first(),
  };

  visitLoginPage() {
    this.elements.sign_in().should("be.visible").click();
    cy.url().should("contain", "login");
  }

  validateLoginPage() {
    this.elements.sign_in().should("be.visible").click();
    cy.url().should("contain", "customer/account");
  }
}

export const loginPage = new LoginPage();
